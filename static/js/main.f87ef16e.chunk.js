(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(204)},203:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),l=a(17),s=a(16),i=a(18),c=a(0),o=a.n(c),u=a(5),m=a.n(u),h=a(205),d=a(206),p=(a(75),h.a),f=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p,{id:"foot",style:{textAlign:"center",color:"gray"}},o.a.createElement(d.a,null,o.a.createElement("span",{id:"footer"},"Movie List \xa92019 Created by Mingfeng Ou")))}}]),t}(c.Component),E=a(208),y=a(63),b=h.a,v=E.a.Search,g=y.a.Option,O="title",j=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={searchType:"title"},e}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleSearch",value:function(e){if(this.props.onSubmit&&null!=e&&""!==e){var t=e;this.props.onSubmit(t,O)}}},{key:"handleChange",value:function(e){O=e}},{key:"render",value:function(){var e=this,t=o.a.createElement(y.a,{defaultValue:"\u6309\u6807\u9898",style:{width:100},onChange:this.handleChange},o.a.createElement(g,{value:"title"},"\u6309\u6807\u9898"),o.a.createElement(g,{value:"summary"},"\u6309\u7b80\u4ecb"),o.a.createElement(g,{value:"actor"},"\u6309\u6f14\u5458"),o.a.createElement(g,{value:"time"},"\u6309\u65f6\u95f4"));return o.a.createElement(b,null,o.a.createElement("div",{className:"logo"}),o.a.createElement("p",{class:"pageTitle"},"\u7535\u5f71\u5217\u8868"),o.a.createElement("div",null,o.a.createElement(v,{addonBefore:t,placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57",enterButton:"Search",size:"large",onSearch:function(t){return e.handleSearch(t)}})))}}]),t}(c.Component),k=a(207),L=a(209),C=a(40),S=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:this.props.pagesize},dataSource:this.props.dataList,renderItem:function(e){return o.a.createElement(C.b,{to:{pathname:"/detail",state:{movie:e}}},o.a.createElement(k.a.Item,{key:e._id},o.a.createElement(k.a.Item.Meta,{avatar:o.a.createElement("img",{width:150,src:e.poster,onerror:"this.src='empty.png'}"}),title:o.a.createElement("h1",null,e.title),description:o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("span",null,e.pubdate),o.a.createElement("span",null," / "),o.a.createElement("span",null,e.genres.join(" / "))),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement(L.a,{disabled:!0,allowHalf:!0,defaultValue:5*e.rating.average/10-Math.floor(5*e.rating.average/10)>.5?Math.floor(5*e.rating.average/10)+.5:Math.floor(5*e.rating.average/10)})," ",o.a.createElement("span",{id:"score"},e.rating.average),"  (\u8bc4\u8bba\u4eba\u6570\uff1a ",e.rating.rating_people,")"),o.a.createElement("p",{class:"summary"},e.summary))}),o.a.createElement(d.a,null)))}})}}]),t}(c.Component);S.defaultProps={dataList:[]};var w=S,x=a(210),D=a(9),M=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={current:"home"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(x.b,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},o.a.createElement(x.b.Item,{key:"home"},o.a.createElement(C.b,{to:"/"},o.a.createElement(D.a,{type:"mail"}),"HomePage")),o.a.createElement(x.b.Item,{key:"analysis"},o.a.createElement(C.b,{to:"/analysis"},o.a.createElement(D.a,{type:"appstore"}),"AnalysisPage")))}}]),t}(c.Component),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={movie:a.props.location.state.movie},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.movie;return o.a.createElement("div",null,o.a.createElement("p",{class:"pageTitle"},e.title),o.a.createElement("div",{class:"moviePoster"},o.a.createElement("span",null,o.a.createElement("img",{width:250,src:e.poster,onError:"this.src='empty.png'}"})),o.a.createElement("br",null)),o.a.createElement("div",{class:"introduction"},o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("span",null,"\u53d1\u884c\u65f6\u95f4: ")," ",o.a.createElement("span",null,e.pudate)),o.a.createElement("p",null,"\u56fd\u5bb6\uff1a",e.countries),o.a.createElement("p",null,"\u7c7b\u578b\uff1a",e.genres.join(" / ")),o.a.createElement("p",null,"\u5bfc\u6f14\uff1a",e.directors.join(" / ")),o.a.createElement("p",null,"\u4e3b\u6f14\uff1a",e.casts.map(function(e,t){return o.a.createElement("span",null," ",e.name," / ")}))),o.a.createElement("div",{class:"ratingGroup"},o.a.createElement(L.a,{disabled:!0,defaultValue:5})," ",e.rating.stars[0],o.a.createElement("span",null,"%"),o.a.createElement("br",null),o.a.createElement(L.a,{disabled:!0,defaultValue:4})," ",e.rating.stars[1],o.a.createElement("span",null,"%"),o.a.createElement("br",null),o.a.createElement(L.a,{disabled:!0,defaultValue:3})," ",e.rating.stars[2],o.a.createElement("span",null,"%"),o.a.createElement("br",null),o.a.createElement(L.a,{disabled:!0,defaultValue:2})," ",e.rating.stars[3],o.a.createElement("span",null,"%"),o.a.createElement("br",null),o.a.createElement(L.a,{disabled:!0,defaultValue:1})," ",e.rating.stars[4],o.a.createElement("span",null,"%"),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("p",null,"\u7b80\u4ecb\uff1a",e.summary)))}}]),t}(c.Component),B=(a(203),a(41)),V=a(20),F=a(122),I=a.n(F),J=function(e){function t(){var e;return Object(n.a)(this,t),e=Object(l.a)(this,Object(s.a)(t).call(this)),console.info("constructor"),e.state={dataList:[]},e}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleData",value:function(e){var t=e.replace(/[\b\f\r\t]/g,"").split("\n"),a=[];console.info(t.length);for(var n=0,r=t.length-1;n<r;n++){console.log(t[n]);var l;l=t[n].replace(/[\\]/g,""),console.log(l);try{var s=JSON.parse(l);a.push(s)}catch(i){console.info(n)}}return a}},{key:"getData",value:function(){var e=this;console.info("getData"),fetch("./films.json").then(function(e){return e.text()}).then(function(t){return e.setState({dataList:e.handleData(t)})})}},{key:"componentWillMount",value:function(){console.info("componentWillMount"),this.getData()}},{key:"sortByField",value:function(e,t){return e.num-t.num}},{key:"analyseData",value:function(){for(var e=[],t={},a=[],n={},r=[],l={"1970\u4e4b\u524d":0,"70\u5e74\u4ee3":0,"80\u5e74\u4ee3":0,"90\u5e74\u4ee3":0,"00\u5e74\u4ee3":0,"2010\u5e74\u4e4b\u540e":0},s=0,i=this.state.dataList.length;s<i;s++){for(var c=0,o=this.state.dataList[s].genres.length;c<o;c++)n.hasOwnProperty(this.state.dataList[s].genres[c])?n[this.state.dataList[s].genres[c]]+=1:n[this.state.dataList[s].genres[c]]=1;for(c=0,o=this.state.dataList[s].countries.length;c<o;c++)t.hasOwnProperty(this.state.dataList[s].countries[c])?t[this.state.dataList[s].countries[c]]+=1:t[this.state.dataList[s].countries[c]]=1;if(null!=this.state.dataList[s].pubdate[0]&&this.state.dataList[s].pubdate[0].length>2){var u=this.state.dataList[s].pubdate[0].substring(0,4);u<1970?l["1970\u4e4b\u524d"]+=1:u<1980?l["70\u5e74\u4ee3"]+=1:u<1990?l["80\u5e74\u4ee3"]+=1:u<2e3?l["90\u5e74\u4ee3"]+=1:u<2010?l["00\u5e74\u4ee3"]+=1:l["2010\u5e74\u4e4b\u540e"]+=1}}var m={country:"\u5176\u4ed6",num:0};for(var h in t){if(t[h]>3)(d={}).country=h,d.num=t[h],e.push(d);else m.num+=t[h]}for(var h in e.push(m),l){(d={}).year=h,d.population=l[h],r.push(d)}for(var h in n){var d;(d={}).type=h,d.num=n[h],a.push(d)}return{country:e.sort(this.sortByField),year:r,type:a}}},{key:"render",value:function(){var e=this.analyseData(),t=e.country,a=e.year,n=e.type;return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("h1",{align:"center"},"\u56fd\u5bb6\u5206\u5e03")),o.a.createElement(T,{class:"Basic",data:t}),o.a.createElement(d.a,null,o.a.createElement("h1",{align:"center"},"\u5e74\u4efd\u5206\u5e03")),o.a.createElement(_,{class:"Donutrose",data:a}),o.a.createElement(d.a,null,o.a.createElement("h1",{align:"center"},"\u7c7b\u578b\u5206\u5e03")),o.a.createElement(z,{data:n}))}}]),t}(c.Component),T=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data;console.log(e);var t=(new I.a).createView().source(e);return t.source(e).transform({type:"sort",callback:function(e,t){return!0}}),o.a.createElement("div",{class:"Basic"},o.a.createElement(V.Chart,{height:400,data:t,forceFit:!0},o.a.createElement(V.Coord,{transpose:!0}),o.a.createElement(V.Axis,{name:"country",label:{offset:12}}),o.a.createElement(V.Axis,{name:"num"}),o.a.createElement(V.Tooltip,null),o.a.createElement(V.Geom,{type:"interval",position:"country*num",color:"country"})))}}]),t}(o.a.Component),_=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",null,o.a.createElement(V.Chart,{height:400,data:e,forceFit:!0},o.a.createElement(V.Coord,{type:"polar",innerRadius:.2}),o.a.createElement(V.Tooltip,null),o.a.createElement(V.Legend,{position:"right",offsetY:-50,offsetX:-300}),o.a.createElement(V.Geom,{type:"interval",color:"year",position:"year*population",style:{lineWidth:1,stroke:"#fff"}})))}}]),t}(o.a.Component),z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",null,o.a.createElement(V.Chart,{height:400,data:e,scale:{sales:{tickInterval:20}},forceFit:!0},o.a.createElement(V.Axis,{name:"type"}),o.a.createElement(V.Axis,{name:"num"}),o.a.createElement(V.Tooltip,{crosshairs:{type:"y"}}),o.a.createElement(V.Geom,{type:"interval",position:"type*num"})))}}]),t}(o.a.Component),K=J,P=(h.a.Header,h.a.Footer,h.a.Content,JSON.parse('{"_id":"1296824","rating":{"rating_people":"17640","average":"7.8","stars":["22.2","48.9","26.9","1.8","0.2"]},"genres":["\u5267\u60c5","\u7231\u60c5"],"season_count":"","pubdate":["1943-12-24(\u82f1\u56fd)"],"countries":["\u7f8e\u56fd"],"lens_id":6983,"casts":[{"id":"1048149","name":"\u5965\u900a\xb7\u5a01\u5c14\u65af"},{"id":"1027882","name":"\u743c\xb7\u82b3\u767b"},{"id":"1016694","name":"\u739b\u683c\u4e3d\u7279\xb7\u5965\u5e03\u8d56\u6069"},{"id":"1092323","name":"\u4f69\u5409\xb7\u5b89\xb7\u52a0\u7eb3"},{"id":"1028307","name":"\u7ea6\u7ff0\xb7\u8428\u987f"},{"id":"1041625","name":"\u8428\u62c9\xb7\u5965\u5c14\u53e4\u5fb7"},{"id":"1067393","name":"\u4ea8\u5229\xb7\u4e39\u5c3c\u5c14"}],"title":"\u7b80\u7231 Jane Eyre","directors":[{"id":"1160301","name":"\u7f57\u4f2f\u7279\xb7\u65af\u8482\u6587\u68ee"}],"poster":"https://img3.doubanio.com/view/subject/l/public/s2899424.jpg","summary":"\u5b64\u513f\u7b80\xb7\u7231\u4ece\u5c0f\u5bc4\u5c45\u5728\u8205\u6bcd\u5bb6\uff0c\u53d7\u5c3d\u8205\u5988\u6781\u5176\u8868\u5f1f\u7684\u6298\u78e8\uff0c\u540e\u88ab\u9001\u5f80\u7531\u5e03\u6d1b\u514b\u8d6b\u65af\u7279\u5148\u751f\u6240\u5f00\u7684\u6559\u4f1a\u5b66\u6821\u3002\u5728\u5b66\u6821\u91cc\uff0c\u7b80\xb7\u7231\u4ecd\u906d\u6b67\u89c6\uff0c\u4f46\u5979\u8ba4\u8bc6\u4e86\u540c\u5b66\u6d77\u4f26\uff0c\u7b2c\u4e00\u6b21\u611f\u53d7\u5230\u53cb\u60c5\u7684\u6e29\u6696\u3002\u6d77\u4f26\u5374\u56e0\u8fdd\u6297\u5e03\u6d1b\u514b\u8d6b\u65af\u7279\u5148\u751f\u906d\u53d7\u60e9\u7f5a\u67d3\u75c5\u53bb\u4e16\u3002\u5b64\u72ec\u7684\u7b80\xb7\u7231\uff08\u743c\xb7\u82b3\u767bJoanFontaine\u9970\uff09\u6210\u5e74\u540e\u79bb\u5f00\u5b66\u6821\u6765\u5230\u6851\u83f2\u5c14\u5fb7\uff0c\u7ed9\u7231\u5fb7\u534e\u5148\u751f\u7684\u79c1\u751f\u5973\u963f\u9edb\u52d2\u5f53\u5bb6\u5ead\u6559\u5e08\u3002\u4e00\u4e2a\u591c\u665a\uff0c\u5979\u5728\u90ca\u5916\u5de7\u9047\u4e86\u8fdc\u884c\u5f52\u5bb6\u7684\u7231\u5fb7\u534e\u5148\u751f\uff08\u5965\u900a\xb7\u5a01\u5c14\u65afOrsonWelles\u9970\uff09\u3002\u7ecf\u8fc7\u4e00\u7cfb\u5217\u4ea4\u6d41\u540e\u4e24\u4eba\u7684\u611f\u60c5\u8fc5\u901f\u5347\u6e29\uff0c\u9677\u5165\u4e86\u604b\u7231\u4e2d\u3002\u5c31\u5728\u4ed6\u4eec\u4e24\u4eba\u51c6\u5907\u6210\u5a5a\u4e4b\u9645\uff0c\u4e00\u4e2a\u771f\u76f8\u5374\u6253\u65ad\u4e86\u4ed6\u4eec\u7684\u5e78\u798f\u3002\u8fdc\u79bb\u4e86\u7231\u5fb7\u534e\u7684\u7b80\xb7\u7231\u56de\u5bb6\u63a2\u671b\u4e86\u6fd2\u6b7b\u7684\u8205\u5988\uff0c\u540c\u65f6\u6536\u5230\u4e86\u7231\u5fb7\u534e\u906d\u53d7\u5669\u8017\u7684\u6d88\u606f\uff0c\u6700\u540e\u8fd9\u4e24\u4e2a\u5f7c\u6b64\u6df1\u7231\u7684\u4e0d\u5e78\u4e4b\u4eba\u80fd\u5426\u7ec8\u6210\u7737\u5c5e\u5462\uff1f\\n\u672c\u7247\u6839\u636e\u5341\u4e5d\u4e16\u7eaa\u82f1\u56fd\u5973\u4f5c\u5bb6\u590f\u6d1b\u8482\xb7\u52c3\u5170\u7279\u7684\u8457\u540d\u4f5c\u54c1\u300a\u7b80\xb7\u7231\u300b\u6539\u7f16\uff0c\u7531\u56db\u5341\u5e74\u4ee3\u7684\u597d\u83b1\u575e\u5f71\u661f\u743c\xb7\u82b3\u767b\u4e0e\u5965\u900a\xb7\u5a01\u5c14\u65af\u4e3b\u6f14\u3002...","languages":["\u82f1\u8bed"],"duration":"97","episodes":"","writers":[{"id":"search","name":"Charlotte Bront\xeb"},{"id":"search","name":"Aldous Huxley"},{"id":"search","name":"Henry Koster"},{"id":"1160301","name":"\u7f57\u4f2f\u7279\xb7\u65af\u8482\u6587\u68ee"},{"id":"1050012","name":"\u7ea6\u7ff0\xb7\u8c6a\u65af\u66fc"}],"imdb":"tt0036969","year":"1943","site":"","douban_site":"","aka":["\u7b80\xb7\u7231"]}'),function(){return o.a.createElement("main",null,o.a.createElement(B.c,null,o.a.createElement(B.a,{exact:!0,path:"/",component:W}),o.a.createElement(B.a,{path:"/analysis",component:K}),o.a.createElement(B.a,{path:"/detail",component:A})))}),W=function(e){function t(){var e;return Object(n.a)(this,t),e=Object(l.a)(this,Object(s.a)(t).call(this)),console.info("constructor"),e.state={jsonText:"",dataList:[],onSearch:!1,searchResult:[],searchKeyword:""},e}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleData",value:function(e){var t=e.replace(/[\b\f\r\t]/g,"").split("\n"),a=[];console.info(t.length);for(var n=0,r=t.length-1;n<r;n++){console.log(t[n]);var l;l=t[n].replace(/[\\]/g,""),console.log(l);try{var s=JSON.parse(l);a.push(s)}catch(i){console.info(n)}}return a}},{key:"getData",value:function(){var e=this;console.info("getData"),fetch("./films.json").then(function(e){return e.text()}).then(function(t){return e.setState({dataList:e.handleData(t)})})}},{key:"componentWillMount",value:function(){console.info("componentWillMount"),this.getData()}},{key:"shouldComponentUpdate",value:function(e,t){return console.info("shouldComponentUpdate"),1==t.onSearch&&t.searchKeyword!==this.state.searchKeyword||this.state.dataList!==t.dataList}},{key:"handleSubmitSearch",value:function(e,t){for(var a=[],n=0,r=this.state.dataList.length;n<r-1;n++)if("title"==t)this.state.dataList[n].title.indexOf(e)>=0&&a.push(this.state.dataList[n]);else if("summary"==t)this.state.dataList[n].summary.indexOf(e)>=0&&a.push(this.state.dataList[n]);else if("actor"==t){var l=this.state.dataList[n].casts;for(n=0,r=l.length;n<r;n++)if(l[n].name.indexOf(e)>=0){a.push(this.state.dataList[n]);break}}else if("time"==t){this.state.dataList[n].pubdate[0].indexOf(e)>=0&&a.push(this.state.dataList[n])}else alert(t);this.setState({searchResult:a,onSearch:!0,searchKeyword:e})}},{key:"render",value:function(){return console.info("render"),o.a.createElement(h.a,{color:"#fff"},o.a.createElement(j,{onSubmit:this.handleSubmitSearch.bind(this)}),o.a.createElement(w,{dataList:this.state.onSearch?this.state.searchResult:this.state.dataList,pagesize:5}))}}]),t}(c.Component);m.a.render(o.a.createElement(C.a,null,o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(P,null),o.a.createElement(f,null))},null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.f87ef16e.chunk.js.map