import Link from "next/link";
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

type CardProps = {
  loading?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
  interactive?: boolean;
};

export const Card = (props: CardProps) => {
  const { style, children, loading = false, interactive = false } = props;
  return (
    <Container loading={loading} style={style} interactive={interactive}>
      <Content loading={loading}>{children}</Content>
    </Container>
  );
};

type CardLinkProps = CardProps & { linkTo: string };

export const CardLink = (props: CardLinkProps) => {
  const { linkTo, children, ...cardProps } = props;

  return (
    <Link href={linkTo} passHref>
      <a style={{ all: "unset" }}>
        <Card interactive={true} {...cardProps}>
          <div style={{ padding: "var(--tile)" }}>{children}</div>
          <LinkFooter>
            <Arrow />
          </LinkFooter>
        </Card>
      </a>
    </Link>
  );
};

type StyledProps = {
  interactive?: boolean;
  loading?: boolean;
};

const Content = styled.div<StyledProps>`
  opacity: ${(props) => (props.loading ? "0" : "1")};
  height: inherit;
  transform: ${(props) =>
    props.loading ? "translateY(4px)" : "translateY(0)"};
  transition: opacity 500ms, transform 500ms;
`;

const Container = styled.div<StyledProps>`
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-when-far);
  transition: all 250ms;
  background: ${(props) => (props.loading ? "#0B0F670A" : "var(--foreground)")};
  @media ${({ interactive }) => (interactive ? "all" : "not all")} {
    cursor: pointer;
    :hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-when-close);
    }
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
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Arrow = styled.button`
  all: unset;
  color: var(--heading);
  width: calc(var(--tile) * 2);
  height: calc(var(--tile) * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  ::before {
    content: "→";
    display: inline;
  }
`;
