import React from 'react'

export interface LineChartProps {
  /**
   * 自定义图表类型
   */
  customStyle: React.CSSProperties

  /**
   * 接收数据类型
   */
  data: Array<any>
}
