import React from 'react'
import { Chart } from '@antv/f2'
import F2Canvas from '../../common/canvas'
import { LineChartProps } from '../../types'

const LineChart: React.Fc<LineChartProps> = props => {
  const { data } = props
  const initChart = config => {
    const chart = new Chart(
      Object.assign(config, {
        appendPadding: [10, 15, 10, 15],
        // 预留展示tooltip高度
        padding: [40, 'auto', 'auto']
      })
    )
    chart.clear()

    // 装载数据
    chart.source(data, {
      date: {
        range: [0, 1],
        type: 'timeCat',
        mask: 'MM-DD'
      },
      value: {
        max: 300,
        tickCount: 4
      }
    })

    chart.axis('y', {
      label: {
        fill: '#B6B5B8',
        fontSize: 12
      }
    })

    chart.axis('x', {
      label: {
        fill: '#B6B5B8',
        fontSize: 12
      }
    })
    chart.area().position('date*value').color('city').adjust('stack')
    chart.line().position('date*value').color('city').adjust('stack')
    chart.render()
    return chart
  }
  return (
    <F2Canvas
      id='lien_chart'
      onInit={initChart}
      style={{ width: '100%', height: 200 }}
    />
  )
}

export default LineChart
