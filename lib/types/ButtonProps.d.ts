import { ButtonProps } from '@tarojs/components/types/Button';
export interface QtButtonProps extends ButtonProps {
    /** 按钮文字
     * @supported weapp h5 rn
     * @default default
     */
    btnText: string;
    /** 按钮自定义class样式类
     * @supported weapp h5 rn
     * @default default
     */
    customClass?: String;
}
