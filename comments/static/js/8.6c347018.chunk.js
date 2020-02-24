(this["webpackJsonpts-ast-viewer"]=this["webpackJsonpts-ast-viewer"]||[]).push([[8],{286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processSize=function(e){return/^\d+$/.test(e)?"".concat(e,"px"):e},t.noop=function(){}},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(191)),r=a(n(1)),i=a(n(0)),u=n(286);function a(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=p(t).call(this,e),n=!r||"object"!==l(r)&&"function"!==typeof r?d(o):r,g(d(n),"assignRef",(function(e){n.containerElement=e})),n.containerElement=void 0,n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.initMonaco()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.value,r=t.language,i=t.theme,u=t.height,a=t.options,s=t.width,l=this.editor,c=l.getModel();null!=this.props.value&&this.props.value!==c.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.pushUndoStop(),c.pushEditOperations([],[{range:c.getFullModelRange(),text:n}]),this.editor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==r&&o.editor.setModelLanguage(c,r),e.theme!==i&&o.editor.setTheme(i),!l||s===e.width&&u===e.height||l.layout(),e.options!==a&&l.updateOptions(a)}},{key:"componentWillUnmount",value:function(){this.destroyMonaco()}},{key:"destroyMonaco",value:function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel();e&&e.dispose()}this._subscription&&this._subscription.dispose()}},{key:"initMonaco",value:function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.language,r=t.theme,i=t.options,u=t.overrideServices;this.containerElement&&(Object.assign(i,this.editorWillMount()),this.editor=o.editor.create(this.containerElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e,language:n},i,{},r?{theme:r}:{}),u),this.editorDidMount(this.editor))}},{key:"editorWillMount",value:function(){var e=this.props.editorWillMount;return e(o)||{}}},{key:"editorDidMount",value:function(e){var t=this;this.props.editorDidMount(e,o),this._subscription=e.onDidChangeModelContent((function(n){t.__prevent_trigger_change_event||t.props.onChange(e.getValue(),n)}))}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o={width:(0,u.processSize)(t),height:(0,u.processSize)(n)};return i.default.createElement("div",{ref:this.assignRef,style:o,className:"react-monaco-editor-container"})}}])&&f(n.prototype,r),a&&f(n,a),t}(i.default.Component);y.propTypes={width:r.default.oneOfType([r.default.string,r.default.number]),height:r.default.oneOfType([r.default.string,r.default.number]),value:r.default.string,defaultValue:r.default.string,language:r.default.string,theme:r.default.string,options:r.default.object,overrideServices:r.default.object,editorDidMount:r.default.func,editorWillMount:r.default.func,onChange:r.default.func},y.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:u.noop,editorWillMount:u.noop,onChange:u.noop};var v=y;t.default=v},335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(191)),r=a(n(1)),i=a(n(0)),u=n(286);function a(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=p(t).call(this,e),n=!r||"object"!==l(r)&&"function"!==typeof r?d(o):r,g(d(n),"assignRef",(function(e){n.containerElement=e})),n.containerElement=void 0,n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.initMonaco()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.language,r=t.theme,i=t.height,u=t.options,a=t.width,s=this.editor.getModel(),l=s.original,c=s.modified;this.props.original!==l.getValue()&&l.setValue(this.props.original),null!=this.props.value&&this.props.value!==c.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.modifiedEditor.pushUndoStop(),c.pushEditOperations([],[{range:c.getFullModelRange(),text:this.props.value}]),this.editor.modifiedEditor.pushUndoStop(),this.__prevent_trigger_change_event=!1),e.language!==n&&(o.editor.setModelLanguage(l,n),o.editor.setModelLanguage(c,n)),e.theme!==r&&o.editor.setTheme(r),!this.editor||a===e.width&&i===e.height||this.editor.layout(),e.options!==u&&this.editor.updateOptions(u)}},{key:"componentWillUnmount",value:function(){this.destroyMonaco()}},{key:"editorWillMount",value:function(){var e=this.props.editorWillMount;return e(o)||{}}},{key:"editorDidMount",value:function(e){var t=this;this.props.editorDidMount(e,o);var n=e.getModel().modified;this._subscription=n.onDidChangeContent((function(e){t.__prevent_trigger_change_event||t.props.onChange(n.getValue(),e)}))}},{key:"initModels",value:function(e,t){var n=this.props.language,r=o.editor.createModel(t,n),i=o.editor.createModel(e,n);this.editor.setModel({original:r,modified:i})}},{key:"initMonaco",value:function(){var e=null!=this.props.value?this.props.value:this.props.defaultValue,t=this.props,n=t.original,r=t.theme,i=t.options,u=t.overrideServices;this.containerElement&&(this.editorWillMount(),this.editor=o.editor.createDiffEditor(this.containerElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{},r?{theme:r}:{}),u),this.initModels(e,n),this.editorDidMount(this.editor))}},{key:"destroyMonaco",value:function(){if(this.editor){this.editor.dispose();var e=this.editor.getModel(),t=e.original,n=e.modified;t&&t.dispose(),n&&n.dispose()}this._subscription&&this._subscription.dispose()}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o={width:(0,u.processSize)(t),height:(0,u.processSize)(n)};return i.default.createElement("div",{ref:this.assignRef,style:o,className:"react-monaco-editor-container"})}}])&&f(n.prototype,r),a&&f(n,a),t}(i.default.Component);y.propTypes={width:r.default.oneOfType([r.default.string,r.default.number]),height:r.default.oneOfType([r.default.string,r.default.number]),original:r.default.string,value:r.default.string,defaultValue:r.default.string,language:r.default.string,theme:r.default.string,options:r.default.object,overrideServices:r.default.object,editorDidMount:r.default.func,editorWillMount:r.default.func,onChange:r.default.func},y.defaultProps={width:"100%",height:"100%",original:null,value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:u.noop,editorWillMount:u.noop,onChange:u.noop};var v=y;t.default=v},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"MonacoDiffEditor",{enumerable:!0,get:function(){return r.default}});var o=i(n(302)),r=i(n(335));function i(e){return e&&e.__esModule?e:{default:e}}}}]);