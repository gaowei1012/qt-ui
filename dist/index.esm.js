import React from 'react';
import { Button, Checkbox, Text, View, Textarea } from '@tarojs/components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var QtButton = function (props) {
    var btnText = props.btnText, customClass = props.customClass;
    return (React.createElement(Button, __assign({}, props, { className: "btn_class_container " + customClass }), btnText));
};

var QtCheckbox = function (props) {
    var text = props.text;
    return (React.createElement(Checkbox, __assign({}, props),
        React.createElement(Text, { style: { color: '#333' } }, text)));
};

var QtTextarea = function (props) {
    var customClass = props.customClass, lineText = props.lineText, statistics = props.statistics;
    return (React.createElement(View, { className: 'textarea_wrap' },
        React.createElement(View, { className: 'top_wrap' },
            React.createElement(View, { className: 'line' }),
            React.createElement(View, { className: 'title' }, lineText)),
        React.createElement(Textarea, __assign({}, props, { className: "textarea_container " + (customClass ? customClass : '') })),
        React.createElement(View, { className: 'textarea_footer' }, statistics)));
};

var QtCard = function (props) {
    var content = props.content, title = props.title, extra = props.extra, onClick = props.onClick, customClass = props.customClass;
    return (React.createElement(View, { className: "card_container " + (customClass ? customClass : ''), onClick: onClick },
        React.createElement(View, { className: 'card_header' },
            React.createElement(View, { className: 'card_header__left' }, title),
            extra ? React.createElement(View, { className: 'card_header__right' }, extra) : React.createElement(View, null)),
        title ? React.createElement(View, { className: 'line' }) : '',
        React.createElement(View, { className: 'card_content' }, content)));
};

export { QtButton, QtCard, QtCheckbox, QtTextarea };
//# sourceMappingURL=index.esm.js.map
