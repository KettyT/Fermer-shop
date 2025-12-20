import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle `
body {
    margin: 0;
    font-family: "Inter", 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

.frame {
    width: 1100px;
    margin: 0 auto;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.border {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.slogan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 398px;
}

.logo-wrapper--img {
    background: url("/images/face.svg");
    width: 35.8px;
    height: 44px;
}

.logo-wrapper--name-shop {
    font-weight: 700;
    font-size: 28px;
}

.hidden {
    display: none;
}

fieldset {
    border: none;
}

.btn {
    padding: 8px 12px;
    margin-right: 8px;
}

.btn-header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 260px;
    height: 60px;
    gap: 12px;
    background: rgba(252, 155, 39, 1);
    color: white;
    transition: background 0.3s;
    
    &:hover {
        background:  rgba(252, 116, 39, 1);
        box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
    }
    
     &:active {
        background:  rgba(252, 116, 39, 1);
        box-shadow: none;
    }
    
    
    
    
}

.btn-center {
    margin: 64px auto 100px;
}

.btn-default {
    background-color: rgba(246, 246, 246, 1);
}

.btn-active {
    background-color: rgba(136, 170, 77, 1);
    color: #fff;
}
.app-shop {
    background-color: rgba(246, 246, 246, 1);
}
.header-shadow {
    position: relative;
    background-color: #fff;
    /*box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);*/
    /*box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);*/
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
}

`;

export default GlobalStyles;