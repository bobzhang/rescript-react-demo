// src/App.js
import {
  createElement,
  useReducer
} from "react";
import {
  render
} from "react-dom";
function reducer(state, action) {
  return action === "Decrement" ? {
    count: state.count - 1 | 0
  } : {
    count: state.count + 1 | 0
  };
}
function App$App(Props) {
  var match = useReducer(reducer, {
    count: 0
  }), dispatch = match[1];
  return createElement("main", void 0, "Simple counter with reducer", createElement("div", void 0, createElement("button", {
    onClick: function(param) {
      return dispatch("Decrement");
    }
  }, "Decrement"), createElement("span", {
    className: "counter"
  }, String(match[0].count)), createElement("button", {
    onClick: function(param) {
      return dispatch("Increment");
    }
  }, "Increment")));
}
var e = document.querySelector("#root");
e != null && (prim = createElement(App$App, {}), render(prim, e));
var prim;
