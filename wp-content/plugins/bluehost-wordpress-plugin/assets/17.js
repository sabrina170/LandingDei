(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{406:function(e,t,c){},452:function(e,t,c){"use strict";c.r(t);var s=c(1),a=(c(406),c(8)),r=c(4),n=c(323),l=c(350),o=c.n(l),i=c(7),u=c.n(i),b=c(447),m=c(453),d=c(456),p=c(10),h=c.n(p),_=c(2),O=c.n(_);function j(e){var t,c=e.className,a=e.group,r=e.isChecked,n=e.onChange,l=e.value;return Object(s.createElement)("label",{className:O()((t={btn:!0,"btn-secondary":!0},h()(t,"".concat(c,"__option"),!0),h()(t,"--is-active",r),t))},Object(s.createElement)("input",{checked:r,className:"".concat(c,"__option-field"),name:a,onClick:function(){r&&n("")},onChange:function(){n(l)},type:"radio",value:l}),Object(s.createElement)("span",{className:"".concat(c,"__option-field-label")},l))}function f(e){var t=e.className,c=e.defaultValue,a=void 0===c?"":c,r=e.group,n=e.onChange,l=e.options,o=Object(s.useState)(a),i=u()(o,2),b=i[0],m=i[1];return Object(s.createElement)("div",{className:"".concat(t,"__group")},l.map((function(e,c){return Object(s.createElement)(j,{className:t,group:r,isChecked:b===e,key:c,value:e,onChange:function(e){m(b!==e?e:""),n(e)}})})))}function v(e){var t=e.className,c=void 0===t?"resources-search-filters":t,a=e.defaultValue,r=e.group,n=e.label,l=e.onChange,o=e.options;return Object(s.createElement)("div",{className:c},Object(s.createElement)("span",{className:"".concat(c,"__label screen-reader-text")},n),Object(s.createElement)(f,{className:c,defaultValue:a,group:r,onChange:l,options:o}))}var E=c(3),g=c(445),w=Object(g.a)((function(e){var t=e.defaultRefinement,c=e.onSubmit,a=e.refine,n=Object(s.useState)(t),l=u()(n,2),o=l[0],i=l[1];return Object(s.createElement)("form",{action:"",className:"resources-search-form",noValidate:!0,onSubmit:function(e){e.preventDefault(),a(o),c(o)},role:"search"},Object(s.createElement)("input",{type:"text",placeholder:Object(E.__)("Search Resources","bluehost-wordpress-plugin"),value:o,onChange:function(e){return i(e.target.value)},"aria-label":Object(E.__)("Search","bluehost-wordpress-plugin")}),Object(s.createElement)("button",{type:"submit"},Object(s.createElement)(r.F,null),Object(s.createElement)("span",{className:"screen-reader-text"},Object(E.__)("Search Resources","bluehost-wordpress-plugin"))))})),N=c(454),y=c(446);function k(e,t){return e.length<=t?e:e.substr(0,t)+"..."}var C=function(e){var t=e.hasMore,c=e.onClick;return t?Object(s.createElement)("div",{className:"button-container"},Object(s.createElement)("button",{className:"components-button bluehost is-secondary is-link",onClick:c},Object(E.__)("More","bluehost-wordpress-plugin"))):null},S=Object(N.a)((function(e){e.hasMore;var t=e.hits,c=e.refineNext;return t.length?Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"resources-search-results"},t.map((function(e,t){var c=e.permalink,a=e.content,r=e.post_title,n=new URL(c);return n.host="bluehost.com",Object(s.createElement)("a",{className:"resource-card",href:n,key:t,rel:"noreferrer noopener",target:"_blank"},Object(s.createElement)("div",{className:"resource-card__title",dangerouslySetInnerHTML:{__html:r}}),Object(s.createElement)("div",{className:"resource-card__description",dangerouslySetInnerHTML:{__html:k(a,100)}}))}))),Object(s.createElement)(C,{hasMore:!1,onClick:c})):Object(s.createElement)("p",{className:"resource-search-no-results"},Object(E.__)("There were no results for your query. Please try again.","bluehost-wordpress-plugin"))})),x=Object(y.a)((function(){return Object(s.createElement)(S,null)})),F=c(427),V=c.n(F),M=c(311),R=c(5),q=V()("AVE0JWZU92","92e960b820b03fb532d5f440191ec0fe"),L=Object(b.a)(),W=function(){Object(s.useRef)(!0);var e=Object(s.useState)(""),t=u()(e,2),c=t[0],a=t[1],r=Object(s.useState)({query:c}),n=u()(r,2),l=n[0],o=n[1],i=Object(s.useState)(["post_type:post"]),b=u()(i,2),p=b[0],h=b[1],_=Object(s.useState)("Websites"),O=u()(_,2),j=O[0],f=O[1];return Object(s.useEffect)((function(){h(j?["post_type:post","taxonomies.category:".concat(j)]:["post_type:post"])}),[j]),Object(s.useEffect)((function(){Object(R.f)({action:"resource-center-search",data:{query:{text:c,category:j}}})}),[c,j]),Object(s.createElement)(s.Fragment,null,Object(s.createElement)(m.a,{indexName:"bh_rc_searchable_posts",searchClient:q,searchState:l,onSearchStateChange:o},Object(s.createElement)(d.a,{hitsPerPage:6,filters:Object(M.join)(p," AND "),distinct:!0}),Object(s.createElement)(w,{defaultRefinement:c,onSubmit:function(e){return a(e)}}),Object(s.createElement)(v,{defaultValue:j,group:"taxonomies.user_level_tax",label:Object(E.__)("Filter by","bluehost-wordpress-plugin"),onChange:function(e){return f(e)},options:["Websites","Marketing","Business"]}),Object(s.createElement)(x,{cache:L})))},D=c(369),I=c.n(D);t.default=function(){return Object(s.createElement)(n.a,{className:"page-help"},Object(s.createElement)(a.c,{level:"h2",size:0},Object(E.__)("Help","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"clouds"},Object(s.createElement)("div",{className:"section-intro"},Object(s.createElement)("div",{className:"chat-button-container"},Object(s.createElement)(a.a,{className:"chat-button",href:Object(R.a)("https://helpchat.bluehost.com/",{utm_content:"help_chat_button",utm_term:"Chat with us"}),isPrimary:!0,rel:"noopener noreferrer",target:"_blank"},Object(E.__)("Chat with us","bluehost-wordpress-plugin")," ",Object(s.createElement)(r.i,{className:"chat-icon"}))),Object(s.createElement)("h3",{className:"section-title"},Object(E.__)("From DIY to full-service help","bluehost-wordpress-plugin")),Object(s.createElement)("p",{className:"section-description"},Object(E.__)("Feeling stuck? Choose how much help you'd like, from how-to articles to your own website concierge.","bluehost-wordpress-plugin"))),Object(s.createElement)("div",{className:"section-blue-sky"},Object(s.createElement)("div",{className:"section-title"},Object(s.createElement)(r.e,null),Object(s.createElement)("span",{className:"screen-reader-text"},Object(E.__)("Blue Sky","bluehost-wordpress-plugin"))),Object(s.createElement)("div",{className:"media-block"},Object(s.createElement)("div",{className:"media-block__media"},Object(s.createElement)("div",{className:"react-player-container"},Object(s.createElement)(o.a,{className:"react-player",height:"100%",light:I.a,playIcon:Object(s.createElement)("span",null),url:"https://www.youtube.com/embed/QEir4T7VweY",width:"100%"}))),Object(s.createElement)("div",{className:"media-block__details"},Object(s.createElement)("div",{className:"media-block__title"},Object(E.__)("Get your own website guide","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"media-block__description"},Object(E.__)("Our WordPress experts can jump in wherever you need help, teaching you how to build, grow, and maintain your website.","bluehost-wordpress-plugin")),Object(s.createElement)(a.a,{className:"media-block__button",href:"#/marketplace/services/blue-sky",isSecondary:!0,onClick:function(){window.scrollTo(0,0)}},Object(E.__)("Get Blue Sky","bluehost-wordpress-plugin")))))),Object(s.createElement)("div",{className:"section-featured-services"},Object(s.createElement)("div",{className:"section-title"},Object(E.__)("Let us do it for you","bluehost-wordpress-plugin")),Object(s.createElement)("p",{className:"section-description"},Object(E.__)("What can we help you achieve today?","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"featured-services"},Object(s.createElement)("div",{className:"featured-services-list"},Object(s.createElement)("div",{className:"featured-service"},Object(s.createElement)("div",{className:"featured-service__image"},Object(s.createElement)(r.k,null)),Object(s.createElement)("div",{className:"featured-service__title"},Object(E.__)("Full-Service Website","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"featured-service__description"},Object(E.__)("Ongoing marketing assistance and design","bluehost-wordpress-plugin")),Object(s.createElement)(a.a,{className:"featured-service__button","data-testid":"full-service",href:"https://www.bluehost.com/solutions/full-service#full-service",isSecondary:!0,utmContent:"help_full_service"},Object(E.__)("Learn more","bluehost-wordpress-plugin"))),Object(s.createElement)("div",{className:"featured-service"},Object(s.createElement)("div",{className:"featured-service__image"},Object(s.createElement)(r.D,null)),Object(s.createElement)("div",{className:"featured-service__title"},Object(E.__)("SEO Services","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"featured-service__description"},Object(E.__)("Fine tune your website for better visibility","bluehost-wordpress-plugin")),Object(s.createElement)(a.a,{className:"featured-service__button","data-testid":"seo-services",href:"https://www.bluehost.com/solutions/full-service#seo-services",isSecondary:!0,utmContent:"help_seo_services"},Object(E.__)("Learn more","bluehost-wordpress-plugin"))),Object(s.createElement)("div",{className:"featured-service"},Object(s.createElement)("div",{className:"featured-service__image"},Object(s.createElement)(r.h,null)),Object(s.createElement)("div",{className:"featured-service__title"},Object(E.__)("Our experts can help","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"featured-service__description"},Object(E.__)("Consult with an expert to figure out the best next steps.","bluehost-wordpress-plugin")),Object(s.createElement)(a.a,{className:"featured-service__button",href:"https://www.bluehost.com/solutions/full-service#request-form",isSecondary:!0,utmContent:"help_request_consultation"},Object(E.__)("Request a consultation","bluehost-wordpress-plugin")))))),Object(s.createElement)("div",{className:"section-resources"},Object(s.createElement)("div",{className:"section-title"},Object(E.__)("DIY","bluehost-wordpress-plugin")),Object(s.createElement)("p",{className:"section-description"},Object(E.__)("Checkout our resource center for helpful how-to articles and guides.","bluehost-wordpress-plugin")),Object(s.createElement)("div",{className:"resources-search"},Object(s.createElement)(W,null),Object(s.createElement)("div",{className:"button-container"},Object(s.createElement)(a.a,{href:"https://www.bluehost.com/resources/",isSecondary:!0,utmContent:"help_visit_resource_center"},Object(E.__)("Visit resource center","bluehost-wordpress-plugin"))))),Object(s.createElement)("footer",{className:"help-footer"},Object(s.createElement)("a",{className:"call-to-action",href:"tel:8884014678"},Object(s.createElement)(r.g,{className:"footer-icon"}),Object(s.createElement)("span",null,Object(E.__)("888-401-4678","bluehost-wordpress-plugin"))),Object(s.createElement)("a",{className:"call-to-action",href:Object(R.a)("https://helpchat.bluehost.com/",{utm_content:"help_chat_link",utm_term:"Chat with us"})},Object(s.createElement)(r.i,{className:"footer-icon"}),Object(s.createElement)("span",null,Object(E.__)("Chat with us","bluehost-wordpress-plugin")))))}}}]);