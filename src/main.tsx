import React from "react";
import { render } from "react-dom";
import Content from "./cv.mdx";
import "./styles.css";

render(<Content />, document.querySelector("#container"));
