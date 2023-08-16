"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Groceries;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function Groceries(props){return/*#__PURE__*/_react["default"].createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"100%",height:"100%"},props),/*#__PURE__*/_react["default"].createElement("path",{d:"M419.841 356.782c0-44.35-35.955-80.302-80.302-80.302H121.253c-44.344 0-80.292 35.948-80.292 80.292v11.868h378.88v-11.858zm8.622 52.818H32.339C14.475 409.6.001 395.126.001 377.262v-20.49c0-66.965 54.287-121.252 121.252-121.252h218.286c66.968 0 121.262 54.29 121.262 121.262v20.48c0 17.864-14.483 32.338-32.338 32.338zM394.24 532.48c14.033 0 25.6-11.567 25.6-25.6s-11.567-25.6-25.6-25.6H66.56c-14.033 0-25.6 11.567-25.6 25.6s11.567 25.6 25.6 25.6h327.68zm0 40.96H66.56C29.905 573.44 0 543.535 0 506.88s29.905-66.56 66.56-66.56h327.68c36.655 0 66.56 29.905 66.56 66.56s-29.905 66.56-66.56 66.56zM20.48 642.56c26.937 0 39.676 2.238 64.184 9.415 27.947 8.184 44.349 11.065 75.695 11.065 31.365 0 47.777-2.881 75.742-11.064 24.528-7.177 37.279-9.416 64.239-9.416s39.711 2.239 64.239 9.416c27.965 8.183 44.377 11.064 75.742 11.064 11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48c-26.96 0-39.711-2.239-64.239-9.416-27.965-8.183-44.377-11.064-75.742-11.064s-47.777 2.881-75.742 11.064c-24.528 7.177-37.279 9.416-64.239 9.416-26.937 0-39.676-2.238-64.184-9.415C68.228 604.481 51.826 601.6 20.48 601.6 9.169 601.6 0 610.769 0 622.08s9.169 20.48 20.48 20.48zm407.983 53.76c17.855 0 32.338 14.474 32.338 32.338v20.48c0 66.972-54.294 121.262-121.262 121.262H121.263C54.288 870.4.001 816.113.001 749.138v-20.48c0-17.864 14.474-32.338 32.338-32.338h396.124zM40.961 737.28v11.858c0 44.354 35.948 80.302 80.302 80.302h218.276c44.347 0 80.302-35.952 80.302-80.302V737.28H40.961zM976.896 384c0-1.585-2.143-4.906-8.301-9.522-8.468-6.348-21.777-12.594-38.893-18.021-36.963-11.72-87.795-18.537-142.247-18.537s-105.284 6.817-142.247 18.537c-17.116 5.427-30.425 11.673-38.893 18.021-6.158 4.616-8.301 7.937-8.301 9.522s2.143 4.906 8.301 9.522c8.468 6.348 21.777 12.594 38.893 18.021 36.963 11.72 87.795 18.537 142.247 18.537s105.284-6.817 142.247-18.537c17.116-5.427 30.425-11.673 38.893-18.021 6.158-4.616 8.301-7.937 8.301-9.522zm40.96 0c0 54.418-102.884 87.04-230.4 87.04s-230.4-32.622-230.4-87.04c0-54.418 102.884-87.04 230.4-87.04s230.4 32.622 230.4 87.04zm-81.987 417.542c0 2.281-11.615 10.988-35.437 18.541-29.485 9.349-70.203 14.81-113.862 14.81s-84.381-5.461-113.868-14.811c-23.824-7.554-35.442-16.261-35.442-18.541 0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48c0 47.385 84.927 74.312 190.269 74.312 105.34 0 190.259-26.927 190.259-74.312 0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M935.936 143.36H832.584c-33.47 0-60.488 27.385-60.488 61.03v174.49c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V204.39c0-11.147 8.804-20.07 19.528-20.07h103.352c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48zM637.17 799.581l-39.516-410.665c-1.083-11.259-11.089-19.508-22.347-18.424s-19.508 11.089-18.424 22.347l39.516 410.665c1.083 11.259 11.089 19.508 22.347 18.424s19.508-11.089 18.424-22.347zm338.907-410.696-40.11 410.665c-1.1 11.257 7.135 21.274 18.392 22.374s21.274-7.135 22.374-18.392l40.11-410.665c1.1-11.257-7.135-21.274-18.392-22.374s-21.274 7.135-22.374 18.392z"}))}