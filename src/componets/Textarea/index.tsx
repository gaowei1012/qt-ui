import React from 'react'
import { Textarea, View } from '@tarojs/components'
import { QtTextareaProps } from '../../types/TextareaProps'

const QtTextarea = (props: QtTextareaProps) => {
  const {
    customClass,
    lineText,
    statistics
  } = props
  return (
    <View className='textarea_wrap'>
      <View className='top_wrap'>
        <View className='line'/>
        <View className='title'>{lineText}</View>
      </View>
      <Textarea
        {...props}
        className={`textarea_container ${customClass ? customClass : ''}`}
      />
      <View className='textarea_footer'>{statistics}</View>
    </View>

  )
}

export default QtTextarea
