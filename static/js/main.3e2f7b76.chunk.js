(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(58)},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),i=(n(31),n(1)),c=n(6),u=n(3),l=n(2),d=n(4),m=(n(33),n(35),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeShow",value:function(e){e&&this.setState({showDetails:!1}),e||this.setState({showDetails:!0})}},{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return r.a.createElement("div",{className:"event event-container"},r.a.createElement("h1",{className:"summary"},n.summary),r.a.createElement("p",{className:"dateTime"},n.dateTime),r.a.createElement("p",{className:"location"},n.location),t?r.a.createElement("div",{className:"event_details"},r.a.createElement("h2",null,"About Event"),r.a.createElement("a",{href:n.htmlLink,className:"event-link"},"See details on Google calendar"),r.a.createElement("p",{className:"description"},n.description)):null,t?r.a.createElement("button",{className:"details-btn btn-text",onClick:function(){return e.changeShow(t)}},"Hide Details"):r.a.createElement("button",{className:"details-btn btn-text",onClick:function(){return e.changeShow(t)}},"Show Details"))}}]),t}(a.Component)),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))}))}}]),t}(a.Component),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="blue",n}return Object(d.a)(t,e),t}(h),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="red",n}return Object(d.a)(t,e),t}(h),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var a=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==a.length)return n.setState({query:t,suggestions:a,infoText:""});n.setState({query:t,infoText:"The city you search can not be find. Please try again"})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1}),n.props.updateEvents(e)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("input",{className:"city",type:"text",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={NumberOfEvents:32,ErrorAlert:""},n.handleNumberChanged=function(e){var t=e.target.value;t<1||t>32?n.setState({NumberOfEvents:"",ErrorAlert:"Please select number from 1 to 32"}):n.setState({NumberOfEvents:t,ErrorAlert:""}),n.props.updateNumberOfEvents(e.target.value)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Number of events:"),r.a.createElement(v,{text:this.state.ErrorAlert}),r.a.createElement("input",{type:"number",className:"numberOfEvents",value:this.state.NumberOfEvents,onChange:this.handleNumberChanged}))}}]),t}(a.Component),y=n(7),g=n.n(y),k=n(8),j=n(25),S=[{kind:"calendar#event",etag:'"p3308h454qfgum0g"',id:"f86ad0s89f6asdf0as5d6",location:"Los Angeles, CA",timeZone:"Los Angeles/US",dateTime:"2020-05-19T16:00:00+02:00",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",summary:"Learn JavaScript"},{kind:"calendar#event",etag:'"3181161784712000"',id:"fds89a7f80as7df089asf",location:"Berlin, Germany",timeZone:"Europe/Berlin",dateTime:"2020-05-19T16:00:00+02:00",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",summary:"React is Fun"},{kind:"calendar#event",etag:'"3187237556010000"',id:"111vmlbl7p8gmc0fbf5u107p8u_20200723T070000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MjNUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:47:59.000Z",updated:"2020-07-01T15:52:58.005Z",summary:"React Native Tokyo",description:"We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",location:"Tokyo, Japan"},{kind:"calendar#event",etag:'"3187232583216000"',id:"3m5n6mcl1aqrdsg6k5vkr6to5p_20200725T163000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA3MjVUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:54:32.000Z",updated:"2020-07-01T15:11:31.608Z",summary:"Build Your First App with JavaScript",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",location:"Amsterdam, Netherlands",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3187232047578000"',id:"013qoq4ns44cam7q4hqcf13eab_20200628T230000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:05:49.000Z",updated:"2020-07-01T15:07:03.789Z",summary:"jQuery and More",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Santiago, Santiago Metropolitan Region, Chile",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3187221506816000"',id:"48m09le389vijbqfs2mcr6i87q_20200630T070000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:39:01.000Z",updated:"2020-07-01T13:39:13.408Z",summary:"Node Gang",description:"We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",location:"Sydney NSW, Australia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3187234769062000"',id:"46717o686s7ibj1lp300pabro9_20200722T180000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMDA3MjJUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:28:56.000Z",updated:"2020-07-01T15:29:44.531Z",summary:"React Workshop",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Toronto, ON, Canada",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3187221858184000"',id:"3gi3kabkm3bua5lq3jhscc8s4c_20200629T200000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:23:24.000Z",updated:"2020-07-01T13:42:09.092Z",summary:"Intro to AngularJS-Remote",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",location:"New York, NY, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}},{kind:"calendar#event",etag:'"3187222416180000"',id:"6co0ojl0l0j0rbh3g56vlc2s9i_20200724T010000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMDA3MjRUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:44:15.000Z",updated:"2020-07-01T13:46:48.090Z",summary:"React California",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",location:"California, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0}}],E=n(11),O=n.n(E),Z=n(12),N=n.n(Z),M=function(e){var t=e.map(function(e){return e.location});return Object(j.a)(new Set(t))},T=function(){var e=Object(k.a)(g.a.mark(function e(){var t,n,a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=3;break}return e.abrupt("return",S);case 3:return e.next=5,J();case 5:if(!(t=e.sent)){e.next=15;break}return A(),n="https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=11,O.a.get(n);case 11:return(a=e.sent).data&&(r=M(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),N.a.done(),e.abrupt("return",a.data.events);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},x=function(){var e=Object(k.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(k.a)(g.a.mark(function e(t){var n,a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(g.a.mark(function e(){var t,n,a,r,o,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,x(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,O.a.get("https://06oxy5ugn2.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},n.updateEvents=function(e){T().then(function(t){var a="all"===e?t:t.filter(function(t){return t.location===e}),r=n.state.numberOfEvents;n.setState({events:a.slice(0,r)})})},n.updateNumberOfEvents=function(e){var t=n.state.currentLocation;n.setState({numberOfEvents:e}),n.updateEvents(t,e)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.numberOfEvents;this.mounted=!0,T().then(function(n){e.mounted&&e.setState({events:n.slice(0,t),locations:M(n)})})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{locations:this.state.locations,updateEvents:this.updateEvents}),r.a.createElement(w,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),r.a.createElement(f,{events:this.state.events}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,59)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)})};n(24).config("eac6a4ac51574708bdad035561baeaa5").install(),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),C()}},[[26,3,2]]]);
//# sourceMappingURL=main.3e2f7b76.chunk.js.map