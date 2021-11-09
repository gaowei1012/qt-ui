import React from 'react';
import { Button } from '@tarojs/components';
const QtButton = (props) => {
    const { btnText, customClass } = props;
    return (React.createElement(Button, Object.assign({}, props, { className: `btn_class_container ${customClass}` }), btnText));
};
export default QtButton;
//# sourceMappingURL=index.js.map