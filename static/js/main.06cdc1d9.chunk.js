(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={form:"Form_form__1MWqL",textbox:"Form_textbox__HT_ZG",button:"Form_button__3RgMg"}},function(e,t,a){e.exports={container:"Task_container__2udyP",task:"Task_task__tZ3_y",fadein:"Task_fadein__VEBww"}},function(e,t,a){e.exports={app:"App_app__2zLXF",title:"App_title__5GgNP"}},,,function(e,t,a){e.exports=a(14)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(6),r=a.n(s),c=(a(13),a(1)),l=a(2),i=a.n(l),m=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),s=a[0],r=a[1];return o.a.createElement("form",{id:"frmAddTask",name:"frmAddTask",autoComplete:"off",onSubmit:function(t){if(t.preventDefault(),null===localStorage.getItem("tasks"))localStorage.setItem("tasks",s);else{var a=localStorage.getItem("tasks").split("::");a.push(s),localStorage.setItem("tasks",a.join("::"))}r(""),e.setUpdate(!0)},className:i.a.form},o.a.createElement("input",{id:"txtTaskName",type:"text",placeholder:"task name",value:s,onChange:function(e){r(e.target.value)},className:i.a.textbox,required:!0}),o.a.createElement("button",{id:"btnAdd",name:"btnAdd",type:"submit",className:i.a.button},"Add"))},u=a(3),d=a.n(u),p=function(e){return o.a.createElement("div",{className:d.a.container},o.a.createElement("div",{id:"divTask",className:d.a.task,onClick:function(t){t.preventDefault();var a=e.taskArray;a.splice(e.index,1),0===a.length?localStorage.removeItem("tasks"):localStorage.setItem("tasks",a.join("::")),e.setUpdate(!0)}},o.a.createElement("h2",null,e.taskName)))},f=function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),s=a[0],r=a[1];return Object(n.useEffect)(function(){if(null!==localStorage.getItem("tasks")){var t=localStorage.getItem("tasks");r(t.split("::"))}e.setUpdate(!1)},[e.update]),o.a.createElement("div",null,s.map(function(t,a){return o.a.createElement(p,{key:a,index:a,taskName:t,taskArray:s,setUpdate:e.setUpdate})}))},k=a(4),_=a.n(k),g=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1];return o.a.createElement("div",{className:_.a.app},o.a.createElement("h1",{className:_.a.title},"To-Do List"),o.a.createElement(m,{setUpdate:s}),o.a.createElement(f,{update:a,setUpdate:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.06cdc1d9.chunk.js.map