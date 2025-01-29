import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("parent"))

const title = <span> its a span word</span>

const Jsxtitle = () => <h1 id="here" style={{backgroundColor: 'gold',color: 'green'}}>{title} hi jsx</h1>;
// root.render(jsxtitle);
const num = 230;

const Headingcomponent = () => {
  return (<div>
  <h1>he he...{num+3} </h1>
  {Jsxtitle()}
  <Jsxtitle/>
  </div>)
}

const Headingcomponent2 = () => <h2 id="name">heeeeeeeeee <Headingcomponent></Headingcomponent> </h2>;
root.render(<Headingcomponent2/>)
