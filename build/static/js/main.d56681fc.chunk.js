(this["webpackJsonplibrary-frontend"]=this["webpackJsonplibrary-frontend"]||[]).push([[0],{71:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r,c,o,i,a,s,l,u,j,b,d=n(52),h=n(3),O=n(57),v=n.n(O),g=(n(71),n(7)),x=n(89),f=n(104),p=n(18),m=n(101),k=Object(m.a)(r||(r=Object(p.a)(["\nfragment AuthorDetails on Author{\n    name\n    born\n    id\n    bookCount\n}\n"]))),S=Object(m.a)(c||(c=Object(p.a)(["\nfragment BookDetails on Book {\n    title\n    published\n    genres\n    author{\n        name\n        id\n        born\n        bookCount\n    }\n    id\n}\n"]))),C=Object(m.a)(o||(o=Object(p.a)(["\nquery {\n    allAuthors {\n       ...AuthorDetails\n       \n    }\n}\n","\n"])),k),w=Object(m.a)(i||(i=Object(p.a)(["\nquery findBooks($author: String, $genre: String){\n    allBooks(author: $author, genre: $genre) {\n        ...BookDetails\n    }\n}\n","\n"])),S),$=Object(m.a)(a||(a=Object(p.a)(["\nmutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!], $born: Int) {\n    addBook(\n        title: $title\n        author: $author\n        published: $published\n        born: $born\n        genres: $genres\n    ) {\n       ...BookDetails\n    }\n}\n","\n"])),S),y=Object(m.a)(s||(s=Object(p.a)(["\nmutation editAuthor($name: String!, $born: Int!) {\n    editAuthor(name: $name, born: $born) {\n        ...AuthorDetails\n    }\n}\n","\n"])),k),E=Object(m.a)(l||(l=Object(p.a)(["\nmutation login($username: String!, $password: String!){\n    login(username: $username, password: $password){\n        value\n    }\n}\n"]))),A=Object(m.a)(u||(u=Object(p.a)(["\nquery {\n    me{\n        id\n        username\n        favouriteGenre\n    }\n}\n"]))),B=Object(m.a)(j||(j=Object(p.a)(["\nsubscription {\nbookAdded {\n    ...BookDetails\n}\n}\n","\n"])),S),D=Object(m.a)(b||(b=Object(p.a)(["\nmutation createUser($username: String!, $password: String!, $favouriteGenre: String!){\n    createUser(username: $username, password: $password, favouriteGenre: $favouriteGenre){\n        username\n        password\n        favouriteGenre\n    }\n}\n"]))),I=n(2),q=function(e){var t,n,r=e.setError,c=e.show,o=e.updateCacheWith,i=Object(x.a)(C),a=Object(h.useState)(""),s=Object(g.a)(a,2),l=s[0],u=s[1],j=Object(h.useState)(""),b=Object(g.a)(j,2),d=b[0],O=b[1],v=Object(f.a)(y,{onError:function(e){console.log(e),r(e.message)},update:function(e,t){o(t.data.editAuthor)}}),p=Object(g.a)(v,1)[0];if(i.loading)return Object(I.jsx)("div",{children:"loading..."});if(!c)return null;console.log(i);var m=null===(t=i.data)||void 0===t?void 0:t.allAuthors.map((function(e){return{label:e.name,value:e.name}}));return console.log(m),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Authors"}),Object(I.jsx)("table",{children:Object(I.jsxs)("tbody",{children:[Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{}),Object(I.jsx)("th",{children:"born"}),Object(I.jsx)("th",{children:"books"})]}),null===(n=i.data)||void 0===n?void 0:n.allAuthors.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.name}),Object(I.jsx)("td",{children:e.born}),Object(I.jsx)("td",{children:e.bookCount})]},e.id)}))]})}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Set Birth Year"}),Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p({variables:{name:l,born:d}}),u(""),O("")},children:[Object(I.jsx)("div",{children:Object(I.jsx)("select",{value:l,onChange:function(e){var t=e.target;return u(t.value)},children:null===m||void 0===m?void 0:m.map((function(e){return Object(I.jsx)("option",{value:e.value,children:e.label},e.label)}))})}),Object(I.jsxs)("div",{children:["born",Object(I.jsx)("input",{value:d,onChange:function(e){var t=e.target;return O(parseInt(t.value,10))}})]}),Object(I.jsx)("button",{type:"submit",children:"update author"})]})]})]})},G=n(95),T=function(e){var t,n=e.setError,r=e.show,c=Object(h.useState)(""),o=Object(g.a)(c,2),i=o[0],a=o[1],s=Object(G.a)(w,{onError:function(e){console.log(e),n(e.message)}}),l=Object(g.a)(s,2),u=l[0],j=l[1];return console.log(j),j.loading?Object(I.jsx)("div",{children:"loading..."}):r?Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Books"}),"in genre ",Object(I.jsx)("strong",{children:i}),Object(I.jsx)("table",{children:Object(I.jsxs)("tbody",{children:[Object(I.jsxs)("tr",{style:{textAlign:"left"},children:[Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:"Author"}),Object(I.jsx)("th",{children:"Published"})]}),null===(t=j.data)||void 0===t?void 0:t.allBooks.map((function(e){var t;return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.title}),Object(I.jsx)("td",{children:null===(t=e.author)||void 0===t?void 0:t.name}),Object(I.jsx)("td",{children:e.published})]},e.id)}))]})}),Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(){a(""),u({})},children:"all"}),Object(I.jsx)("button",{onClick:function(){a(""),a("refactoring"),u({variables:{genre:i}})},children:"refactoring"}),Object(I.jsx)("button",{onClick:function(){a(""),a("design"),u({variables:{genre:i}})},children:"design"}),Object(I.jsx)("button",{onClick:function(){a(""),a("classic"),u({variables:{genre:i}})},children:"classic"}),Object(I.jsx)("button",{onClick:function(){a(""),a("crime"),u({variables:{genre:i}})},children:"crime"}),Object(I.jsx)("button",{onClick:function(){a(""),a("patterns"),u({variables:{genre:i}})},children:"patterns"}),Object(I.jsx)("button",{onClick:function(){a(""),a("baking"),u({variables:{genre:i}})},children:"baking"}),Object(I.jsx)("button",{onClick:function(){a(""),a("agile"),u({variables:{genre:i}})},children:"agile"}),Object(I.jsx)("button",{onClick:function(){a(""),a("revolution"),u({variables:{genre:i}})},children:"revolution"}),Object(I.jsx)("button",{onClick:function(){a(""),a("testing"),u({variables:{genre:i}})},children:"testing"})]})]}):null},Q=function(e){var t=e.show,n=e.setError,r=e.updateCacheWith,c=Object(h.useState)(""),o=Object(g.a)(c,2),i=o[0],a=o[1],s=Object(h.useState)(""),l=Object(g.a)(s,2),u=l[0],j=l[1],b=Object(h.useState)(""),d=Object(g.a)(b,2),O=d[0],v=d[1],x=Object(h.useState)(""),p=Object(g.a)(x,2),m=p[0],k=p[1],S=Object(h.useState)(""),C=Object(g.a)(S,2),w=C[0],y=C[1],E=Object(h.useState)([]),A=Object(g.a)(E,2),B=A[0],D=A[1],q=Object(f.a)($,{onError:function(e){console.log(e),n(e.message)},update:function(e,t){r(t.data.addBook)}}),G=Object(g.a)(q,1)[0];if(!t)return null;return console.log(O),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Add Book"}),Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("add book..."),G({variables:{title:i,author:u,published:O,genres:B,born:m}}),a(""),j(""),v(""),k(""),y(""),D([])},children:[Object(I.jsxs)("div",{children:["title",Object(I.jsx)("input",{value:i,onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(I.jsxs)("div",{children:["author",Object(I.jsx)("input",{value:u,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(I.jsxs)("div",{children:["published",Object(I.jsx)("input",{value:O,onChange:function(e){var t=e.target;return v(parseInt(t.value,10))}})]}),Object(I.jsxs)("div",{children:["Author birthdate",Object(I.jsx)("input",{value:m,onChange:function(e){var t=e.target;return k(parseInt(t.value,10))}})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{value:w,onChange:function(e){var t=e.target;return y(t.value)}}),Object(I.jsx)("button",{onClick:function(){D(B.concat(w)),y("")},type:"button",children:"add genre"})]}),Object(I.jsxs)("div",{children:["genres: ",B.join(" ")]}),Object(I.jsx)("button",{type:"submit",children:"create book"})]})]})},L=function(e){var t=e.errorMessage;return t?Object(I.jsx)("div",{style:{color:"red"},children:t}):null},W=n(29),J=n.n(W),M=n(43),P=function(e){var t=e.setError,n=e.setToken,r=e.show,c=Object(h.useState)(""),o=Object(g.a)(c,2),i=o[0],a=o[1],s=Object(h.useState)(""),l=Object(g.a)(s,2),u=l[0],j=l[1],b=Object(f.a)(E,{onError:function(e){t(e.graphQLErrors[0].message)}}),d=Object(g.a)(b,2),O=d[0],v=d[1];if(Object(h.useEffect)((function(){if(v.data){var e=v.data.login.value;n(e),localStorage.setItem("bookuser-token",e)}}),[v.data]),v.loading)return Object(I.jsx)("div",{children:"loading..."});if(!r)return null;var x=function(){var e=Object(M.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O({variables:{username:i,password:u}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Login"}),Object(I.jsxs)("form",{onSubmit:x,children:[Object(I.jsxs)("div",{children:["username",Object(I.jsx)("input",{value:i,onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(I.jsxs)("div",{children:["password",Object(I.jsx)("input",{value:u,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(I.jsx)("button",{type:"submit",children:"login"})]})]})},R=n(96),U=n(105),z=function(e){var t,n,r,c=e.setError,o=e.show,i=Object(x.a)(A);console.log(i.data);var a=null===(t=i.data)||void 0===t||null===(n=t.me)||void 0===n?void 0:n.favouriteGenre,s=Object(x.a)(w,{variables:{genre:a},onError:function(e){console.log(e),c(e.message)}});return s.loading?Object(I.jsx)("div",{children:"loading..."}):o?Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Recommendations"}),"books in your favourite genre ",Object(I.jsx)("strong",{children:a}),Object(I.jsx)("table",{children:Object(I.jsxs)("tbody",{children:[Object(I.jsxs)("tr",{style:{textAlign:"left"},children:[Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:"Author"}),Object(I.jsx)("th",{children:"Published"})]}),null===(r=s.data)||void 0===r?void 0:r.allBooks.map((function(e){var t;return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.title}),Object(I.jsx)("td",{children:null===(t=e.author)||void 0===t?void 0:t.name}),Object(I.jsx)("td",{children:e.published})]},e.id)}))]})})]}):null},Y=function(e){var t=e.setError,n=e.show,r=Object(h.useState)(""),c=Object(g.a)(r,2),o=c[0],i=c[1],a=Object(h.useState)(""),s=Object(g.a)(a,2),l=s[0],u=s[1],j=Object(h.useState)(""),b=Object(g.a)(j,2),d=b[0],O=b[1],v=Object(f.a)(D,{onError:function(e){t(e.graphQLErrors[0].message)}}),x=Object(g.a)(v,2),p=x[0];if(x[1].loading)return Object(I.jsx)("div",{children:"loading..."});if(!n)return null;var m=function(){var e=Object(M.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p({variables:{username:o,password:l,favouriteGenre:d}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Register"}),Object(I.jsxs)("form",{onSubmit:m,children:[Object(I.jsxs)("div",{children:["username",Object(I.jsx)("input",{value:o,onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(I.jsxs)("div",{children:["password",Object(I.jsx)("input",{value:l,onChange:function(e){var t=e.target;return u(t.value)}})]}),Object(I.jsxs)("div",{children:["favourite genre",Object(I.jsx)("input",{value:d,onChange:function(e){var t=e.target;return O(t.value)}})]}),Object(I.jsx)("button",{type:"submit",children:"register"})]})]})},F=function(){var e=Object(h.useState)("authors"),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(h.useState)(null),o=Object(g.a)(c,2),i=o[0],a=o[1],s=Object(h.useState)(null),l=Object(g.a)(s,2),u=l[0],j=l[1],b=Object(R.a)(),d=function(e){a(e),setTimeout((function(){a(null)}),1e4)},O=function(e){var t,n,r=b.readQuery({query:w});t=r.allBooks,n=e,t.map((function(e){return e.id})).includes(n.id)||b.writeQuery({query:w,data:{allBooks:r.allBooks.concat(e)}})};Object(U.a)(B,{onSubscriptionData:function(e){var t=e.subscriptionData.data.bookAdded;d("".concat(t.title," added")),O(t)}});return Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(){return r("authors")},children:"authors"}),Object(I.jsx)("button",{onClick:function(){return r("books")},children:"books"}),Object(I.jsx)("button",{onClick:function(){return r("register")},children:"register"}),null===u?Object(I.jsx)("button",{onClick:function(){return r("login")},children:"login"}):Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{onClick:function(){return r("add")},children:"add book"}),Object(I.jsx)("button",{onClick:function(){return r("recommend")},children:"recommend"}),Object(I.jsx)("button",{onClick:function(){j(null),localStorage.clear(),b.resetStore()},children:"logout"})]})]}),Object(I.jsx)("div",{children:Object(I.jsx)(L,{errorMessage:i})}),Object(I.jsx)(q,{show:"authors"===n,setError:d}),Object(I.jsx)(T,{show:"books"===n,setError:d}),Object(I.jsx)(Q,{show:"add"===n,setError:d,updateCacheWith:O}),Object(I.jsx)(P,{show:"login"===n,setToken:j,setError:d}),Object(I.jsx)(Y,{show:"register"===n,setError:d}),Object(I.jsx)(z,{show:"recommend"===n,setError:d})]})},H=n(100),K=n(97),N=n(99),V=n(102),X=n(98),Z=n(63),_=n(25),ee=n(61),te=Object(Z.a)((function(e,t){var n=t.headers,r=localStorage.getItem("bookuser-token");return{headers:Object(d.a)(Object(d.a)({},n),{},{authorization:r?"bearer ".concat(r):null})}})),ne=new H.a({uri:"/graphql",credentials:"include"}),re=new ee.a({uri:"ws://library-list-app.herokuapp.com/graphql",options:{reconnect:!0}}),ce=Object(K.a)((function(e){var t=e.query,n=Object(_.e)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),re,te.concat(ne)),oe=new N.a({cache:new V.a,link:ce});v.a.render(Object(I.jsx)(X.a,{client:oe,children:Object(I.jsx)(F,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.d56681fc.chunk.js.map