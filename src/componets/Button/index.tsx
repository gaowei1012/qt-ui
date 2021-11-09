import React from 'react'
import { Button } from '@tarojs/components'
import { QtButtonProps } from '../../types/ButtonProps'

const QtButton = (props: QtButtonProps) => {
  const { btnText, customClass } = props
  return (
    <Button {...props} className={`btn_class_container ${customClass}`}>{btnText}</Button>
  )
}

export default QtButton