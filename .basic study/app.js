const heading = React.createElement("h3", { id: "love" }, "hello sirr!!!!!!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello parent to child 1"),
    React.createElement("h1", {}, "hello parent to child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "neated h3"),
    React.createElement("h4", {}, "nested h4"),
  ]),
]);

const rooter = ReactDOM.createRoot(document.getElementById("rooter"));

rooter.render(parent);

console.log(parent);
console.log(heading);
