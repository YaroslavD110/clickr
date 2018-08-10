!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));n(5),window.log=function(e){return console.log("--- ",e)},window.onload=function(){new r.default({displayForTime:document.getElementById("display").children[0].children[0],displayForScore:document.getElementById("display").children[1].children[0],overlay:document.getElementById("overlay"),overlayBtn:document.getElementById("overlay-btn"),scoreTable:document.getElementById("score-table"),button:document.getElementById("button")}).initGame()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(2)),o=u(n(3)),a=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t){var n=this,r=t.button,u=t.displayForTime,c=t.displayForScore,l=t.overlay,s=t.overlayBtn,f=t.scoreTable;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=r,this._clickr=new o.default(c),this._scoreTable=new a.default({overlay:l,scoreTableNode:f,overlayBtn:s}),this._timer=new i.default({from:30,display:u,onStop:function(){return n.stopGame()}}),this._isGameStarted=!1}return r(e,[{key:"initGame",value:function(){this._button.addEventListener("click",this._clickEventListener.bind(this))}},{key:"_clickEventListener",value:function(){this._isGameStarted||(this._timer.start(),this._button.classList.remove("btn-before-game"),this._isGameStarted=!0),this._clickr.incrementClicks()}},{key:"stopGame",value:function(){var e=this;this._scoreTable.addScoreToTable(this._clickr.score),this._button.removeEventListener("click",this._clickEventListener.bind(this)),this._button.classList.add("btn-before-game"),this._scoreTable.showScoreTable(),this._clickr.zeroingCounter(),setTimeout(function(){e._isGameStarted=!1},300)}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){var n=t.from,r=t.display,i=t.onStop;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._startFrom=n,this._display=r,this._onStop=i,this._display.innerText=this._startFrom}return r(e,[{key:"start",value:function(){var e=this;this._interval||(this._currentTime=this._startFrom,this._display.innerText=this._startFrom),this._interval=setInterval(function(){e._currentTime>0?e._display.innerText=--e._currentTime:e._stop()},1e3)}},{key:"_stop",value:function(){this._onStop(),clearInterval(this._interval),this._interval=void 0}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._display=t,this._counter=0}return r(e,[{key:"incrementClicks",value:function(){this._display.innerText=++this._counter}},{key:"zeroingCounter",value:function(){this._counter=0}},{key:"score",get:function(){return this._counter}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){var n=this,r=t.overlay,i=t.scoreTableNode,o=t.overlayBtn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._overlay=r,this._scoreTableNode=i,this._scores=new Set([]),this._tryNumber=1,o.addEventListener("click",function(){return n.hideScoreTable()})}return r(e,[{key:"showScoreTable",value:function(){this._overlay.classList.add("overlay-active")}},{key:"hideScoreTable",value:function(){this._overlay.classList.remove("overlay-active")}},{key:"addScoreToTable",value:function(e){this._scores.add({tryNumber:this._tryNumber,score:e}),this._tryNumber++,this._renderScores()}},{key:"_renderScores",value:function(){var e=document.createElement("tbody"),t=!0,n=!1,r=void 0;try{for(var i,o=this._scores[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;e.innerHTML+="\n        <tr>\n          <td>"+a.tryNumber+"</td>\n          <td>"+a.score+"</td>\n        </tr>\n      "}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}this._scoreTableNode.appendChild(e)}}]),e}();t.default=i},function(e,t,n){}]);