import { TextareaProps } from '@tarojs/components/types/Textarea'

export interface QtTextareaProps extends TextareaProps {
  /** 自定义Textarea样式类
   * @default default
   */
  customClass?: string
  /** 左上角的line描述文字
   * @default default
   */
  lineText?: string
  /** 规定可输入字数
   * @default default
   */
  statistics?: string
}