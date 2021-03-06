import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
// import normalize.css, contained inside of a folder with the same name. Import this first.
import "normalize.css/normalize.css";
// import the style, configuration is inside of webpack.config.js
import "./styles/styles.scss";

ReactDOM.render(
  <IndecisionApp options={["Option 1", "Option 2"]} />,
  document.getElementById("app")
);

// const Layout = props => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// );

// ReactDOM.render(
//   <Layout>
//     <p>This is inline</p>
//   </Layout>,
//   document.getElementById("app")
// );
