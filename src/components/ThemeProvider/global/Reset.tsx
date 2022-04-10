import { createGlobalStyle, css } from "styled-components";

const Reset = createGlobalStyle(
  () => css`
    /*
        Josh's Custom CSS Reset
        https://www.joshwcomeau.com/css/custom-css-reset/
    */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

    html,
    body {
      height: 100%;
      font-family: "Open Sans", sans-serif;
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    #root {
      isolation: isolate;
    }
  `
);

export { Reset };
