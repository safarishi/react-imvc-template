/*! last-modify-date:2017-3-9 17:08:17 */
webpackJsonp([1],{309:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}return u.done?void e(i):Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}))}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var f=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),s=n(310),p=o(s),d=n(322),h=o(d),y=n(326),v=r(y),b=v.initialState,m=l(v,["initialState"]),_=(function(e){function t(){var e,n,r,o;u(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.View=h.default,r.initialState=b,r.actions=m,r.handleIncre=function(e){var t=r,n=(t.history,t.store),o=(t.fetch,n.getState()),a=n.actions.INCREMENT;a(o.num)},r.handleDecre=function(e){var t=r,n=t.store,o=n.getState(),a=n.actions.UPDATE_STATE;a({count:o.count-o.num})},r.handleInputChange=function(e,t,n){switch(e){case"num":return Number(t)||n}return t},o=n,i(r,o)}return c(t,e),f(t,[{key:"shouldComponentCreate",value:(function(){function e(){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("shouldComponentCreate");case 1:case"end":return e.stop()}}),e,this)})));return e})()},{key:"componentWillCreate",value:(function(){function e(){return t.apply(this,arguments)}var t=a(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.store.actions.UPDATE_STATE,n=this.store.getState(),e.next=4,this.fetch(n.api.test);case 4:r=e.sent,t({test:r});case 6:case"end":return e.stop()}}),e,this)})));return e})()},{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"pageWillLeave",value:function(){return"pageWillLeave"}},{key:"windowWillUnload",value:function(){return"windowWillUnload"}}]),t})(p.default);t.default=_},310:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),l=n(311),f=r(l),s=n(321),p=r(s),d=(function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"getInitialState",value:function(e){return i({},e,p.default)}}]),t})(f.default);t.default=d},321:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={api:{test:"/mock/app-template/json/test"}}},322:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.state,n=e.handlers;return u.default.createElement("div",null,u.default.createElement(c.default,null),u.default.createElement("div",null,u.default.createElement("h1",null,"count: ",t.count),u.default.createElement("div",null,u.default.createElement("button",{onClick:n.handleIncre},"加",t.num)," ",u.default.createElement("button",{onClick:n.handleDecre},"减",t.num)," ",u.default.createElement(f.default,{name:"num"})),u.default.createElement("div",null,"我是展示 ajax 数据的容器：",JSON.stringify(t.test))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(312),u=r(a),i=n(323),c=r(i),l=n(325),f=r(l)},323:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return u.default.createElement("div",null,u.default.createElement(c.default,{to:"/template"},"首页")," ",u.default.createElement(c.default,{to:"/template/list"},"列表")," ",u.default.createElement(c.default,{to:"/template/detail"},"详情"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=n(312),u=r(a),i=n(324),c=r(i)},325:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){t=Array.isArray(t)?t:t.split(".");var r=t.reduce((function(e,r,o){if(o===t.length-1)e[o][r]=n;else{var a=e[o][r]=f({},e[o][r]);e.push(a)}return e}),[f({},e)]);return r[0]}function l(e,t){return t=Array.isArray(t)?t:t.split("."),t.reduce((function(e,t){return e[t]}),e)}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),p=n(312),d=r(p),h=(function(e){function t(){var e,n,r,o;a(this,t);for(var i=arguments.length,f=Array(i),s=0;s<i;s++)f[s]=arguments[s];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),r.handleChange=function(e){var t=r.context,n=t.state,o=t.handleInputChange,a=r.props,u=a.name,i=a.onChange,f=a.check,s=e.currentTarget.value,p=f?u+".value":u,d=l(n,p),h=o?o(p,s,d):s,y=c(n,p,h);r.setGlobalState(y),i&&i(e)},r.handleFocus=function(e){var t=r.context.state,n=r.props,o=n.name,a=n.onFocus,u=o+".isWarn",i=l(t,u);if(i){var f=c(t,u,!1);r.setGlobalState(f),a&&a(e)}},r.handleBlur=function(e){var t=r.context.state,n=r.props,o=n.name,a=n.onBlur,u=n.check,i=o+".isValid",l=o+".isWarn",f=u(e.currentTarget.value),s=t;s=c(s,i,f),s=c(s,l,!f),r.setGlobalState(s),a&&a(e)},o=n,u(r,o)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.context.state,t=this.props,n=t.as,r=t.name,a=t.value,u=t.check,i=(t.actionType,o(t,["as","name","value","check","actionType"])),c=n,f=u?r+".value":r;return void 0===a&&(a=l(e,f)),i.value=a,i.name=r,i.onChange=this.handleChange,u&&(i.onFocus=this.handleFocus,i.onBlur=this.handleBlur),d.default.createElement(c,i)}},{key:"getAction",value:function(){return this.context.actions[this.props.actionType]}},{key:"setGlobalState",value:function(e){var t=this.getAction();t(e)}}]),t})(p.Component);h.contextTypes={state:p.PropTypes.object,actions:p.PropTypes.object,handleInputChange:p.PropTypes.func},h.defaultProps={as:"input",type:"text",name:"",actionType:"UPDATE_INPUT_VALUE"},t.default=h},326:function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r({},e,{count:e.count+t})}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.INCREMENT=n;t.initialState={count:0,num:1}}});