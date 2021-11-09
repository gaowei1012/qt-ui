import React from 'react';
import { View } from '@tarojs/components';
const QtToast = (props) => {
    const { showToast } = props;
    return (React.createElement(View, null, showToast ? '显示' : ''));
};
export default QtToast;
//# sourceMappingURL=index.js.map