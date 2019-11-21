(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{238:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return w}));a(29),a(36),a(4);var l=a(0),n=a.n(l),i=a(233),r=a(66);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var d=r.a.div.withConfig({displayName:"calculator__Container",componentId:"lcpakw-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(6,1fr);margin-top:-2vh;margin-left:auto;margin-right:auto;margin-bottom:5vh;height:500px;border:2px solid #FF66CC;@media screen and (min-width:768px){width:400px;height:600px;margin-top:5vh;}"]),c=r.a.button.withConfig({displayName:"calculator__Button",componentId:"lcpakw-1"})(["border:1px solid #FF66CC;display:flex;justify-content:center;align-items:center;background-color:inherit;"]),p=Object(r.a)(c).withConfig({displayName:"calculator__ZeroButton",componentId:"lcpakw-2"})(["grid-column-start:1;grid-column-end:3;grid-row-start:6;grid-row-end:7;"]),m=Object(r.a)(c).withConfig({displayName:"calculator__ClearButton",componentId:"lcpakw-3"})(["grid-column-start:1;grid-column-end:4;grid-row-start:2;grid-row-end:3;"]),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).equalify=function(){"+"===a.state.operator?a.setState({display:a.state.oldNum+a.state.newNum,decimalPlaces:0}):"-"===a.state.operator?a.setState({display:a.state.oldNum-a.state.newNum,decimalPlaces:0}):"*"===a.state.operator?a.setState({display:a.state.oldNum*a.state.newNum,decimalPlaces:0}):"/"===a.state.operator&&a.setState({display:a.state.oldNum/a.state.newNum,decimalPlaces:0})},a.operator=function(e){a.state.operatorLast?a.setState({operator:e,display:a.state.display.slice(0,a.state.display.length-1)+e}):null===a.state.oldNum?a.setState({operator:e,operatorLast:!0,oldNum:a.state.newNum,newNum:0,decimalPlaces:0,decimal:!1,display:a.state.display+e}):"+"===a.state.operator?a.setState({operator:e,operatorLast:!0,oldNum:a.state.oldNum+a.state.newNum,newNum:0,decimalPlaces:0,decimal:!1,display:a.state.display+e}):"-"===a.state.operator?a.setState({operator:e,operatorLast:!0,oldNum:a.state.oldNum-a.state.newNum,newNum:0,decimalPlaces:0,decimal:!1,display:a.state.display+e}):"*"===a.state.operator?a.setState({operator:e,operatorLast:!0,oldNum:a.state.oldNum*a.state.newNum,newNum:0,decimalPlaces:0,decimal:!1,display:a.state.display+e}):"/"===a.state.operator&&a.setState({operator:e,operatorLast:!0,oldNum:a.state.oldNum/a.state.newNum,newNum:0,decimalPlaces:0,decimal:!1,display:a.state.display+e})},a.handleClick=function(e){"Clear"===e?a.setState({operator:"",operatorLast:!1,oldNum:null,newNum:0,display:"0",decimal:!1,decimalPlaces:0}):"+"===e?a.operator(e):"-"===e?a.operator(e):"*"===e?a.operator(e):"/"===e?a.operator(e):"."===e?!1===a.state.decimal&&a.setState({decimal:!0,display:a.state.display+e}):"="===e?a.equalify():a.state.display.toString().length<10&&("0"!==a.state.display[0]?!1===a.state.decimal?a.setState({operatorLast:!1,newNum:10*a.state.newNum+e,display:a.state.display+e.toString()}):a.setState({operatorLast:!1,decimalPlaces:a.state.decimalPlaces+1,newNum:a.state.newNum+e*Math.pow(10,0-(a.state.decimalPlaces+1)),display:a.state.display+e.toString()}):!1===a.state.decimal?a.setState({operatorLast:!1,newNum:10*a.state.newNum+e,display:e.toString()}):a.setState({operatorLast:!1,decimalPlaces:a.state.decimalPlaces+1,display:a.state.display+e.toString()}))},a.state={operator:"",oldNum:null,newNum:0,display:"0",decimal:!1,decimalPlaces:0,done:!1},a.handleClick=a.handleClick.bind(o(a)),a.equalify=a.equalify.bind(o(a)),a}return s(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return n.a.createElement(i.a,{location:this.props.location,title:e},n.a.createElement("h3",{style:{textAlign:"center",marginTop:"-2vh"}},"React Calculator"),n.a.createElement("p",{style:{textAlign:"center"}},"By Michael McCoy"),n.a.createElement(d,null,n.a.createElement("div",{style:{border:"1px solid #FF66CC",gridColumnStart:1,gridColumnEnd:5,gridRowStart:1,gridRowEnd:2,fontSize:"70px",textAlign:"right"}}," ",this.state.display," "),n.a.createElement(y,{value:"Clear",name:"clear",handleClick:this.handleClick,style:{gridColumnStart:1,gridColumnEnd:4,gridRowStart:2,gridRowEnd:3}}),n.a.createElement(h,{value:"/",name:"divide",handleClick:this.handleClick}),n.a.createElement(h,{value:7,name:"seven",handleClick:this.handleClick}),n.a.createElement(h,{value:8,name:"eight",handleClick:this.handleClick}),n.a.createElement(h,{value:9,name:"nine",handleClick:this.handleClick}),n.a.createElement(h,{value:"*",name:"multiply",handleClick:this.handleClick}),n.a.createElement(h,{value:4,name:"four",handleClick:this.handleClick}),n.a.createElement(h,{value:5,name:"five",handleClick:this.handleClick}),n.a.createElement(h,{value:6,name:"six",handleClick:this.handleClick}),n.a.createElement(h,{value:"-",name:"subtract",handleClick:this.handleClick}),n.a.createElement(h,{value:1,name:"one",handleClick:this.handleClick}),n.a.createElement(h,{value:2,name:"two",handleClick:this.handleClick}),n.a.createElement(h,{value:3,name:"three",handleClick:this.handleClick}),n.a.createElement(h,{value:"+",name:"add",handleClick:this.handleClick}),n.a.createElement(C,{value:0,name:"zero",handleClick:this.handleClick,style:{gridColumnStart:1,gridColumnEnd:3,gridRowStart:6,gridRowEnd:7}}),n.a.createElement(h,{value:".",name:"decimal",handleClick:this.handleClick}),n.a.createElement(h,{value:"=",name:"equals",handleClick:this.handleClick})))},t}(n.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this;return n.a.createElement(c,{id:this.props.name,onClick:function(){e.props.handleClick(e.props.value)}},this.props.value)},t}(n.a.Component),C=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this;return n.a.createElement(p,{id:this.props.name,onClick:function(){e.props.handleClick(e.props.value)}},this.props.value)},t}(n.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this;return n.a.createElement(m,{id:this.props.name,onClick:function(){e.props.handleClick(e.props.value)}},this.props.value)},t}(n.a.Component);t.default=u;var w="1097489062"}}]);
//# sourceMappingURL=component---src-pages-calculator-js-5e4a2816fd624927ae0d.js.map