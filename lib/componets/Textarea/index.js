import React from 'react';
import { Textarea, View } from '@tarojs/components';
const QtTextarea = (props) => {
    const { customClass, lineText, statistics } = props;
    return (React.createElement(View, { className: 'textarea_wrap' },
        React.createElement(View, { className: 'top_wrap' },
            React.createElement(View, { className: 'line' }),
            React.createElement(View, { className: 'title' }, lineText)),
        React.createElement(Textarea, Object.assign({}, props, { className: `textarea_container ${customClass ? customClass : ''}` })),
        React.createElement(View, { className: 'textarea_footer' }, statistics)));
};
export default QtTextarea;
//# sourceMappingURL=index.js.map