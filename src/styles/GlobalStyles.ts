import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(59, 130, 246) 100%);
    min-height: 100vh;
    color: #1a202c;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;
