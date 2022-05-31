import { createGlobalStyle } from "styled-components";
import { BlogCollection } from "../components/BlogCollection";

const GlobalStyle = createGlobalStyle`
  /* Colours */
  :root {
    --heading: #5045CD;
    --accent: #A8B6FF;
    --background: #F5F8FA;
    --foreground: #FFFFFF;
  }

  /* Vertical Rhythm - tile.css */
  :root {
    --tile: 20px;
  }

  * {
    font-size: calc(
        0.655 *
        var(--tile) *
        var(--tile-count, 1)
    );
    line-height: calc(
        var(--tile) *
        var(--tile-count, 1) *
        var(--tile-factor, 1)
    );
  }

  h1 {
      --tile-count: 3;
      --tile-factor: 0.75;
  }

  h2 {
      --tile-count: 2;
      --tile-factor: 0.75;
  }

  h3 {
      --tile-count: 1;
  }

  /* Body */

  body {
    background: var(--background);
    font-family: Arial, sans-serif;
  }
`

export default function BlogListingPage() {
  return <div>
    <GlobalStyle />
    <BlogCollection />
  </div>;
}
