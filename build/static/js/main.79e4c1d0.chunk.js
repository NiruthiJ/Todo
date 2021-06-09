(this.webpackJsonpreact_typescript_todo=this.webpackJsonpreact_typescript_todo||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},187:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(26),s=n.n(o),r=(n(153),n(154),n(23)),i=n(79),d=n.n(i),l="ADD_TODO_SUCCESS",u="ADD_TODO_FAILURE",j="DELETE_TODO_SUCESS",b="DELETE_TODO_FAILURE",O="TODO_STATUS_CHANGE_SUCCESS",m="TODO_STATUS_CHANGE_FAILURE",p="FETCH_TODOS_REQUEST",f="FETCH_TODOS_SUCCESS",h="FETCH_TODOS_FAILURE",g="RESET_SUCCESS",x="RESET_ERROR",y="https://mern-biginners.herokuapp.com",v="/api/todos/",T=n(110),S=n(134),E={loading:!1,todos:[],error:"",success:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case f:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,todos:t.payload});case h:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case l:return Object(r.a)(Object(r.a)({},e),{},{todos:[t.payload].concat(e.todos),success:t.message});case u:return Object(r.a)(Object(r.a)({},e),{},{error:t.message});case j:return Object(r.a)(Object(r.a)({},e),{},{todos:e.todos.filter((function(e){var n;return e._id!==(null===(n=t.payload)||void 0===n?void 0:n._id)})),success:t.message});case b:return Object(r.a)(Object(r.a)({},e),{},{error:t.message});case O:return Object(r.a)(Object(r.a)({},e),{},{todos:e.todos.map((function(e){return t.payload&&t.payload._id===e._id?t.payload:e})),success:t.message});case m:return Object(r.a)(Object(r.a)({},e),{},{error:t.message});case g:return Object(r.a)(Object(r.a)({},e),{},{success:t.message});case x:return Object(r.a)(Object(r.a)({},e),{},{error:t.message});default:return e}},D=Object(T.b)(_,Object(T.a)(S.a)),C=function(e){return function(t){return d.a.post(y+v,e).then((function(e){var n=e.data;t(function(e,t){return{type:l,message:e,payload:t}}("Todo added successfully",n))})).catch((function(e){t(function(e){return{type:u,payload:null,message:e}}(e.message))}))}},F=function(e){return function(t){return d.a.delete(y+v+e._id).then((function(n){t(function(e,t){return{type:j,payload:t,message:e}}("Todo deleted Successfully",e))})).catch((function(e){t(function(e){return{type:b,payload:null,message:e}}(e.message))}))}},w=function(e){return function(t){var n=Object(r.a)({},e);return e.completed?n.completed=!1:n.completed=!0,d.a.patch(y+v+n._id,n).then((function(e){t(function(e,t){return{type:O,payload:t,message:e}}("Todo status updated Successfully",n))})).catch((function(e){var n;t((n=e.message,{type:m,payload:null,message:n}))}))}},M=function(){return{type:p}},N=function(e){return{type:f,payload:e}},R=function(e){return{type:h,payload:null,message:e}};D.subscribe((function(){}));var A=n(72),I=n(41),U=n(257),k=n(48),L=(n(176),n(256)),H=n(99),Y=n(260),B=n(261),V=n(57),q=n(147),G=n(262),J=(n(177),n(97)),P=n(8),z=function(e){var t=e.endDate,n=e.completed,c=Object(a.useState)(""),o=Object(J.a)(c,2),s=o[0],r=o[1];return Object(a.useEffect)((function(){r(n?"Completed.":t?function(e){if(e){var t=new Date,n=new Date(e).valueOf()-t.valueOf(),a=12*(new Date(e).getFullYear()-t.getFullYear());a-=new Date(e).getMonth();var c=(a+=t.getMonth())<=0?0:a,o="months";return 0===c&&(c=Math.floor(Math.abs(n)/864e5),o="days"),0===c&&(c=Math.floor(Math.abs(n)/36e5),o="hours"),0===c&&(c=Math.floor(Math.abs(n)/6e4),o="minutes"),"".concat(Math.abs(c)," ").concat(o," ").concat(n<0?"overdue":"remaining")}return""}(t):"-")}),[n,t]),Object(P.jsx)("div",{className:n?"text-green-500":s.search("overdue")>1?"text-red-500":"text-yellow-500",children:s})},Q=function(e){var t=e.todo,n=e.onTodoRemoval,a=e.onTodoStatusChange;return Object(P.jsx)("div",{children:Object(P.jsx)(L.b.Item,{actions:[Object(P.jsx)(H.a,{title:t.completed?"Mark as uncompleted":"Mark as completed",children:Object(P.jsx)(Y.a,{onChange:function(e){return a(t,e)},defaultChecked:t.completed})}),Object(P.jsx)(B.a,{title:"Are you sure you want to delete?",onConfirm:function(){n(t)},children:Object(P.jsx)(V.a,{className:"align-center",type:"primary",danger:!0,children:Object(P.jsx)(G.a,{})})})],className:"list-item",children:Object(P.jsx)("div",{className:"todo-item",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(q.a,{color:"#BEBEBE",className:"todo-tag",children:t.title}),Object(P.jsx)("div",{className:"align-text-bottom text-base text-left bottomInfo block bg-blac",children:Object(P.jsx)(z,{endDate:t.endDate,completed:t.completed})})]})})},t._id)})},K=function(e){var t=e.todos,n=e.onTodoRemoval,a=e.onTodoStatusChange;return Object(P.jsx)(L.b,{locale:{emptyText:"Nothing to be done"},dataSource:t,renderItem:function(e){return Object(P.jsx)(Q,{todo:e,onTodoStatusChange:a,onTodoRemoval:n})},pagination:{position:"bottom",pageSize:10}})},W=n(258),X=n(259),Z=n(255),$=n(263),ee=(n(187),function(e){var t=e.onFormSubmit,n=W.a.useForm(),a=Object(J.a)(n,1)[0];return Object(P.jsxs)(W.a,{form:a,onFinish:function(){t({title:a.getFieldValue("title"),description:a.getFieldValue("description"),endDate:a.getFieldValue("endDate")}),a.resetFields()},layout:"vertical",className:"todo-form",children:[Object(P.jsx)(A.a,{children:Object(P.jsx)(I.a,{span:24,children:Object(P.jsx)(W.a.Item,{name:"title",label:"Todo title : ",wrapperCol:{span:100},rules:[{required:!0,message:"name required"}],children:Object(P.jsx)(X.a,{placeholder:"add new todo"})})})}),Object(P.jsx)(A.a,{children:Object(P.jsx)(I.a,{span:24,children:Object(P.jsx)(W.a.Item,{name:"description",label:"Todo description : ",children:Object(P.jsx)(X.a,{placeholder:"add description"})})})}),Object(P.jsx)(A.a,{children:Object(P.jsx)(I.a,{span:24,children:Object(P.jsx)(W.a.Item,{name:"endDate",label:"Closing time : ",children:Object(P.jsx)(Z.a,{showTime:!0,format:"YYYY-MM-DD HH:00:00",className:"w-full",disabledDate:function(e){return e&&e.valueOf()<Date.now()}})})})}),Object(P.jsx)(A.a,{children:Object(P.jsx)(I.a,{xs:24,sm:24,md:7,lg:5,xl:4,children:Object(P.jsxs)(V.a,{type:"ghost",htmlType:"submit",block:!0,children:[Object(P.jsx)($.a,{}),"Add todo"]})})})]})}),te=function(){var e=Object(k.c)((function(e){return e})),t=Object(k.b)();Object(a.useEffect)((function(){t((function(e){return e(M()),d.a.get(y+v).then((function(t){var n=t.data;e(N(n))})).catch((function(t){e(R(t.message))}))}))}),[]);return e.loading?Object(P.jsx)("h2",{children:"Loading..."}):Object(P.jsxs)(A.a,{justify:"center",align:"middle",gutter:[0,15],children:[Object(P.jsx)(I.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18}}),Object(P.jsx)(I.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18},children:Object(P.jsx)(U.a,{title:"Create a new todo",children:Object(P.jsx)(ee,{onFormSubmit:function(e){t(C(e))}})})}),Object(P.jsx)(I.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18},children:Object(P.jsx)(U.a,{title:"Todo List",children:Object(P.jsx)(K,{todos:e.todos,onTodoRemoval:function(e){t(F(e))},onTodoStatusChange:function(n,a){t(w(n));var c=e.todos.find((function(e){return e._id===n._id}));c&&(a.target.checked=1==c.completed)}})})})]})},ne=n(144),ae=function(){var e=Object(k.c)((function(e){return e.success})),t=Object(k.c)((function(e){return e.error})),n=Object(k.b)();return Object(a.useEffect)((function(){e&&(ne.b.success(e),n({type:g,payload:null,message:""}))}),[n,e]),Object(a.useEffect)((function(){t&&(ne.b.error(t),n({type:x,payload:null,message:""}))}),[n,t]),Object(P.jsx)(P.Fragment,{})},ce=function(e){var t=e.store;return Object(a.useEffect)((function(){M()}),[]),Object(P.jsx)(k.a,{store:t,children:Object(P.jsxs)("div",{className:"h-auto relative bg-gradient-to-r from-black via-gray-500 to-black",children:[Object(P.jsx)("img",{className:"fixed w-screen top-0 left-0 opacity-30 object-cover h-screen",src:"/images/bg2.jpg",alt:""}),Object(P.jsxs)("div",{className:"relative",children:[Object(P.jsx)(te,{}),Object(P.jsx)(ae,{})]})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,264)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(ce,{store:D})}),document.getElementById("root")),oe()}},[[253,1,2]]]);
//# sourceMappingURL=main.79e4c1d0.chunk.js.map