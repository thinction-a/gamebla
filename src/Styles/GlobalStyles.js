import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    html {
    overflow-x: hidden;
    }

    body {
    font-family: "Roboto", sans-serif;
    color: #9fa1a4;
    line-height: 1.5;
    }

    a {
    color: #777;
    transition: .3s all ease;
    }

    a:hover {
    color: #000;
    }

    h1, h2, h3, h4, h5, h6, .font-heading {
    font-family: "Poppins", sans-serif;
    color: #000;
    }

    .container {
    z-index: 2;
    position: relative;
    }

    .text-black {
    color: #000 !important;
    }

    .text-primary {
    color: #2d71a1 !important;
    }

    .border-top {
    border-top: 1px solid #f2f2f2 !important;
    }

    .border-bottom {
    border-bottom: 1px solid #f2f2f2 !important;
    }

    figure figcaption {
    margin-top: .5rem;
    font-style: italic;
    font-size: .8rem;
    }

    section {
    overflow: hidden;
    }

    .section {
    padding: 7rem 0;
    }

    .section-heading {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(-45deg, #3db3c5, #274685);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`;