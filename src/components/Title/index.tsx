import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

type TitleProps = {
  size?: "large" | "medium" | "small";
  style?: CSSProperties;
  children?: ReactNode;
};

type Size = NonNullable<TitleProps["size"]>;

const defaultSize: Size = "medium";

const TitleElement = styled.h1<{ size: TitleProps["size"] }>`
  color: var(--heading);
  margin: 0;
  padding-bottom: var(--half-tile);
  --tile-count: ${({ size }) => sizeToTileCount(size ?? defaultSize)};
  --tile-factor: ${({ size }) => sizeToTileFactor(size ?? defaultSize)};
`;

export const Title = (props: TitleProps) => {
  const { size = defaultSize, style, children } = props;
  return (
    <TitleElement style={style} size={size} as={getElement(size)}>
      {children}
    </TitleElement>
  );
};

const getElement = (size: Size) => {
  switch (size) {
    case "large":
      return "h1";
    case "medium":
      return "h2";
    case "small":
      return "h3";
  }
};

const sizeToTileCount = (s: Size) => {
  return String(["small", "medium", "large"].indexOf(s) + 1);
};

const sizeToTileFactor = (s: Size) => {
  if (s === "small") {
    return "1";
  }
  return "0.75";
};
