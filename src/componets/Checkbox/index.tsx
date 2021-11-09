import React from 'react'
import { Checkbox, Text } from '@tarojs/components'
import { QtCheckboxProps } from '../../types/CheckboxProps'

const QtCheckbox = (props: QtCheckboxProps) => {
  const { text } = props
  return (
    <Checkbox {...props} >
      <Text style={{color: '#333'}}>{text}</Text>
    </Checkbox>
  )
}

export default QtCheckbox
