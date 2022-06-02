import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { Title } from "../Title";

type PageTitleProps = {
  children?: ReactNode;
};

export function SectionTitle(props: PageTitleProps) {
  const { children } = props;
  return (
    <TitleSeparator style={titleStyle}>
      <Title size="small" style={{ padding: 0 }}>
        {children}
      </Title>
    </TitleSeparator>
  );
}

function TitleSeparator(props: { children: ReactNode; style: CSSProperties }) {
  const { children, style } = props;
  return (
    <TitleSeparatorHeader style={style}>
      {children}
      <Underline />
    </TitleSeparatorHeader>
  );
}

const Underline = styled.hr`
  border: unset;
  border-bottom: 1px solid var(--accent);
  flex: 1;
  height: 1px;
  width: 100%;
  margin-top: var(--half-tile);
  margin-bottom: var(--half-tile);
  padding: 0;
`;

const TitleSeparatorHeader = styled.header`
  display: flex;
  gap: var(--half-tile);
  padding-bottom: var(--half-tile);
  @media (max-width: 1020px) {
    padding-bottom: unset;
    gap: unset;
    flex-direction: column;
  }
`;

const titleStyle = {
  ["--pd"]: `var(--half-tile)`,
  paddingLeft: "var(--pd)",
  paddingRight: "var(--pd)",
};
