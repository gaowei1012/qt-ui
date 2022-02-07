import { Canvas } from '@tarojs/components'
import React, { useEffect } from 'react'
import { CanvasProps } from '../types'
import Taro from '@tarojs/taro'

function wrapEvent(e: any) {
  if (!e) return
  if (!e.preventDefault) e.preventDefault = function () {}
  return e
}

const F2Canvas = (props: CanvasProps) => {
  let _canvasEl: any
  let _chart: any

  useEffect(() => {
    setTimeout(() => {
      onWxCanvas()
    }, 100)
  }, [])

  const onWxCanvas = () => {
    const query = Taro.createSelectorQuery()
    query
      .select('#' + props.id)
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const { node, width, height } = res[0]
        const context = node.getContext('2d')
        const pixelRatio = Taro.getSystemInfoSync().pixelRatio
        node.width = width * pixelRatio
        node.height = height * pixelRatio

        const appendPadding = 5
        const config: any = {
          context,
          width,
          height,
          pixelRatio,
          appendPadding
        }
        const chart: any = props.onInit(config)
        if (chart) {
          _chart = chart
          _canvasEl = chart.get('el')
        }
      })
  }

  const touchStart = (e: { preventDefault: () => void }) => {
    const canvasEl = _canvasEl
    if (canvasEl) canvasEl.dispatchEvent('touchstart', wrapEvent(e))
  }

  const touchMove = (e: any) => {
    const canvasEl = _canvasEl
    e.stopPropagation()
    e.preventDefault()
    if (canvasEl) canvasEl.dispatchEvent('touchmove', wrapEvent(e))
  }

  const touchEnd = (e: { preventDefault: () => void }) => {
    const canvasEl = _canvasEl
    if (canvasEl) canvasEl.dispatchEvent('touchend', wrapEvent(e))
  }

  return (
    <Canvas
      className={props.className}
      style={props.style}
      type='2d'
      id={props.id}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    />
  )
}

export default F2Canvas
