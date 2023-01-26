import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        
    }

    body {
        background-color: rgba(0, 0, 0, 0.7);
        color: #FFFF;
    }
`;
