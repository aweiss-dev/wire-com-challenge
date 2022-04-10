import { createGlobalStyle, css } from "styled-components";

/* stylelint-disable indentation */
const FontFaces = createGlobalStyle(
  () => css`
    /* m-plus-1p-100 - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 100;
      src: url("/fonts/m-plus-1p-v24-latin-100.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-100.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-100.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-100.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-100.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-100.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* m-plus-1p-300 - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 300;
      src: url("/fonts/m-plus-1p-v24-latin-300.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-300.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-300.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-300.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-300.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-300.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* m-plus-1p-500 - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 500;
      src: url("/fonts/m-plus-1p-v24-latin-500.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-500.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-500.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-500.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-500.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-500.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* m-plus-1p-regular - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/m-plus-1p-v24-latin-regular.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-regular.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-regular.woff2")
          format("woff2"),
        /* Super Modern Browsers */
          url("/fonts/m-plus-1p-v24-latin-regular.woff") format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-regular.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-regular.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* m-plus-1p-700 - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 700;
      src: url("/fonts/m-plus-1p-v24-latin-700.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-700.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-700.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-700.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-700.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-700.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* m-plus-1p-900 - latin */
    @font-face {
      font-family: "M PLUS 1p";
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/m-plus-1p-v24-latin-900.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/m-plus-1p-v24-latin-900.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/m-plus-1p-v24-latin-900.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-900.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/m-plus-1p-v24-latin-900.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/m-plus-1p-v24-latin-900.svg#MPLUS1p") format("svg"); /* Legacy iOS */
    }

    /* montserrat-100 - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 100;
      src: url("/fonts/montserrat-v23-latin-100.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-100.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-100.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/montserrat-v23-latin-100.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-100.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-100.svg#Montserrat") format("svg"); /* Legacy iOS */
    }

    /* montserrat-300 - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      src: url("/fonts/montserrat-v23-latin-300.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-300.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-300.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/montserrat-v23-latin-300.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-300.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-300.svg#Montserrat") format("svg"); /* Legacy iOS */
    }

    /* montserrat-regular - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/montserrat-v23-latin-regular.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-regular.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-regular.woff2")
          format("woff2"),
        /* Super Modern Browsers */
          url("/fonts/montserrat-v23-latin-regular.woff") format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-regular.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-regular.svg#Montserrat")
          format("svg"); /* Legacy iOS */
    }

    /* montserrat-500 - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      src: url("/fonts/montserrat-v23-latin-500.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-500.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-500.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/montserrat-v23-latin-500.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-500.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-500.svg#Montserrat") format("svg"); /* Legacy iOS */
    }

    /* montserrat-700 - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      src: url("/fonts/montserrat-v23-latin-700.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-700.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-700.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/montserrat-v23-latin-700.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-700.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-700.svg#Montserrat") format("svg"); /* Legacy iOS */
    }

    /* montserrat-900 - latin */
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      src: url("/fonts/montserrat-v23-latin-900.eot"); /* IE9 Compat Modes */
      src: local(""),
        url("/fonts/montserrat-v23-latin-900.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("/fonts/montserrat-v23-latin-900.woff2")
          format("woff2"),
        /* Super Modern Browsers */ url("/fonts/montserrat-v23-latin-900.woff")
          format("woff"),
        /* Modern Browsers */ url("/fonts/montserrat-v23-latin-900.ttf")
          format("truetype"),
        /* Safari, Android, iOS */
          url("/fonts/montserrat-v23-latin-900.svg#Montserrat") format("svg"); /* Legacy iOS */
    }

    @font-face {
      font-family: OmegaCentauri;
      src: url("/fonts/OmegaCentauri.eot");
      src: url("/fonts/OmegaCentauri.eot?#iefix") format("embedded-opentype"),
        url("/fonts/OmegaCentauri.woff2") format("woff2"),
        url("/fonts/OmegaCentauri.woff") format("woff"),
        url("/fonts/OmegaCentauri.ttf") format("truetype"),
        url("/fonts/OmegaCentauri.svg#OmegaCentauri") format("svg");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
  `
);

export { FontFaces };
