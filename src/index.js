import { a } from "./main.js";

console.log("a:", a);

if (module.hot) {
  module.hot.accept("./main.js", () => {
    console.log("main.js更新");
  });
}

window.b = 12234;
