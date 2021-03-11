import { css } from '@linaria/core';
  
export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    body {
      font-family: 'Montserrat';
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url('./fonts/montserrat-black-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url('./fonts/montserrat-extrabold-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('./fonts/montserrat-bold-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('./fonts/montserrat-semibold-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('./fonts/montserrat-medium-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('./fonts/montserrat-regular-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('./fonts/montserrat-light-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('./fonts/montserrat-extralight-webfont.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url('./fonts/montserrat-thin-webfont.woff2') format('woff2');
    }
  }
`;