(this["webpackJsonpreact-assign2"]=this["webpackJsonpreact-assign2"]||[]).push([[0],{139:function(e,t,s){},140:function(e,t,s){},440:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(12),r=s.n(n),i=(s(139),s(140),s(129)),o=s(130),l=s(135),d=s(134),j=s(45),h=s(83),g=s(55),u=(s(144),s(3)),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).changeCategorySelected=function(e){"all"===e?c.setState({postsSelected:c.state.blog,categorySelected:"all"}):(c.setState({categorySelected:e}),fetch("https://api.edyoda.com/v1/blog/".concat(e,"/")).then((function(e){return e.json()})).then((function(e){return c.setState({postsSelected:e.posts})})),console.log("here"))},c.state={loader:!0,postCategories:[],blog:[],categorySelected:"all",postsSelected:[]},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.edyoda.com/v1/blog/postcategories/").then((function(e){return e.json()})).then((function(t){return e.setState({postCategories:t})})),fetch("https://api.edyoda.com/v1/blog/").then((function(e){return e.json()})).then((function(t){return e.setState({blog:t,postsSelected:t})}))}},{key:"render",value:function(){var e=this,t=function(e){switch(e){case"01":return"Jan";case"02":return"Feb";case"03":return"Mar";case"04":return"Apr";case"05":return"May";case"06":return"Jun";case"07":return"Jul";case"08":return"Aug";case"09":return"Sep";case"10":return"Oct";case"11":return"Nov";case"12":return"Dec";default:return"Default Case"}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("div",{className:"edyoda-logo",children:"Edyoda"}),Object(u.jsx)("p",{className:"stories-logo",children:"Stories"})]}),Object(u.jsxs)("div",{className:"nav-links",children:[Object(u.jsx)("ul",{className:"categories-wrapper",children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(j.a.Toggle,{className:"dropdown-toggle",id:"dropdown-basic",children:["Explore Categories"," ",Object(u.jsx)("span",{children:Object(u.jsx)(h.a,{icon:g.a})})]}),Object(u.jsx)(j.a.Menu,{className:"dropdown-menu",children:this.state.postCategories&&this.state.postCategories.map((function(t){var s=t.title,c=t.slug;return Object(u.jsx)(j.a.Item,{className:"dropdown-item",href:"#/".concat(c),onClick:function(t){e.changeCategorySelected(c)},children:s})}))})]})}),Object(u.jsxs)("ul",{className:"right-menus",children:[Object(u.jsx)("div",{className:"edyoda-text",children:Object(u.jsxs)("p",{children:["EdYoda is free learning and knowledge ",Object(u.jsx)("br",{})," sharing platform for techies"]})}),Object(u.jsx)("div",{className:"edyoda-signup",children:Object(u.jsx)("button",{children:"Go To Main Website"})})]})]})]}),Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"latest-posts-container",children:[Object(u.jsx)("h3",{className:"latest-posts-heading",children:"Latest Posts"}),Object(u.jsxs)("div",{className:"category-filter-section",children:[Object(u.jsxs)("div",{className:"category-filter-heading",children:[Object(u.jsx)("div",{className:"category-filter-icon",children:Object(u.jsx)(h.a,{icon:g.b})}),Object(u.jsx)("p",{className:"category-filter-text",children:"Filter by Category"})]}),Object(u.jsxs)("div",{className:"category-list",children:[Object(u.jsx)("div",{className:"all"===this.state.categorySelected?"category-item category-item-selected":"category-item",id:"all",onClick:function(t){return e.changeCategorySelected("all")},children:"All"}),this.state.postCategories&&this.state.postCategories.map((function(t){var s=t.title,c=t.slug;return Object(u.jsx)("div",{className:c===e.state.categorySelected?"category-item category-item-selected":"category-item",id:c,onClick:function(t){return e.changeCategorySelected(c)},children:s})}))]})]}),Object(u.jsx)("div",{className:"blog-card-section",children:this.state.postsSelected&&this.state.postsSelected.length&&this.state.postsSelected.map((function(e){var s=e.title,c=e.description,a=e.posted_on,n=e.small_image,r=e.authorname;return Object(u.jsxs)("div",{className:"blog-card-container",children:[Object(u.jsx)("div",{className:"blog-image-container",children:Object(u.jsx)("img",{src:n,alt:s})}),Object(u.jsxs)("div",{className:"blog-details-container",children:[Object(u.jsx)("h3",{children:s}),Object(u.jsxs)("p",{children:[r," ",Object(u.jsxs)("span",{className:"blog-details-date",children:["| ",a.slice(8,10)," ",t(a.slice(5,7))," ",a.slice(0,4)]})]}),Object(u.jsx)("div",{children:c})]})]})}))})]})})]})}}]),s}(c.Component);var m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,444)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}},[[440,1,2]]]);
//# sourceMappingURL=main.21d12770.chunk.js.map