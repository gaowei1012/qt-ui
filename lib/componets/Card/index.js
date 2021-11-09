import React from 'react';
import { View } from '@tarojs/components';
const QtCard = (props) => {
    const { content, title, extra, onClick, customClass } = props;
    return (React.createElement(View, { className: `card_container ${customClass ? customClass : ''}`, onClick: onClick },
        React.createElement(View, { className: 'card_header' },
            React.createElement(View, { className: 'card_header__left' }, title),
            extra ? React.createElement(View, { className: 'card_header__right' }, extra) : React.createElement(View, null)),
        title ? React.createElement(View, { className: 'line' }) : '',
        React.createElement(View, { className: 'card_content' }, content)));
};
export default QtCard;
//# sourceMappingURL=index.js.map