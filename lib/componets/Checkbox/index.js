import React from 'react';
import { Checkbox, Text } from '@tarojs/components';
const QtCheckbox = (props) => {
    const { text } = props;
    return (React.createElement(Checkbox, Object.assign({}, props),
        React.createElement(Text, { style: { color: '#333' } }, text)));
};
export default QtCheckbox;
//# sourceMappingURL=index.js.map