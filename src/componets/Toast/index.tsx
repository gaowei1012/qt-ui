import React from 'react'
import { View } from '@tarojs/components'
import { QtToastProps } from '../../types/ToastProp'

const QtToast = (props: QtToastProps) => {
  const { showToast } = props
  return (
    <View>{showToast ? '显示' : ''}</View>
  )
}

export default QtToast
