(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),i=a(3),n=a.n(i),r=a(5),o=a(4),c=(a(12),a(1)),h=a.n(c),m=function(){return l.a.createElement("div",{className:"About"},l.a.createElement("section",{className:"me"},l.a.createElement("img",{src:"images/me.jpg",alt:"alexander"})),l.a.createElement("section",{className:"info"},l.a.createElement("p",null,"Hello There!"),l.a.createElement("p",null,"I am ",l.a.createElement("strong",null,"Alexander Vashchuk")),l.a.createElement("p",null,"I am ",l.a.createElement("img",{src:"images/age.png",alt:"age",title:"age"})," ",function(){var e=h()("1998-07-22");return h()().diff(e,"years")}()," ","years old and I'm passionate about software development. You can check out my projects or contact me down below.")))},g=function(e){var t=e.skills,a=e.filter,i=e.onClick;return l.a.createElement(s.Fragment,null,l.a.createElement("h1",null,"Filter:"),l.a.createElement("div",{className:"Filter"},t.map(function(e){return l.a.createElement("label",{key:e},l.a.createElement("span",null,l.a.createElement("img",{src:"images/skills/".concat(e,".png"),alt:e,title:e}),l.a.createElement("p",null,e)),l.a.createElement("input",{type:"checkbox",name:e.toLowerCase(),onClick:i,defaultChecked:a.indexOf(e.toLowerCase())>=0}))})))},p=function(e){var t=e.project,a=t.name,s=t.logo,i=t.github,n=t.live,r=i?l.a.createElement("a",{href:i},l.a.createElement("button",{className:"git"},"Github Repository")):"",o=n?l.a.createElement("a",{href:n},l.a.createElement("button",{className:"live"},"Live Version")):"";return l.a.createElement("section",null,l.a.createElement("h1",{className:"name"},a),l.a.createElement("img",{className:"logo",src:s,alt:a}),l.a.createElement("div",{className:"buttons"},r,o))},u=[{name:"Millionaire",technologies:["html","css","javascript","canvas"],logo:"images/projects/Millionaire.png",github:"https://github.com/1alexvash/Millionaire",live:"https://1alexvash.github.io/Millionaire/"},{name:"Words",technologies:["html","css","javascript","canvas"],logo:"images/projects/Words.png",github:"https://github.com/1alexvash/Words",live:"https://1alexvash.github.io/Words/"},{name:"Submarine",technologies:["html","css","javascript","canvas"],logo:"images/projects/Submarine.png",github:"https://github.com/1alexvash/Submarine",live:"https://1alexvash.github.io/Submarine/"},{name:"UrlShortener",technologies:["html","css","javascript","react.js"],logo:"images/projects/UrlShortener.png",github:"https://github.com/1alexvash/UrlShortener",live:"https://1alexvash.github.io/UrlShortener/"},{name:"PasswordGenerator",technologies:["html","css","javascript","react.js"],logo:"images/projects/PasswordGenerator.png",github:"https://github.com/1alexvash/PasswordGenerator",live:"https://1alexvash.github.io/PasswordGenerator/"},{name:"RandomMovie",technologies:["html","css","javascript","react.js"],logo:"images/projects/RandomMovie.png",github:"https://github.com/1alexvash/RandomMovie",live:"https://1alexvash.github.io/RandomMovie/"},{name:"ButtonMaker",technologies:["html","css","javascript","react.js"],logo:"images/projects/ButtonMaker.png",github:"https://github.com/1alexvash/ButtonMaker",live:"https://1alexvash.github.io/ButtonMaker/"},{name:"Notes",technologies:["html","css","javascript","react.js"],logo:"images/projects/Notes.png",github:"https://github.com/1alexvash/Notes",live:"https://1alexvash.github.io/Notes/"},{name:"HIIT",technologies:["html","css","javascript","react.js"],logo:"images/projects/HIIT.png",github:"https://github.com/1alexvash/HIIT",live:"https://1alexvash.github.io/HIIT/"},{name:"Weather",technologies:["html","css","javascript","react.js"],logo:"images/projects/Weather.png",github:"https://github.com/1alexvash/Weather",live:"https://1alexvash.github.io/Weather/"},{name:"Currencies",technologies:["html","css","javascript","react.js"],logo:"images/projects/Currencies.png",github:"https://github.com/1alexvash/Currencies",live:"https://1alexvash.github.io/Currencies/"},{name:"Converter",technologies:["html","css","javascript","react.js"],logo:"images/projects/Converter.png",github:"https://github.com/1alexvash/Converter",live:"https://1alexvash.github.io/Converter/"},{name:"DailyJournal",technologies:["html","css","javascript","react.js","mongodb","node.js","express","redux"],logo:"images/projects/DailyJournal.png",github:"https://github.com/1alexvash/DailyJournal",live:""},{name:"Math",technologies:["html","css","javascript","react.js"],logo:"images/projects/Math.png",github:"https://github.com/1alexvash/Math",live:"https://nextjs-knbmtk9dv.now.sh/"},{name:"Checkers",technologies:["html","css","javascript","react.js"],logo:"images/projects/Checkers.png",github:"https://github.com/1alexvash/Checkers",live:"https://1alexvash.github.io/Checkers/"},{name:"Meditation",technologies:["html","css","javascript","react.js"],logo:"images/projects/Meditation.png",github:"https://github.com/1alexvash/Meditation",live:"https://1alexvash.github.io/Meditation/"},{name:"Chess",technologies:["html","css","javascript","react.js"],logo:"images/projects/Chess.png",github:"https://github.com/1alexvash/Chess",live:"https://1alexvash.github.io/Chess/"},{name:"Typist",technologies:["html","css","javascript","react.js"],logo:"images/projects/Typist.png",github:"https://github.com/1alexvash/Typist",live:"https://1alexvash.github.io/Typist/"}],v=function(e){var t;return e.filter.forEach(function(e){t=u.filter(function(t){return t.technologies.indexOf(e)>=0})}),l.a.createElement(s.Fragment,null,l.a.createElement("h1",null,"Projects found: ",t.length),l.a.createElement("div",{className:"Projects"},t.map(function(e){return l.a.createElement(p,{key:e.name,project:e})})))},b=function(){return l.a.createElement("div",{className:"Contact-Me"},l.a.createElement("div",{className:"title"},"Contact Me:"),l.a.createElement("div",{className:"contact-options"},l.a.createElement("section",null,l.a.createElement("img",{src:"images/phone.png",alt:"phone",title:"phone"}),l.a.createElement("a",{href:"tel:+380 99 75 45 105"},"+380 99 75 45 105")),l.a.createElement("section",null,l.a.createElement("img",{src:"images/telegram.png",alt:"telegram",title:"telegram"}),l.a.createElement("a",{href:"https://web.telegram.org/#/im?p=@HeWorksSoHard"},"HeWorksSoHard")),l.a.createElement("section",null,l.a.createElement("img",{src:"images/email.png",alt:"email",title:"email"}),l.a.createElement("a",{href:"mailto:1alexvash@gmail.com"},"1alexvash@gmail.com")),l.a.createElement("section",null,l.a.createElement("img",{src:"images/skype.png",alt:"skype",title:"skype"}),l.a.createElement("a",{href:"skype:live:1alexvash?chat"},"1alexvash")),l.a.createElement("section",null,l.a.createElement("img",{src:"images/instagram.png",alt:"instagram",title:"instagram"}),l.a.createElement("a",{href:"https://www.instagram.com/1alexvash/"},"1alexvash"))))},j=function(){var e=Object(s.useState)({filter:["html","css","javascript"],skills:["HTML","CSS","JavaScript","React.js","Node.js","MongoDB","Redux","Canvas"]}),t=Object(o.a)(e,2),a=t[0],i=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"Twinkling"}),l.a.createElement(m,null),l.a.createElement(g,{skills:a.skills,filter:a.filter,onClick:function(e){return function(e){var t=a.filter,s=e.target.name;!0===e.target.checked?t.push(s):t.splice(t.indexOf(s),1),i(Object(r.a)({},a,{filter:t}))}(e)}}),l.a.createElement(v,{filter:a.filter}),l.a.createElement(b,null))};n.a.render(l.a.createElement(j,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.0de472a2.chunk.js.map