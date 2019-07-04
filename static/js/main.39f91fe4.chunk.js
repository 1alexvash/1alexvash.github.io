(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    12: function(e, t, a) {},
    14: function(e, t, a) {
      "use strict";
      a.r(t);
      var l = a(0),
        n = a.n(l),
        s = a(3),
        i = a.n(s),
        c = a(5),
        r = a(4),
        m = (a(12), a(1)),
        o = a.n(m),
        h = function() {
          return n.a.createElement(
            "div",
            { className: "About" },
            n.a.createElement(
              "section",
              { className: "me" },
              n.a.createElement("img", {
                src: "images/me.jpg",
                alt: "alexander"
              })
            ),
            n.a.createElement(
              "section",
              { className: "info" },
              n.a.createElement(
                "p",
                null,
                n.a.createElement("img", {
                  src: "images/name.png",
                  alt: "name",
                  title: "name"
                }),
                n.a.createElement("span", null, "Alexander Vashchuk")
              ),
              n.a.createElement(
                "p",
                null,
                n.a.createElement("img", {
                  src: "images/phone.png",
                  alt: "phone",
                  title: "phone"
                }),
                n.a.createElement("span", null, "+380 99 75 45 105")
              ),
              n.a.createElement(
                "p",
                null,
                n.a.createElement("img", {
                  src: "images/email.png",
                  alt: "email",
                  title: "email"
                }),
                n.a.createElement("span", null, "1alexvash@gmail.com")
              ),
              n.a.createElement(
                "p",
                null,
                n.a.createElement("img", {
                  src: "images/age.png",
                  alt: "age",
                  title: "age"
                }),
                " ",
                n.a.createElement(
                  "span",
                  null,
                  (function() {
                    var e = o()("1998-07-22");
                    return o()().diff(e, "years");
                  })()
                )
              ),
              n.a.createElement(
                "p",
                null,
                n.a.createElement("img", {
                  src: "images/skype.png",
                  alt: "skype",
                  title: "skype"
                }),
                n.a.createElement("span", null, "1alexvash")
              )
            )
          );
        },
        g = function(e) {
          var t = e.skills,
            a = e.filter,
            s = e.onClick;
          return n.a.createElement(
            l.Fragment,
            null,
            n.a.createElement("h1", null, "Filter:"),
            n.a.createElement(
              "div",
              { className: "Filter" },
              t.map(function(e) {
                return n.a.createElement(
                  "label",
                  { key: e },
                  n.a.createElement(
                    "span",
                    null,
                    n.a.createElement("img", {
                      src: "images/".concat(e, ".png"),
                      alt: e,
                      title: e
                    }),
                    n.a.createElement("p", null, e)
                  ),
                  n.a.createElement("input", {
                    type: "checkbox",
                    name: e.toLowerCase(),
                    onClick: s,
                    defaultChecked: a.indexOf(e.toLowerCase()) >= 0
                  })
                );
              })
            )
          );
        },
        u = function(e) {
          var t = e.project,
            a = t.name,
            l = t.logo,
            s = t.github,
            i = t.live,
            c = s
              ? n.a.createElement(
                  "a",
                  { href: s },
                  n.a.createElement(
                    "button",
                    { className: "git" },
                    "Github Repository"
                  )
                )
              : "",
            r = i
              ? n.a.createElement(
                  "a",
                  { href: i },
                  n.a.createElement(
                    "button",
                    { className: "live" },
                    "Live Version"
                  )
                )
              : "";
          return n.a.createElement(
            "section",
            null,
            n.a.createElement("h1", { className: "name" }, a),
            n.a.createElement("img", { className: "logo", src: l, alt: a }),
            n.a.createElement("div", { className: "buttons" }, c, r)
          );
        },
        p = [
          {
            name: "HIIT",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/HIIT.png",
            github: "https://github.com/1alexvash/HIIT",
            live: "https://1alexvash.github.io/HIIT/"
          },
          {
            name: "Weather",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Weather.png",
            github: "https://github.com/1alexvash/Weather",
            live: "https://1alexvash.github.io/Weather/"
          },
          {
            name: "Currencies",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Currencies.png",
            github: "https://github.com/1alexvash/Currencies",
            live: "https://1alexvash.github.io/Currencies/"
          },
          {
            name: "Converter",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Converter.png",
            github: "https://github.com/1alexvash/Converter",
            live: "https://1alexvash.github.io/Converter/"
          },
          {
            name: "Submarine",
            technologies: ["html", "css", "javascript", "react.js", "canvas"],
            logo: "images/Submarine.png",
            github: "https://github.com/1alexvash/Submarine",
            live: "https://1alexvash.github.io/Submarine/"
          },
          {
            name: "DailyJournal",
            technologies: [
              "html",
              "css",
              "javascript",
              "react.js",
              "mongodb",
              "node.js",
              "express",
              "redux"
            ],
            logo: "images/DailyJournal.png",
            github: "https://github.com/1alexvash/DailyJournal",
            live: ""
          },
          {
            name: "Math",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Math.png",
            github: "https://github.com/1alexvash/Math",
            live: "https://nextjs-knbmtk9dv.now.sh/"
          },
          {
            name: "Checkers",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Checkers.png",
            github: "https://github.com/1alexvash/Checkers",
            live: "https://1alexvash.github.io/Checkers/"
          },
          {
            name: "Meditation",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Meditation.png",
            github: "https://github.com/1alexvash/Meditation",
            live: "https://1alexvash.github.io/Meditation/"
          },
          {
            name: "Chess",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Chess.png",
            github: "https://github.com/1alexvash/Chess",
            live: "https://1alexvash.github.io/Chess/"
          },
          {
            name: "Typist",
            technologies: ["html", "css", "javascript", "react.js"],
            logo: "images/Typist.png",
            github: "https://github.com/1alexvash/Typist",
            live: "https://1alexvash.github.io/Typist/"
          }
        ],
        v = function(e) {
          var t;
          return (
            e.filter.forEach(function(e) {
              t = p.filter(function(t) {
                return t.technologies.indexOf(e) >= 0;
              });
            }),
            n.a.createElement(
              l.Fragment,
              null,
              n.a.createElement("h1", null, "Projects founds: ", t.length),
              n.a.createElement(
                "div",
                { className: "Projects" },
                t.map(function(e) {
                  return n.a.createElement(u, { key: e.name, project: e });
                })
              )
            )
          );
        },
        b = function() {
          var e = Object(l.useState)({
              filter: ["html", "css", "javascript"],
              skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "MongoDB",
                "Redux",
                "Canvas"
              ]
            }),
            t = Object(r.a)(e, 2),
            a = t[0],
            s = t[1];
          return n.a.createElement(
            "div",
            { className: "App" },
            n.a.createElement("div", { className: "Twinkling" }),
            n.a.createElement(h, null),
            n.a.createElement(g, {
              skills: a.skills,
              filter: a.filter,
              onClick: function(e) {
                return (function(e) {
                  var t = a.filter,
                    l = e.target.name;
                  !0 === e.target.checked
                    ? t.push(l)
                    : t.splice(t.indexOf(l), 1),
                    s(Object(c.a)({}, a, { filter: t }));
                })(e);
              }
            }),
            n.a.createElement(v, { filter: a.filter })
          );
        };
      i.a.render(n.a.createElement(b, null), document.getElementById("root"));
    },
    6: function(e, t, a) {
      e.exports = a(14);
    }
  },
  [[6, 1, 2]]
]);
//# sourceMappingURL=main.39f91fe4.chunk.js.map
