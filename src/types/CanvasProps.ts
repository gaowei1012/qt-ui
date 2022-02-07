import React from 'react'

export type Config = {
  context: CanvasRenderingContext2D
  with: number
  height: number
  pixelRatio: number
}

export interface CanvasProps {
  id: string
  className?: string
  style: React.CSSProperties
  onInit: (config: Config) => void
}
