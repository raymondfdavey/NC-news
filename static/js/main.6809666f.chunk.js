(this["webpackJsonpnc-news"]=this["webpackJsonpnc-news"]||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(28),a(1)),l=a(2),i=a(4),u=a(3),m=a(5),h=a(7);var p=function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"NC-NEWS"),r.a.createElement("p",null,"user"," ",r.a.createElement(h.a,{to:"/NC-news/author/".concat(e.username)}," ",e.username," "),"logged in"))},d=a(6),v=a.n(d);var f=function(e){return r.a.createElement("div",{className:"sortBySelectorArea"},r.a.createElement("div",{className:"sortBySelector"},r.a.createElement("select",{id:"sortTerms",name:"sortTerms",onChange:function(t){return e.sortArticles(t.target.value)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Sort Articles"),r.a.createElement("option",{defaultValue:!0,value:"comment_count"},"Number of Comments"),r.a.createElement("option",{value:"created_at"},"Date Created"),r.a.createElement("option",{value:"votes"},"Number of Votes"))))},E="https://news-of-the-north-server.herokuapp.com/api/",b=function(e,t,a){var n={username:a,body:t};return v.a.post("".concat(E,"articles/").concat(e,"/comments"),n).catch((function(e){return console.dir(e)}))},g=function(e){return console.log(e,"HEHRHEHRHEHE"),v.a.delete("".concat(E,"comments/").concat(e)).catch((function(e){return console.dir(e)}))};var y=function(e){return r.a.createElement("div",null,"ERROR PAGE",console.log(e.err,"HEHREHEHRHH IN ERROR PAGE"))},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voted:!1,err:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement("div",{className:"voteButtons"},r.a.createElement("button",{className:"button",value:"1",disabled:this.state.voted,onClick:function(t){e.handleVote(t)}},"UpVote"),r.a.createElement("button",{className:"button",value:"-1",disabled:this.state.voted,onClick:function(t){e.handleVote(t)}},"DownVote"),this.state.voted?"  You have voted!":null)}},{key:"handleVote",value:function(e){var t=this;this.props.article_id&&(function(e,t){var a={inc_votes:+t};return console.log(a),v.a.patch("".concat(E,"articles/").concat(e),a).then((function(e){return e.data.article})).catch((function(e){return console.dir(e)}))}(this.props.article_id,e.target.value).catch((function(e){return t.setState({err:e})})),this.props.changeVotes(e.target.value),this.setState({voted:!0})),this.props.comment_id&&(function(e,t){var a={inc_votes:+t};return console.log(a),v.a.patch("".concat(E,"comments/").concat(e),a).then((function(e){return e.data.article})).catch((function(e){return console.dir(e)}))}(this.props.comment_id,e.target.value).catch((function(e){return t.setState({err:e})})),this.props.changeCommentVotes(e.target.value),this.setState({voted:!0}))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={votes:a.props.article.votes},a.changeVotes=function(e){var t=a.state.votes+ +e;a.setState({votes:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.article,t=e.title,a=e.body,n=e.author,c=e.votes,o=e.topic,s=e.comment_count,l=e.article_id,i=e.created_at;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"articleTile",key:l},r.a.createElement("li",{className:"articleTileTitle"},r.a.createElement(h.a,{to:"/NC-news/articles/".concat(l)},t)),r.a.createElement("div",{className:"articleDetails"},window.location.href.length>55?r.a.createElement("li",null,a):r.a.createElement("li",null,"".concat(a.split(".")[0].toString(),"...")),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/NC-news/author/".concat(n)},"by: ",n)),r.a.createElement("li",null,new Date(i).toDateString()),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/NC-news/topics/".concat(o,"/articles")},"topic: ",o)),r.a.createElement("li",null," ",r.a.createElement(h.a,{to:"/NC-news/articles/".concat(l)},"comments: ",s)),r.a.createElement("li",null,"votes: ",this.state.votes)),r.a.createElement(j,{changeVotes:this.changeVotes,votes:c,article_id:l,updatingVotes:this.state.votes})))}}]),t}(n.Component);var O=function(e){return r.a.createElement("div",{className:"orderSelectorArea"},r.a.createElement("div",{className:"orderSelector"},r.a.createElement("select",{id:"order",name:"order",onChange:function(t){return e.orderArticles(t.target.value)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Ascending or Descending"),r.a.createElement("option",{defaultValue:!0,value:"desc"},"Descending"),r.a.createElement("option",{value:"asc"},"Ascending"))))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],sortBy:"comment_count",isLoading:"true",order:"desc",err:null},a.chosenTopic=function(e){a.setState({topic:e})},a.fetchArticles=function(){return v.a.get("https://news-of-the-north-server.herokuapp.com/api/articles?sort_by="+a.state.sortBy+"&order="+a.state.order).catch((function(e){return a.setState({err:e})}))},a.orderArticles=function(e){a.setState({order:e})},a.sortArticles=function(e){a.setState({sortBy:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dopperHolder"},r.a.createElement(f,{sortArticles:this.sortArticles}),r.a.createElement(O,{orderArticles:this.orderArticles})),r.a.createElement("div",{className:"articleContainer"},this.state.articles.length?this.state.articles.map((function(e){return r.a.createElement(C,{key:e.article_id,article:e})})):r.a.createElement("h1",null,"Loading")))}},{key:"componentDidMount",value:function(){var e=this;this.fetchArticles().then((function(t){var a=t.data.articles;return e.setState({articles:a})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.sortBy!==this.state.sortBy&&this.fetchArticles().then((function(e){var t=e.data.articles;return a.setState({articles:t})})),t.order!==this.state.order&&this.fetchArticles().then((function(e){var t=e.data.articles;return a.setState({articles:t})}))}}]),t}(n.Component),N=a(22),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={votes:a.props.comment.votes,err:null},a.changeCommentVotes=function(e){var t=a.state.votes+ +e;a.setState({votes:t})},a.deleteComment=function(e){g(e).then(a.props.removeComment(e)).catch((function(e){return a.setState({err:e})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.state.err)return r.a.createElement(y,{err:this.state.err});var t=this.props.comment,a=t.comment_id,n=t.author,c=t.created_at,o=t.body;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"commentTile",key:a},r.a.createElement(h.a,{to:"/NC-news/author/".concat(n)},n),r.a.createElement("li",null,o),r.a.createElement("li",null,new Date(c).toDateString()),r.a.createElement("li",null,"Votes: ",this.state.votes),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(j,{changeCommentVotes:this.changeCommentVotes,comment_id:a}),this.props.username===n?r.a.createElement("button",{className:"deleteButton",onClick:function(){return e.deleteComment(a)}},"Delete Your Comment"):null)))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={textInput:"",username:"jessjelly",err:null},a.handleChange=function(e){a.setState({textInput:e.target.value})},a.postComment=function(e){e.preventDefault(),b(a.props.article_id,a.state.textInput,a.state.username).then((function(e){var t=e.data.comment;return a.props.updateComments(t)})).then(a.setState({textInput:""})).catch((function(e){return a.setState({err:e})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"postCommentForm",onSubmit:this.postComment},r.a.createElement("button",{className:"postCommentButton"},"Leave a comment"),r.a.createElement("textarea",{className:"commentInputBox",type:"text",placeholder:"enter your comment",value:this.state.textInput,onChange:this.handleChange})))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:{},comments:[],username:"jessjelly"},a.updateComments=function(e){a.setState({comments:[e].concat(Object(N.a)(a.state.comments))})},a.removeComment=function(e){a.setState((function(t){return{comments:t.comments.filter((function(t){return t.comment_id!==e}))}}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,console.log(this.props.uri,"IN HEREREE"),this.state.comments.length&&Object.keys(this.state.article).length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"holdArticleAndComment"},r.a.createElement(C,{article:this.state.article}),r.a.createElement(w,{updateComments:this.updateComments,article_id:this.state.article.article_id})),r.a.createElement("div",{className:"commentContainer"},r.a.createElement("h3",null,"Comments"),this.state.comments.map((function(t){return r.a.createElement(k,{removeComment:e.removeComment,username:e.state.username,key:t.comment_id,comment:t})})),"/>")):r.a.createElement("p",null,"loading..."))}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://news-of-the-north-server.herokuapp.com/articles/"+this.props.article_id).then((function(t){var a=t.data.article;e.setState({article:a})})),v.a.get("https://news-of-the-north-server.herokuapp.com/articles/"+this.props.article_id+"/comments?sort_by=created_at").then((function(t){var a=t.data.comments;e.setState({comments:a})}))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topics:[],err:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement("div",{className:"topicSelectorArea"},r.a.createElement("div",{className:"topicSelector"},this.state.topics.length?r.a.createElement("select",{id:"topics",name:"topics",onChange:function(e){Object(h.c)("/topics/".concat(e.target.value,"/articles"))}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Choose a Topic"),this.state.topics.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))):null))}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://news-of-the-north-server.herokuapp.com/api/topics").then((function(t){var a=t.data.topics.map((function(e){return e.slug}));e.setState({topics:a})}))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={topic:null,articles:[]},a.chosenTopic=function(e){a.setState({topic:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{chosenTopic:this.chosenTopic}),this.state.articles.length?null:r.a.createElement("p",null,"Articles for your chosen topic will appear here"))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],sortBy:"comment_count",err:null},a.sortArticles=function(e){a.setState({sortBy:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(f,{sortArticles:this.sortArticles}),r.a.createElement("h2",null,"Topic: ",this.props.topic),this.state.articles.length?r.a.createElement("div",{className:"articleContainer"},this.state.articles.map((function(e){return r.a.createElement(C,{key:e.article_id,article:e})}))):r.a.createElement("h1",null,"loading"))}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://news-of-the-north-server.herokuapp.com/articles?topic="+this.props.topic).then((function(t){var a=t.data.articles;e.setState({articles:a})})).catch((function(t){return e.setState({err:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.topic!==this.props.topic&&v.a.get("https://news-of-the-north-server.herokuapp.com/articles?topic="+this.props.topic).then((function(e){var t=e.data.articles;a.setState({articles:t})})).catch((function(e){return a.setState({err:e})})),t.sortBy!==this.state.sortBy&&v.a.get("https://news-of-the-north-server.herokuapp.com/articles?topic="+this.props.topic+"&sort_by="+this.state.sortBy).then((function(e){var t=e.data.articles;a.setState({articles:t})})).catch((function(e){return a.setState({err:e})}))}}]),t}(n.Component),B=function(e){return r.a.createElement(h.a,Object.assign({},e,{getProps:function(e){return{style:{color:e.isCurrent&&"red"}}}}))};var H=function(e){return r.a.createElement("nav",null,r.a.createElement(B,{to:"/NC-news"},"Home"),r.a.createElement(B,{to:"/NC-news/articles"},"Current Articles"),r.a.createElement(B,{to:"/NC-news/topics"},"Topics"),r.a.createElement(B,{to:"/NC-news/authors"},"Contributors"))},T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[],err:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.err?r.a.createElement(y,{err:this.state.err}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles by ",this.props.author),this.state.articles.length?this.state.articles.map((function(e){return r.a.createElement(C,{key:e.article_id,article:e})})):r.a.createElement("p",null,"loading"))}},{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.author,v.a.get("https://news-of-the-north-server.herokuapp.com/api/articles?author="+e).then((function(e){return e.data.articles}))).then((function(e){t.setState({articles:e}).catch((function(e){return t.setState({err:e})}))}))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"jessjelly"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bannerArea"},r.a.createElement(p,{className:"header",username:this.state.username}),r.a.createElement(H,null)),r.a.createElement(h.b,{basepath:"/NC-news"},r.a.createElement(y,{default:!0}),r.a.createElement(S,{path:"/"}),r.a.createElement(S,{path:"/articles"}),r.a.createElement(A,{path:"/articles/:article_id"}),r.a.createElement(D,{path:"/topics"}),r.a.createElement(V,{path:"/topics/:topic/articles"}),r.a.createElement(T,{path:"/author/:author"})))}}]),t}(n.Component);o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6809666f.chunk.js.map