import{j as e}from"./index-CA5cd26t.js";import{S as r}from"./icons-fqOM1xN0.js";import"./vendor-CsPzPLhF.js";import"./i18n-C7ZVfFkj.js";const a=[{id:"1",name:"Anna M.",rating:5,comment:"Sehr professioneller Service! Die Maniküre hält schon seit Wochen.",date:"2024-02-15",service:"Maniküre"},{id:"2",name:"Sophie K.",rating:5,comment:"Wunderschöne Arbeit bei meinen Augenbrauen. Ich bin begeistert!",date:"2024-02-10",service:"Augenbrauen"}];function m(){return e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600",children:"Bewertungen"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map(s=>e.jsxs("div",{className:"bg-dark-800/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20 hover:border-gold-500 transition-all hover:shadow-gold",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-white",children:s.name}),e.jsx("div",{className:"flex",children:[...Array(s.rating)].map((n,t)=>e.jsx(r,{className:"w-6 h-6 fill-gold-400 text-gold-400"},t))})]}),e.jsx("p",{className:"text-dark-200 mb-4 text-lg",children:s.comment}),e.jsxs("div",{className:"text-sm text-gold-400 font-medium",children:[e.jsx("span",{children:s.service}),e.jsx("span",{className:"mx-2",children:"•"}),e.jsx("span",{children:new Date(s.date).toLocaleDateString()})]})]},s.id))})]})}export{m as default};
