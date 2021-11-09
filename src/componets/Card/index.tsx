import React from 'react'
import { View } from '@tarojs/components'
import { CardProps } from '../../types/CardProps'

const QtCard = (props: CardProps) => {
  const { content, title, extra, onClick, customClass } = props
  return (
    <View className={`card_container ${customClass ? customClass : ''}`} onClick={onClick}>
      <View className='card_header'>
        <View className='card_header__left'>
          {title}
        </View>
        {extra ? <View className='card_header__right'>
          {extra}
        </View> : <View />}
      </View>
      {title ? <View className='line' /> : ''}
      <View className='card_content'>
        {content}
      </View>
    </View>
  )
}

export default QtCard
