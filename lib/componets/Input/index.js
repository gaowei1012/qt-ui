import React from 'react';
import { View, Text, Image, Input } from '@tarojs/components';
const QtInput = (props) => {
    const { title, imgSrc } = props;
    return (React.createElement(View, { className: `input_container ${title ? 'input_left_title_after' : ''} ` },
        title ? React.createElement(Text, { className: 'input_left_title' }, title) : React.createElement(Image, { className: 'input_left_icon', src: imgSrc }),
        React.createElement(Input, Object.assign({}, props, { className: `input_class ${title ? 'input_class_title_after' : 'input_class_icon_after'}` }))));
};
export default QtInput;
//# sourceMappingURL=index.js.map