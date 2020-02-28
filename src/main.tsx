/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// @ts-ignore
import { toTheme } from "@theme-ui/typography";
import merge from "deepmerge";
import { render } from "react-dom";
import Twemoji from "react-twemoji";
import { ThemeProvider } from "theme-ui";
// @ts-ignore
import fairyGates from "typography-theme-fairy-gates";
import Content from "./cv.mdx";

fairyGates.baseFontSize = "16px";
fairyGates.blockMarginBottom = 0.8;

const theme = merge(toTheme(fairyGates), {
  colors: {
    text: "hsla(0,0%,0%,0.8)",
    background: "#fff",
    primary: "#1ca086",
    muted: "#999999"
  },
  styles: {
    root: {
      maxWidth: "170mm",
      margin: "0 auto"
    },
    a: {
      color: "primary"
    }
  },
  images: {
    avatar: {
      width: 120,
      height: 120,
      borderRadius: "100%"
    }
  }
});

render(
  <ThemeProvider theme={theme}>
    <Twemoji
      options={{ folder: "svg", ext: ".svg" }}
      css={css`
        img.emoji {
          width: 1rem;
          vertical-align: text-top;
          margin-right: 0.5rem;
        }
      `}
    >
      <Content />
    </Twemoji>
  </ThemeProvider>,
  document.querySelector("#container")
);
