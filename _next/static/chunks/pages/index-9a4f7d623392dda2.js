(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(48591)}])},52529:function(e,a,t){"use strict";var r=t(85893),s=t(41664),n=t.n(s),l=t(67294),i=t(63750);a.Z=e=>{let{section:a,currentPage:t,totalPages:s}=e,c=2===t,o=t>1,d=s>t,m=[];for(let e=1;e<=s;e++)m.push(e);return(0,r.jsx)(r.Fragment,{children:s>1&&(0,r.jsxs)("nav",{className:"item-center mb-4 flex justify-center space-x-1 lg:space-x-2","aria-label":"Pagination",children:[o?(0,r.jsx)(n(),{href:c?"".concat(a?"/"+a:"/"):"".concat(a?"/"+a:"","/page/").concat(t-1),className:"flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none text-dark dark:text-darkmode-light",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.i1r,{}),(0,r.jsx)("span",{className:"ml-3 text-lg ",children:"Previous"})]})}):(0,r.jsx)("span",{className:"flex items-center rounded-full px-2 py-1 text-3xl font-bold text-dark dark:text-darkmode-light ",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.i1r,{}),(0,r.jsx)("span",{className:"ml-3 text-lg",children:"Previous"})]})}),m.map((e,s)=>(0,r.jsx)(l.Fragment,{children:e===t?(0,r.jsx)("span",{"aria-current":"page",className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-primary px-4 py-1 font-secondary text-lg font-bold leading-none text-dark text-white dark:text-darkmode-light",children:e}):(0,r.jsx)(n(),{href:0===s?"".concat(a?"/"+a:"/"):"".concat(a?"/"+a:"","/page/").concat(e),passHref:!0,"aria-current":"page",className:"inline-flex h-[38px] w-[38px] items-center justify-center rounded-full px-4 py-1 font-secondary text-lg font-bold leading-none text-dark dark:text-darkmode-light",children:e})},"page-".concat(s))),d?(0,r.jsx)(n(),{href:"".concat(a?"/"+a:"","/page/").concat(t+1),className:"ml-4 flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none text-dark dark:text-darkmode-light",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-3 text-lg",children:"Next"}),(0,r.jsx)(i.UE1,{})]})}):(0,r.jsx)("span",{className:"ml-4 flex items-center rounded-full px-2 py-1 text-3xl font-bold text-dark dark:text-darkmode-light",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-3 text-lg",children:"Next"}),(0,r.jsx)(i.UE1,{})]})})]})})}},57343:function(e,a,t){"use strict";var r=t(85893),s=t(56626),n=t(26869),l=t(93156),i=t(41664),c=t.n(i),o=t(89583);a.Z=e=>{let{post:a}=e,{summary_length:t,blog_folder:i}=s.settings,{meta_author:d}=s.metadata,m=a.frontmatter.author?a.frontmatter.author:d;return(0,r.jsxs)("div",{className:"post",children:[(0,r.jsxs)("div",{className:"relative",children:[a.frontmatter.image&&(0,r.jsx)(n.Z,{className:"rounded",src:a.frontmatter.image,alt:a.frontmatter.title,width:405,height:208}),(0,r.jsx)("ul",{className:"absolute top-3 left-2 flex flex-wrap items-center",children:a.frontmatter.categories.map((e,a)=>(0,r.jsx)("li",{className:"mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white",children:(0,r.jsx)(c(),{className:"capitalize",href:"/categories/".concat(e.replace(" ","-")),children:e})},"tag-"+a))})]}),(0,r.jsx)("h3",{className:"h5 mb-2 mt-4",children:(0,r.jsx)(c(),{href:"/".concat(i,"/").concat(a.slug),className:"block hover:text-primary",children:a.frontmatter.title})}),(0,r.jsxs)("ul",{className:"flex items-center space-x-4",children:[(0,r.jsx)("li",{children:(0,r.jsxs)(c(),{className:"inline-flex items-center font-secondary text-xs leading-3",href:"/about",children:[(0,r.jsx)(o.q1E,{className:"mr-1.5"}),m]})}),(0,r.jsxs)("li",{className:"inline-flex items-center font-secondary text-xs leading-3",children:[(0,r.jsx)(o.tpH,{className:"mr-1.5"}),(0,l.Z)(a.frontmatter.date)]})]}),(0,r.jsx)("p",{children:a.content.slice(0,Number(t))}),(0,r.jsx)(c(),{className:"btn btn-outline-primary mt-4",href:"/".concat(i,"/").concat(a.slug),children:"Read More"})]})}},77480:function(e,a,t){"use strict";t.d(a,{Z:function(){return partials_Sidebar}});var r=t(85893),s=t(56626),n=t(51639),l=t(26869),i=t(98291),c=t(67294),o=t(89583),NewsLetterForm=function(e){let{status:a,message:t,onValidated:s}=e,[n,l]=(0,c.useState)(""),resetForm=()=>{l("")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{action:"#",className:"py-6",onSubmit:e=>{e.preventDefault(),n&&n.indexOf("@")>-1&&s({EMAIL:n}),resetForm()},children:[(0,r.jsxs)("fieldset",{className:"relative",children:[(0,r.jsx)("input",{className:"newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark",type:"text",placeholder:"Type And Hit Enter",onChange:e=>l(e.target.value)}),(0,r.jsx)(o.SRX,{className:"absolute top-1/2 right-5 -translate-y-1/2 text-xl transition duration-75"})]}),(0,r.jsx)("button",{className:"d-block  btn btn-primary mt-4 w-full",type:"submit",children:"Sign In"})]}),"sending"===a&&(0,r.jsx)("div",{className:"mt-4 text-primary",children:"sending..."}),"error"===a&&(0,r.jsx)("div",{className:"mt-4 text-red-700",dangerouslySetInnerHTML:{__html:t}}),"success"===a&&(0,r.jsx)("div",{className:"mt-4 text-green-700",children:"Subscribed !"})]})},d=t(75764),m=t(93156),x=t(16329),h=t(67739),p=t(41664),u=t.n(p),b=t(14711);let{blog_folder:j}=s.settings,{about:f,featured_posts:g,newsletter:N}=s.widgets;var partials_Sidebar=e=>{let{posts:a,categories:t,className:s}=e,p=(0,x.d)(a),v=p.filter(e=>e.frontmatter.featured),[k,y]=(0,c.useState)(!0);return(0,r.jsxs)("aside",{className:"".concat(s," px-0 lg:px-6 lg:col-4"),children:[f.enable&&(0,r.jsxs)("div",{className:"relative rounded border border-border p-6 text-center dark:border-darkmode-border",children:[(0,r.jsx)(l.Z,{className:"-z-[1]",src:"/images/map.svg",fill:!0,alt:"bg-map"}),(0,r.jsx)(i.Z,{}),(0,h.gI)(f.content,"p","mt-8"),(0,r.jsx)(d.Z,{className:"socials sidebar-socials mt-6 justify-center",source:n})]}),t.enable&&(0,r.jsxs)("div",{className:"mt-6 rounded border border-border p-6 dark:border-darkmode-border",children:[(0,r.jsx)("h4",{className:"section-title mb-12 text-center",children:g.title}),(0,r.jsx)("ul",{children:t.map((e,a)=>(0,r.jsxs)("li",{className:"relative mb-2 flex items-center justify-between pl-6 text-[16px] font-bold capitalize text-dark dark:text-darkmode-light ".concat(a!==t.length-1&&"border-b border-border  dark:border-darkmode-border"),children:[(0,r.jsxs)("svg",{className:"absolute left-0 top-2.5",width:"20px",height:"20px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M11.7318 9.35984C12.0854 8.93556 12.7159 8.87824 13.1402 9.2318C13.5645 9.58537 13.6218 10.2159 13.2682 10.6402L8.26825 16.6402C7.91468 17.0645 7.28412 17.1218 6.85984 16.7682C6.43556 16.4147 6.37824 15.7841 6.7318 15.3598L11.7318 9.35984Z",fill:"#2ba283"}),(0,r.jsx)("path",{d:"M6.7318 4.64021C6.37824 4.21593 6.43556 3.58537 6.85984 3.2318C7.28412 2.87824 7.91468 2.93556 8.26825 3.35984L13.2682 9.35984C13.6218 9.78412 13.5645 10.4147 13.1402 10.7682C12.7159 11.1218 12.0854 11.0645 11.7318 10.6402L6.7318 4.64021Z",fill:"#2ba283"})]}),(0,r.jsxs)(u(),{className:"py-2",href:"/categories/".concat(e.name),children:[e.name.replace("-"," "),(0,r.jsx)("span",{className:"absolute top-1/2 right-0 -translate-y-1/2 text-[10px] text-gray-500",children:e.posts})]})]},a))})]}),g.enable&&(0,r.jsxs)("div",{className:"mt-6 rounded border border-border p-6 dark:border-darkmode-border",children:[(0,r.jsx)("h4",{className:"section-title mb-12 text-center",children:"Featured"}),(0,r.jsxs)("div",{className:"mb-12 flex items-center justify-center",children:[(0,r.jsx)("button",{className:"btn px-5 py-2 ".concat(k?"btn-outline-primary":"btn-primary"),onClick:()=>y(!1),children:"Featured"}),(0,r.jsx)("button",{className:"btn ml-3  px-5 py-2 ".concat(k?"btn-primary":"btn-outline-primary"),onClick:()=>y(!0),children:"Recent"})]}),k?p.slice(0,g.showPost).map((e,a,t)=>(0,r.jsxs)("div",{className:"flex items-center ".concat(a!==t.length-1&&"mb-6 border-b border-border pb-6 dark:border-darkmode-border"),children:[e.frontmatter.image&&(0,r.jsx)(l.Z,{className:"mr-3 h-[85px] w-[85px] rounded-full object-cover",src:e.frontmatter.image,alt:e.frontmatter.title,width:105,height:85}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"h5 mb-2",children:(0,r.jsx)(u(),{href:"/".concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,r.jsxs)("p",{className:"inline-flex items-center font-secondary text-xs",children:[(0,r.jsx)(o.tpH,{className:"mr-1.5"}),(0,m.Z)(e.frontmatter.date)]})]})]},"key-".concat(a))):v.slice(0,g.showPost).map((e,a,t)=>(0,r.jsxs)("div",{className:"flex items-center pb-6 ".concat(a!==t.length-1&&"mb-6 border-b dark:border-b-darkmode-border"),children:[e.frontmatter.image&&(0,r.jsx)(l.Z,{className:"mr-3 h-[85px] w-[85px] rounded-full object-cover",src:e.frontmatter.image,alt:e.frontmatter.title,width:105,height:85}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"h5 mb-2",children:(0,r.jsx)(u(),{href:"/".concat(j,"/").concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,r.jsxs)("p",{className:"inline-flex items-center font-secondary text-xs",children:[(0,r.jsx)(o.tpH,{className:"mr-1.5"}),(0,m.Z)(e.frontmatter.date)]})]})]},"key-".concat(a)))]}),N.enable&&(0,r.jsxs)("div",{className:"mt-6  rounded border border-border p-6 text-center dark:border-darkmode-border",children:[(0,r.jsx)("h4",{className:"section-title",children:N.title}),(0,r.jsx)("p",{className:"mt-10 text-xs",children:N.content}),(0,r.jsx)(b.Z,{url:N.malichip_url,render:e=>{let{subscribe:a,status:t,message:s}=e;return(0,r.jsx)(NewsLetterForm,{onValidated:e=>a(e),status:t,message:s})}}),(0,r.jsxs)("p",{className:"text-xs",children:["By Singing Up, You Agree To",(0,r.jsx)(u(),{href:N.privacy_policy_page,className:"ml-1 text-primary",children:"Privacy Policy"})]})]})]})}},93156:function(e,a,t){"use strict";var r=t(70722);a.Z=e=>(0,r.formatInTimeZone)(e,"America/New_York","dd MMM yyyy")},16329:function(e,a,t){"use strict";t.d(a,{d:function(){return sortByDate}});let sortByDate=e=>{let a=e.sort((e,a)=>new Date(a.frontmatter.date&&a.frontmatter.date)-new Date(e.frontmatter.date&&e.frontmatter.date));return a}},48591:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return b}});var r=t(85893),s=t(56626),n=t(73926),l=t(26869);t(52529);var i=t(57343);t(77480);var c=t(93156),o=t(16329),d=t(67739),m=t(41664),x=t.n(m),h=t(89583);let{blog_folder:p,pagination:u}=s.settings;var b=!0;a.default=e=>{let{banner:a,posts:t,featured_posts:s,recent_posts:m,categories:b,promotion:j}=e,f=(0,o.d)(t),g=f.filter(e=>e.frontmatter.featured);return(0,r.jsxs)(n.Z,{children:[(0,r.jsxs)("section",{className:"section banner relative pb-0",children:[(0,r.jsx)(l.Z,{className:"absolute bottom-0 left-0 z-[-1] w-full",src:"/images/banner_bg_cropped.png",width:1905,height:295,alt:"banner-shape",priority:!0}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row flex-wrap-reverse items-center justify-center lg:flex-row",children:[(0,r.jsxs)("div",{className:a.image_enable?"mt-12 text-center lg:mt-0 lg:text-left lg:col-6":"mt-12 text-center lg:mt-0 lg:text-left lg:col-12",children:[(0,r.jsxs)("div",{className:"banner-title",children:[(0,d.gI)(a.title,"h1"),(0,d.gI)(a.title_small,"span")]}),(0,d.gI)(a.content,"p","mt-4"),a.button.enable&&(0,r.jsx)(x(),{className:"btn btn-primary mt-6",href:a.button.link,rel:a.button.rel,children:a.button.label})]}),a.image_enable&&(0,r.jsx)("div",{className:"col-9 lg:col-6",children:(0,r.jsx)(l.Z,{className:"mx-auto object-contain",src:a.image,width:548,height:443,priority:!0,alt:"Banner Image"})})]})})]}),(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsx)("h2",{children:"Bem vindos!"}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:"Sejam muito bem-vindos a segunda edi\xe7\xe3o da Exposi\xe7\xe3o Cient\xedfica, Tecnol\xf3gica e Cultural (EXPOTEC) do IFRN, campus Cear\xe1-Mirim. O evento tem como objetivo agregar toda a comunidade do IFRN, campus Cear\xe1-Mirim, e demais interessados em prol do compartilhamento da cultura e produ\xe7\xe3o tecnol\xf3gica e cient\xedfica que se realiza na \xe1rea de abrang\xeancia do referido campus. Dessa forma, al\xe9m de se propor a ser um espa\xe7o de constru\xe7\xe3o e compartilhamento de conhecimento, o evento tamb\xe9m incentiva o eixo art\xedstico-cultural da regi\xe3o."}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:'Tendo como tema "Como as contribui\xe7\xf5es da Ci\xeancia podem colaborar com a constru\xe7\xe3o de uma sociedade mais justa, inclusiva, sustent\xe1vel e igualit\xe1ria", a II EXPOTEC convida toda a comunidade a refletir acerca das diferentes formas como a Ci\xeancia pode contribuir para que tenhamos uma sociedade em que a Justi\xe7a seja cada vez mais fortalecida e valorizada; em que todos os sujeitos tenham condi\xe7\xf5es de exercer sua cidadania e gozar plenamente de seus direitos (independente de renda, ra\xe7a, etnia, origem, g\xeanero, orienta\xe7\xe3o sexual, condi\xe7\xe3o neurol\xf3gica ou f\xedsica); e que possamos viver em harmonia com o meio ambiente visando a preserva\xe7\xe3o da vida na terra e promovendo uma rela\xe7\xe3o saud\xe1vel entre humanidade e natureza.'}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:"Pensando sobre tais quest\xf5es que desafiam a contemporaneidade, a II EXPOTEC se abre para receber trabalhos que discutam, criem entendimento ou apresentem proposi\xe7\xf5es dentro do tema do evento, sob as seguintes modalidades: comunica\xe7\xe3o oral, exposi\xe7\xe3o de banners, relato de experi\xeancia e mostra tecnol\xf3gica. Ademais, propostas de oficinas e minicursos s\xe3o muito bem-vindas, ao corroborarem com as discuss\xf5es sob uma perspectiva mais pr\xe1tica."}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:"Por fim, reiteramos o convite a todos os interessados e desejamos que a II EXPOTEC contribua com o avan\xe7o e melhoria da nossa sociedade."})]})})})}),(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsx)("h2",{children:"Chamda de trabalhos extendida!"}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsx)("p",{children:"A chamada de trabalhos foi extendida at\xe9 o dia 17 de set. de 2023 23:59h. Aproveite essa oportunidade para submeter seu trabalho!"}),(0,r.jsx)("p",{children:(0,r.jsx)("br",{})}),(0,r.jsxs)("p",{children:["Clique ",(0,r.jsxs)(x(),{href:"/chamada-de-trabalhos",children:[" ",(0,r.jsx)("b",{children:"aqui"})," "]})," para submeter seu trabalho."]})]})})})}),(0,r.jsx)("section",{className:"section",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row items-start",children:(0,r.jsxs)("div",{className:"mb-12 lg:mb-0 lg:col-8",children:[s.enable&&(0,r.jsxs)("div",{className:"section",children:[(0,d.gI)(s.title,"h2","section-title"),(0,r.jsx)("div",{className:"rounded border border-border p-6 dark:border-darkmode-border",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"md:col-6",children:(0,r.jsx)(i.Z,{post:g[0]})}),(0,r.jsx)("div",{className:"scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0 md:col-6",children:g.slice(1,g.length).map((e,a,t)=>(0,r.jsxs)("div",{className:"mb-6 flex items-center pb-6 ".concat(a!==t.length-1&&"border-b border-border dark:border-darkmode-border"),children:[e.frontmatter.image&&(0,r.jsx)(l.Z,{className:"mr-3 h-[85px] rounded object-cover",src:e.frontmatter.image,alt:e.frontmatter.title,width:105,height:85}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"h5 mb-2",children:(0,r.jsx)(x(),{href:"/".concat(p,"/").concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,r.jsxs)("p",{className:"inline-flex items-center font-bold",children:[(0,r.jsx)(h.tpH,{className:"mr-1.5"}),(0,c.Z)(e.frontmatter.date)]})]})]},"key-".concat(a)))})]})})]}),j.enable&&(0,r.jsx)(x(),{href:j.link,className:"section block pt-0",children:(0,r.jsx)(l.Z,{className:"h-full w-full",height:"115",width:"800",src:j.image,alt:"promotion"})}),m.enable&&(0,r.jsxs)("div",{className:"section pt-0",children:[(0,d.gI)(m.title,"h2","section-title"),(0,r.jsx)("div",{className:"rounded border border-border px-6 pt-6 dark:border-darkmode-border",children:(0,r.jsx)("div",{className:"row",children:f.slice(0,u).map(e=>(0,r.jsx)("div",{className:"mb-8 md:col-6",children:(0,r.jsx)(i.Z,{post:e})},e.slug))})})]})]})})})})]})}}},function(e){e.O(0,[260,445,13,695,722,711,926,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);