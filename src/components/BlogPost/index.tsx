import Link from "next/link";
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

type BlogPostCardProps = {
  loading?: boolean;
  style?: CSSProperties;
  linkTo?: string;
  children?: ReactNode;
};

const Container = styled.div<BlogPostCardProps>`
    padding: var(--tile);
    overflow: hidden;
    position: relative;
    background: ${(props) =>
        props.loading ? "red" : "var(--foreground)"};
`;

const LinkFooter = styled.footer`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
    padding: var(--tile);
`

export const BlogPostCard = (props: BlogPostCardProps) => {
  const { style, children, linkTo, loading } = props;
  return (
    <Container style={style} loading={loading}>
      <>
        {children}
        {linkTo && (
          <LinkFooter>
            <Link href={linkTo}>TODO - ARROW RIGHT</Link>
          </LinkFooter>
        )}
      </>
    </Container>
  );
};
