// @ts-ignore
import { toTheme } from "@theme-ui/typography";
import React from "react";
import { render } from "react-dom";
import Twemoji from "react-twemoji";
import { ThemeProvider } from "theme-ui";
// @ts-ignore
import fairyGates from "typography-theme-fairy-gates";
import Content from "./cv.mdx";

const theme = toTheme(fairyGates);

render(
  <ThemeProvider theme={theme}>
    <Twemoji options={{ folder: "svg", ext: ".svg" }}>
      <Content />
    </Twemoji>
  </ThemeProvider>,
  document.querySelector("#container")
);
