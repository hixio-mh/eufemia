(window.webpackJsonp=window.webpackJsonp||[]).push([[79,138],{143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(75),n(51),n(288);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(281);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"hr",components:t}),o.default.createElement(a.MDXTag,{name:"h2",components:t},"Please Contribute"),o.default.createElement(a.MDXTag,{name:"p",components:t},"At a first glance the Library my look complete, finished and polished. But it's not. It's a living life library of font-end code and design principles we have to continuously work on, follow and make better."),o.default.createElement(a.MDXTag,{name:"p",components:t},o.default.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},"So - please contribute.")),o.default.createElement(a.MDXTag,{name:"hr",components:t}))};t._frontmatter={title:"Welcome Info",draft:!0}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(75),n(51),n(288);var r=a(n(0)),o=n(281);a(n(143));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return r.default.createElement(o.MDXTag,{name:"wrapper",components:t},r.default.createElement(o.MDXTag,{name:"p",components:t},"Quickguide for Developers is ",r.default.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Deprecated"),"\nLooks like we don't need this Section for now."),r.default.createElement(o.MDXTag,{name:"h1",components:t},"Quickguide Developers"))};t._frontmatter={header:"UI Library",title:"Quickguide Developers",draft:!1}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(364);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(310);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},288:function(e,t,n){var r=n(38),o=n(39);n(365)("keys",function(){return function(e){return o(r(e))}})},310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var c=u.default.createContext({}),l=c.Provider,i=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return u.default.createElement(i,null,function(t){return u.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(l,{value:t},n)}},364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=(r=u)&&r.__esModule?r:{default:r},l=n(310);var i={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,l=e.components,f=void 0===l?{}:l,p=e.Layout,s=e.layoutProps,d=f[n+"."+t]||f[t]||i[t]||t;return p?c.default.createElement(p,o({components:f},s),c.default.createElement(d,a,u)):c.default.createElement(d,a,u)}}]),t}();t.default=(0,l.withMDXComponents)(f)},365:function(e,t,n){var r=n(25),o=n(19),a=n(24);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-quickguide-developer-md-2ce06656bd97f23fbd8b.js.map