import styled from "styled-components";

export function CopyRight() {
  return <Footer>robstarbuck.uk - Sonova Code Test</Footer>;
}

const Footer = styled.footer`
  color: var(--accent);
  opacity: 0.8;
  padding: var(--tile);
  display: flex;
  flex-direction: row-reverse;
`;
