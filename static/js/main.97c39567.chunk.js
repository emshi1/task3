(this.webpackJsonptask3=this.webpackJsonptask3||[]).push([[0],{143:function(e,t,a){e.exports={right:"RightArea_right__14XtI"}},147:function(e,t,a){e.exports={sort:"SortTask_sort__16WUK",sel:"SortTask_sel__8n0M9"}},220:function(e,t,a){e.exports={left:"LeftArea_left__CiUqM"}},222:function(e,t,a){e.exports=a(415)},224:function(e,t,a){},35:function(e,t,a){e.exports={add:"NewTask_add__3R8M5",text:"NewTask_text__2SURt",checkbox:"NewTask_checkbox__3i3rW",span:"NewTask_span__2LinA"}},415:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=(a(224),a(95)),s=a.n(c),o=a(9),l=a(10),i=a(12),u=a(11),d=a(143),h=a.n(d),p=a(4),m=a(14),b=a(97),f=a.n(b),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.id,title:e.props.title,parrent:e.props.parrent},e.handleClick=function(t){window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0435\u043b\u043e ".concat(e.state.title,"?"))&&e.props.deleteSub(e.state.id,e.state.parrent)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn btn-danger ".concat(f.a.x)},"x")}}]),a}(n.Component),g=Object(p.b)(null,(function(e){return{deleteSub:function(t,a){return e(function(e,t){return function(a,n,r){var c=(0,r.getFirestore)();console.log(e),c.collection("tasks").doc(t).collection("subtasks").doc(e).delete().then((function(){a({type:"DELETE_SUBTASK"})})).catch((function(e){a({type:"DELETE_SUBTASK_ERROR",err:e})}))}}(t,a))}}}))(E),k=a(44),_=a.n(k),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.subtask.title,date:e.props.subtask.date.seconds,done:e.props.subtask.done,urgently:e.props.subtask.urgently,id:e.props.id,parrent:e.props.parrent},e.handleChange=function(t){e.setState({done:t.target.checked}),e.props.subDone(e.state.id,t.target.checked,e.state.parrent),e.props.doneTask(e.state.parrent)},e}return Object(l.a)(a,[{key:"render",value:function(){if(this.props){var e=this.state.date,t=new Date(1e3*e),a=t.getDate()+"."+t.getMonth()+"."+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes();return r.a.createElement("div",{className:_.a.subtask},r.a.createElement("input",{type:"checkbox",checked:this.state.done,onChange:this.handleChange}),r.a.createElement("div",{className:_.a.content},r.a.createElement("input",{type:"checkbox",id:_.a.check,className:_.a.check,disabled:"disabled",defaultChecked:this.state.urgently}),r.a.createElement("label",{htmlFor:_.a.check}),r.a.createElement("span",null,this.state.title),r.a.createElement("span",{className:_.a.date},a),r.a.createElement(g,{title:this.state.title,id:this.state.id,parrent:this.state.parrent})))}return r.a.createElement("div",null)}}]),a}(n.Component),O=Object(p.b)(null,(function(e){return{subDone:function(t,a,n){return e(function(e,t,a){return function(n,r,c){(0,c.getFirestore)().collection("tasks").doc(a).collection("subtasks").doc(e).update({done:t}).then((function(){n({type:"SUB_DONE"})})).catch((function(e){n({type:"SUB_DONE_ERROR",err:e})}))}}(t,a,n))},doneTask:function(t){return e((a=t,function(e,t,n){var r=(0,n.getFirestore)();console.log(a);var c=r.collection("tasks").doc(a).collection("subtasks");r.collection("tasks").doc(a).update({done:"done"}).then((function(){c.get().then((function(t){t.forEach((function(t){!1===t.data().done&&r.collection("tasks").doc(a).update({done:"almoust"}).then((function(){e({type:"DONE_TASK"})}))}))}))})).catch((function(t){e({type:"DONE_TASK_ERROR",err:t})}))}));var a}}}))(v),R=a(30),S=a(35),j=a.n(S),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",urgently:!1,done:!1},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.title?e.props.createSubtask(e.state,e.props.parrent):alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.add},r.a.createElement("input",{className:j.a.text,id:"title",onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0414\u0435\u043b\u0430"}),r.a.createElement("input",{type:"checkbox",id:"urgently",className:j.a.checkbox,onChange:this.handleChange}),r.a.createElement("span",{className:j.a.span},"\u0421\u0440\u043e\u0447\u043d\u043e\u0435"),r.a.createElement("button",{value:"",className:"btn btn-success"},"ButAdd"))}}]),a}(n.Component),C=Object(p.b)(null,(function(e){return{createSubtask:function(t,a){return e(function(e,t){return function(a,n,r){var c=(0,r.getFirestore)();c.collection("tasks").doc(t).collection("subtasks").add(Object(m.a)(Object(m.a)({},e),{},{date:new Date})).then((function(){c.collection("tasks").doc(t).update({done:"almoust"}).then((function(){c.collection("tasks").doc(t).get().then((function(t){var n=t.data().title;a({type:"CREATE_SUBTASK",subtask:e,parrentTitle:n})}))}))})).catch((function(e){a({type:"CREATE_SUBTASK_ERROR",err:e})}))}}(t,a))}}}))(y),N=a(34),T=a(22),A=Object(T.d)(Object(p.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.tasks,r=e.firestore.data.sbt;return{task:n?n[a]:null,parrent:a,sub:r}})),Object(N.firestoreConnect)((function(e){return[{collection:"tasks",doc:e.parrent,subcollections:[{collection:"subtasks",orderBy:["date","asc"]}],storeAs:"sbt"}]})))((function(e){var t=e.task,a=e.parrent,n=e.sub;return t?r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:h.a.right},r.a.createElement("h3",{className:h.a.h3},t.title),n&&Object.entries(n).map((function(e){return r.a.createElement(O,{subtask:e[1],key:e[0],id:e[0],parrent:a})})),r.a.createElement(C,{parrent:a}))):r.a.createElement("div",null,r.a.createElement("p",null,"Choose another Task"))})),w=a(220),x=a.n(w),U=a(71),D=a.n(U),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.id,title:e.props.task},e.handleClick=function(t){window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b ".concat(e.state.title,"?"))&&e.props.deleteTask(e.state.id)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",onClick:this.handleClick,className:"btn btn-danger ".concat(f.a.x)},"x")}}]),a}(n.Component),F=Object(p.b)(null,(function(e){return{deleteTask:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)();console.log(e),r.collection("tasks").doc(e).delete().then((function(){t({type:"DELETE_TASK"})})).catch((function(e){t({type:"DELETE_TASK_ERROR",err:e})}))}}(t))}}}))(L),I=a(16),K=function(e){var t;return console.log(e.task),t="done"===e.task.done?D.a.done:"almoust"===e.task.done?D.a.almoust:D.a.task,r.a.createElement("div",{className:t,id:"task"},r.a.createElement(I.b,{to:"/".concat(e.task.id),className:D.a.a},e.task.title),r.a.createElement(F,{id:e.task.id,task:e.task.title}))},B=a(147),G=a.n(B),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"almoust"},e.handleChange=function(t){e.setState({value:t.target.value}),console.log(t.target.value)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",null,r.a.createElement("div",{className:G.a.sort},r.a.createElement("select",{value:this.state.value,className:G.a.sel,onChange:this.handleChange},r.a.createElement("option",{value:"almoust"},"\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),r.a.createElement("option",{value:"done"},"\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),r.a.createElement("option",{value:"all"},"\u0412\u0441\u0435"))),this.props.tasks&&this.props.tasks.map((function(t){if(e.props.uid===t.uid){if("all"===e.state.value)return r.a.createElement(K,{task:t,key:t.id});if(e.state.value===t.done)return r.a.createElement(K,{task:t,key:t.id})}})))}}]),a}(n.Component),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.title?e.props.createTask(e.state):alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430")},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:j.a.add},r.a.createElement("input",{onChange:this.handleChange,className:j.a.text,id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0421\u043f\u0438\u0441\u043a\u0430"}),r.a.createElement("button",{value:"",className:"btn btn-success"},"ButAdd"))}}]),a}(n.Component),W=Object(p.b)(null,(function(e){return{createTask:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.auth.uid;r.collection("tasks").add(Object(m.a)(Object(m.a)({},e),{},{uid:c,done:"none"})).then((function(){t({type:"CREATE_TASK",task:e})})).catch((function(e){t({type:"CREATE_TASK_ERROR",err:e})}))}}(t))}}}))(P),z=function(e){return console.log(e),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:x.a.left},r.a.createElement(M,{tasks:e.tasks,uid:e.uid}),r.a.createElement(W,null)))},J=a(7),Z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.tasks;return t.uid?r.a.createElement("div",{className:"row"},r.a.createElement(z,{tasks:a,uid:t.uid}),r.a.createElement(J.b,{path:"/:id",component:A})):r.a.createElement(J.a,{to:"/login"})}}]),a}(n.Component),q=Object(T.d)(Object(p.b)((function(e){return{tasks:e.firestore.ordered.tasks,auth:e.firebase.auth}})),Object(N.firestoreConnect)([{collection:"tasks"}]))(Z),H=a(45),X=a.n(H),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.login(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(J.a,{to:"/"}):r.a.createElement("form",{onSubmit:this.handleSubmit,className:"".concat(X.a.login," + col-3")},r.a.createElement("h3",{className:X.a.h3},"\u0412\u0445\u043e\u0434"),r.a.createElement("input",{onChange:this.handleChange,id:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",className:X.a.input}),r.a.createElement("input",{onChange:this.handleChange,id:"password",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",className:X.a.input}),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/Registr",className:X.a.a},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?")),r.a.createElement("button",{className:"btn btn-primary"},"Login"),r.a.createElement("div",{className:X.a.red},t?r.a.createElement("p",null,t):null))}}]),a}(n.Component),Y=Object(p.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{login:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(V),Q=a(58),$=a.n(Q),ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.registr(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(J.a,{to:"/"}):r.a.createElement("form",{onSubmit:this.handleSubmit,className:"".concat($.a.login," + col-3")},r.a.createElement("h3",{className:$.a.h3},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("input",{onChange:this.handleChange,id:"email",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",className:$.a.input}),r.a.createElement("input",{onChange:this.handleChange,id:"password",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",className:$.a.input}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary"},"SignUp")),r.a.createElement("div",{className:$.a.red},a?r.a.createElement("p",null,a):null))}}]),a}(n.Component),te=Object(p.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{registr:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().createUserWithEmailAndPassword(e.email,e.password).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(ee),ae=Object(p.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("button",{onClick:e.signOut,className:"btn btn-link nav-item nav-link"},"Log Out")})),ne=function(){return r.a.createElement("div",null,r.a.createElement(I.b,{to:"/Registr",className:" nav-link"},"Signup"),r.a.createElement(I.b,{to:"/login",className:" nav-link"},"Login"))},re=Object(p.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,a=t.uid?r.a.createElement(ae,null):r.a.createElement(ne,{className:"navbar-nav"});return r.a.createElement("nav",{className:"navbar navbar-expand-lg  navbar-dark bg-dark"},r.a.createElement("span",{className:"email"},t.email),a)})),ce=Object(J.f)((function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(J.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(J.b,{exact:!0,path:"/Registr",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(J.b,{path:"/",render:function(){return r.a.createElement(q,null)}}))})),se=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ce,null))},oe={authError:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(m.a)(Object(m.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return console.log("s s"),Object(m.a)(Object(m.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("s e"),Object(m.a)(Object(m.a)({},e),{},{authError:t.err.message});default:return e}},ie={},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TASK":return alert("\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b ".concat(t.task.title," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d")),e;case"CREATE_TASK_ERROR":return alert("ERROR ".concat(t.err)),e;case"DELETE_TASK":return e;case"DELETE_TASK_ERROR":return alert("ERROR ".concat(t.err)),e;case"DONE_TASK":return console.log("89"),e;case"DONE_TASK_ERROR":return alert("ERROR ".concat(t.err)),e;default:return e}},de={},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SUBTASK":return alert("\u0414\u0435\u043b\u043e ".concat(t.subtask.title," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0441\u043f\u0438\u0441\u043e\u043a ").concat(t.parrentTitle)),e;case"CREATE_SUBTASK_ERROR":return console.log("ERROR",t.err),e;case"DELETE_SUBTASK":return console.log("3221513"),e;case"DELETE_SUBTASK_ERROR":return console.log("ERROR",t.err),e;case"SUB_DONE":return console.log("123"),e;case"SUB_DONE_ERROR":return console.log("ERROR",t.err),e;default:return e}},pe=a(56),me=Object(T.c)({auth:le,task:ue,subtask:he,firestore:pe.firestoreReducer,firebase:N.firebaseReducer}),be=a(221),fe=a(57);a(411),a(413);fe.a.initializeApp({apiKey:"AIzaSyDlGsLz8rGMZWjb2voOhW51U9557s7tsxM",authDomain:"todo-123e5.firebaseapp.com",databaseURL:"https://todo-123e5.firebaseio.com",projectId:"todo-123e5",storageBucket:"todo-123e5.appspot.com",messagingSenderId:"765910339424",appId:"1:765910339424:web:982ee8ff651f3492635805"}),fe.a.firestore().settings({timestampInSnapshots:!0});var Ee=fe.a,ge=Object(T.e)(me,Object(T.d)(Object(T.a)(be.a.withExtraArgument({getFirestore:pe.getFirestore,getFirebase:N.getFirebase})),Object(pe.reduxFirestore)(Ee,{attachAuthIsReady:!0}))),ke={firebase:fe.a,config:Ee,dispatch:ge.dispatch,createFirestoreInstance:pe.createFirestoreInstance,sessions:"sessions"};s.a.render(r.a.createElement(p.a,{store:ge},r.a.createElement(N.ReactReduxFirebaseProvider,ke,r.a.createElement(I.a,null,r.a.createElement(se,null)))),document.getElementById("root"))},44:function(e,t,a){e.exports={subtask:"Subtask_subtask__3moB_",content:"Subtask_content__274cU",date:"Subtask_date__2036t",check:"Subtask_check__E1_q2"}},45:function(e,t,a){e.exports={input:"LoginForm_input__1ux6m",login:"LoginForm_login__265yC",h3:"LoginForm_h3__rKIhX",a:"LoginForm_a__208Ix",red:"LoginForm_red__3gJbR"}},58:function(e,t,a){e.exports={input:"Registr_input__10RMb",login:"Registr_login__2Jw7g",h3:"Registr_h3__VLeH7",red:"Registr_red__1C6fn"}},71:function(e,t,a){e.exports={task:"Task_task__1ikyk",done:"Task_done__ZlbKk",almoust:"Task_almoust__2Iz6Z",a:"Task_a__6i4M0"}},97:function(e,t,a){e.exports={x:"ButDelete_x__2FawN"}}},[[222,1,2]]]);
//# sourceMappingURL=main.97c39567.chunk.js.map