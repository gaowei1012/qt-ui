import { InputProps } from '@tarojs/components/types/Input'

export interface QtInputProps extends InputProps {
  /** input前缀img地址
   * @default default
   */
  imgSrc?: any
  /** title标题
   * @default default
   */
  title?: string
}
