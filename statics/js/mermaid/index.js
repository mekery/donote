/**
 * Markdown-it plugin: mermaid
 *
 * @author Xman
 * @version 1.0
 * @date 2020.02.15
 */
import mermaid  from 'mermaid'
import { MD5 } from 'src/utils/crypto'
import { getItem, saveItem, removeAllStart, removeAllEnd } from 'src/utils/storage'

const mermaidNode = { svgGraph: "" }

const config = {
  logLevel: 5,
  startOnLoad: false,
  arrowMarkerAbsolute: false,
  flowchart: {},
  sequenceDiagram: {},
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 3,
    axisFormatter: [
      // Within a day
      ['%I:%M', d => d.getHours()],
      // Monday a week
      ['w. %U', d => d.getDay() === 1],
      // Day within a week (not monday)
      ['%a %d', d => d.getDay() && d.getDate() !== 1],
      // within a month
      ['%b %d', d => d.getDate() !== 1],
      // Month
      ['%m-%y', d => d.getMonth()],
    ],
  },
  classDiagram: {},
  gitGraph: {},
  info: {}
}

function callback(svgGraph) {
  const firstLine = svgGraph.split(/\n/)[0].trim()
  let reg = /svg-\w+-\w+/gm
  let svgId = firstLine.match(reg)[0]

  // Cache svg data to localStorage
  saveItem(svgId, svgGraph)
  // console.log("svgGraph: ", firstLine, svgId)

  mermaidNode.svgGraph = `<div class="mermaid">${svgGraph}</div>`
}

const mermaidChart = (idx, code, theme) => {
  let prefix = `svg-${idx}`
  let md5 = MD5(idx + code)
  let svgId = `${prefix}-${md5}`
  try {
    // Init and check code
    const mermaidAPI = mermaid.mermaidAPI
    mermaidAPI.initialize({ startOnLoad: false, theme: theme, showSequenceNumbers: true });
    mermaid.parse(code)

    // Load svg data from localStorage
    let svgGraph = getItem(svgId)
    if (svgGraph) {
      mermaidNode.svgGraph = `<div class="mermaid">${svgGraph}</div>`
      return
    } else {
      removeAllStart(prefix)
      removeAllEnd(md5)
    }

    // Render
    mermaidAPI.render(svgId, code, callback)
  } catch (e) {
    mermaidNode.svgGraph = `<preclass="mermaid-error">${code}</pre>`
    console.error(e)
  }
}

const MermaidPlugin = (md, mermaidOptions) => {
  md.mermaid = mermaid
  // options
  let theme = mermaidOptions.theme || 'default'
  let ganttAxisFormat = mermaidOptions.ganttAxisFormat || '%Y-%m-%d'
  mermaid.initialize({
    theme: theme,
    gantt: {
      axisFormatter: [
        [ganttAxisFormat, (d) => {
          return d.getDay() === 1
        }]
      ]
    }
  })

  // render
  const temp = md.renderer.rules.fence.bind(md.renderer.rules)
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const themeForMermaid = mermaidOptions.theme || 'default'
    const token = tokens[idx]
    const code = token.content.trim()

    if (token.info === 'mermaid') {
      mermaidChart(idx, code, themeForMermaid)
      return mermaidNode.svgGraph
    }

    const firstLine = code.split(/\n/)[0].trim()
    if (firstLine === 'gantt' ||
      firstLine === 'sequenceDiagram' ||
      firstLine === 'classDiagram' ||
      firstLine === 'stateDiagram' ||
      firstLine === 'pie' ||
      firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
      mermaidChart(idx, code, themeForMermaid)
      return mermaidNode.svgGraph
    }
    return temp(tokens, idx, options, env, slf)
  }
}

export default MermaidPlugin
