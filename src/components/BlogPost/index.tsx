import Link from "next/link";
import { ReactElement } from "react";
import styled, { CSSProperties } from "styled-components";

type BlogPostCardProps = {
  loading?: boolean;
  style?: CSSProperties;
  linkTo?: string;
  children?: ReactElement;
};

const Container = styled.div<BlogPostCardProps>`
  background: ${(props) =>
    props.loading ? "var(--background)" : "var(--foreground)"};
`;

export const BlogPostCard = (props: BlogPostCardProps) => {
  const { style, children, linkTo, loading } = props;
  return (
    <Container style={style}>
      <>
        {children}
        {linkTo && (
          <footer>
            <Link href={linkTo}>TODO - ARROW RIGHT</Link>
          </footer>
        )}
      </>
    </Container>
  );
};
