(window.webpackJsonp=window.webpackJsonp||[]).push([["reset-password-modal"],{770:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(0),s=r(1),n=r.n(s),o=r(5),i=r.n(o),l=r(10),c=r(6),d=r(3),u=r(2),p=r(9),m=r(14);function _(e,t,r,a,s,n,o){try{var i=e[n](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(a,s)}var g=function(e){var t=e.logoutClient,r=e.verification_code,s=function(e,r){if(r.setSubmitting(!1),r.resetForm({password:""}),e)return console.error(e),void r.setStatus({error_msg:e});r.setStatus({reset_complete:!0}),t().then((function(){Object(d.redirectToLogin)(!1,Object(u.getLanguage)())}))};return a.createElement("div",{className:"reset-password"},a.createElement(l.Formik,{initialValues:{password:""},initialStatus:{reset_complete:!1,error_msg:""},validate:function(e){var t={};return Object(d.validLength)(e.password,{min:8,max:25})?Object(d.validPassword)(e.password)||(t.password=Object(d.getErrorMessages)().password()):t.password=Object(u.localize)("You should enter {{min_number}}-{{max_number}} characters.",{min_number:8,max_number:25}),t},onSubmit:function(e,t){var a={reset_password:1,new_password:e.password,verification_code:r};m.b.resetPassword(a).then(function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.error?s(r.error.message,t):s(null,t);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,s){var n=e.apply(t,r);function o(e){_(n,a,s,o,i,"next",e)}function i(e){_(n,a,s,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}())}},(function(e){var t=e.handleBlur,r=e.errors,s=e.values,n=e.touched,o=e.isSubmitting,p=e.handleChange,m=e.status;return a.createElement(l.Form,null,a.createElement(a.Fragment,null,m.reset_complete?a.createElement("div",{className:"reset-password__password-selection"},a.createElement(c.Text,{as:"p",weight:"bold",className:"reset-password__heading"},a.createElement(u.Localize,{i18n_default_text:"Your password has been changed"})),a.createElement(c.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},a.createElement(u.Localize,{i18n_default_text:"We will now redirect you to the login page."}))):a.createElement("div",{className:"reset-password__password-selection"},a.createElement(c.Text,{as:"p",weight:"bold",className:"reset-password__heading"},a.createElement(u.Localize,{i18n_default_text:"Choose a new password"})),a.createElement("fieldset",{className:"reset-password__fieldset"},a.createElement(c.PasswordMeter,{input:s.password,has_error:!(!n.password||!r.password),custom_feedback_messages:Object(d.getErrorMessages)().password_warnings},a.createElement(c.PasswordInput,{autoComplete:"new-password",className:"reset-password__password-field",name:"password",label:Object(u.localize)("Create a password"),onChange:p,onBlur:t,error:n.password&&r.password,value:s.password,"data-lpignore":"true",required:!0}))),a.createElement(c.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},m.error_msg?a.createElement(u.Localize,{i18n_default_text:"{{error_msg}}",values:{error_msg:m.error_msg}}):a.createElement(u.Localize,{i18n_default_text:"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols."})),a.createElement(c.Button,{className:i()("reset-password__btn",{"reset-password__btn--disabled":!s.password||r.password||o}),type:"submit",is_disabled:!s.password||!!r.password||o,primary:!0},a.createElement(u.Localize,{i18n_default_text:"Reset my password"})))))})))};g.propTypes={logoutClient:n.a.func,verification_code:n.a.string};var w=function(e){var t=e.disableApp,r=e.enableApp,s=e.is_loading,n=e.is_visible,o=e.logoutClient,i=e.verification_code;return a.createElement(c.Dialog,{is_visible:n,disableApp:t,enableApp:r,is_loading:s},a.createElement(g,{verification_code:i,logoutClient:o}))};w.propTypes={disableApp:n.a.func,enableApp:n.a.func,is_loading:n.a.bool,is_visible:n.a.bool,logoutClient:n.a.func,verification_code:n.a.string};var b=Object(p.b)((function(e){var t=e.ui,r=e.client;return{disableApp:t.disableApp,enableApp:t.enableApp,is_loading:t.is_loading,is_visible:t.is_reset_password_modal_visible,logoutClient:r.logout,verification_code:r.verification_code.reset_password}}))(w)},771:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var a=r(0),s=r(22),n=r(9),o=r(6),i=r(2),l=r(3);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,s=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var u=function(e){switch(e.header){case"password_changed":return a.createElement(o.Text,{as:"p",weight:"bold",className:"reset-password__heading"},a.createElement(i.Localize,{i18n_default_text:"Your password has been changed"}));default:return""}},p=Object(n.b)((function(e){var t=e.client,r=e.ui;return{disableApp:r.disableApp,enableApp:r.enableApp,is_loading:r.is_loading,is_logged_in:t.is_logged_in,logout:t.logout}}))((function(e){var t=e.is_logged_in,r=e.logout,n=e.disableApp,d=e.enableApp,p=e.is_loading,m=c(a.useState(!1),2),_=m[0],g=m[1],w=new URLSearchParams(Object(s.useLocation)().search).get("header"),b=function(){g(!0),Object(l.redirectToLogin)(!1,Object(i.getLanguage)(),!1)};return a.useEffect((function(){t?r().then((function(){return b()})):b()}),[t,r]),a.createElement(o.Dialog,{is_visible:_,disableApp:n,enableApp:d,is_loading:p},a.createElement("div",{className:"reset-password__password-selection"},a.createElement(u,{header:w}),a.createElement(o.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},a.createElement(i.Localize,{i18n_default_text:"We will now redirect you to the login page."}))))}))}}]);
//# sourceMappingURL=core.reset-password-modal.46460f7d0c6dedd30ead.js.map