import React from "react";
import { render } from "react-dom";
import Twemoji from "react-twemoji";
import Content from "./cv.mdx";
import "./styles.css";

render(
  <Twemoji options={{ folder: "svg", ext: ".svg" }}>
    <Content />
  </Twemoji>,
  document.querySelector("#container")
);
