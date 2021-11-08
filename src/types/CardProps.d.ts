import React from "react";

export interface CardProps {
  /** 需要显示的子节点
   * @default default
   */
  content?: React.ReactNode
  /** 标题
   * @default default
   */
  title?: React.ReactNode
  /** header 右边区域
   * @default default
   */
  extra?: React.ReactNode
  /**
   * 点击事件
   */
  onClick?: any
  /** class样式类
   * @default default
   */
  customClass?: string
  /** 自定义style
   * @default default
   */
  style?: any
  /** 子标题
   * @default default
   */
  subTitle?: React.ReactNode
}
