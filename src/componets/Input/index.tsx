import { View, Text, Image, Input } from '@tarojs/components'
import { QtInputProps } from '../../types/InputProps'
import '../../styles/input.scss'

const QtInput = (props: QtInputProps) => {
  const { title, imgSrc } = props
  return (
    <View className={`input_container ${title ? 'input_left_title_after' : ''} `}>
      {title ? <Text className='input_left_title'>{title}</Text> : <Image className='input_left_icon' src={imgSrc} />}
      <Input {...props} className={`input_class ${title ? 'input_class_title_after' : 'input_class_icon_after'}`} />
    </View>
  )
}

export default QtInput
