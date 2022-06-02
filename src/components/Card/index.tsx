import Link from "next/link";
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

type BlogPostCardProps = {
  loading?: boolean;
  style?: CSSProperties;
  linkTo?: string;
  children?: ReactNode;
};

export const Card = (props: BlogPostCardProps) => {
  const { style, children, linkTo, loading = false } = props;
  return (
    <Container loading={loading} style={style}>
      <Content loading={loading}>
        {children}
        {linkTo && (
          <LinkFooter>
            <Link href={linkTo}>→</Link>
          </LinkFooter>
        )}
      </Content>
    </Container>
  );
};

const Content = styled.div<BlogPostCardProps>`
  opacity: ${(props) => props.loading ? '0' : '1'};
  transform: ${(props) => props.loading ? 'translateY(4px)' : 'translateY(0)'};
  transition: opacity 500ms, transform 500ms;
`;

const Container = styled.div<BlogPostCardProps>`
  display: block;
  border: 2px solid transparent;
  padding: calc(var(--tile) - 2px);
  overflow: hidden;
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-far);
  transition: all 250ms;
  background: ${(props) => (props.loading ? "#0B0F670A" : "var(--foreground)")};
  :hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-near);
  }
  :focus {
    outline: unset;
    border: 2px solid var(--accent);
  }
`;

const LinkFooter = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  padding: var(--tile);
`;