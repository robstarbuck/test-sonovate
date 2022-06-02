import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { BlogCollection } from "../components/BlogCollection";
import { Title } from "../components/Title";

export default function BlogListingPage() {
  return (
    <Trunk>
      <PageTitle>
        From the Blog
      </PageTitle>
      <Content>
        <BlogCollection />
        <footer>robstarbuck.uk - Sonova Code Test</footer>
      </Content>
    </Trunk>
  );
}

const Trunk = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--tile);
`;

const Content = styled.section`
  max-width: 1020px;
  margin: 0 auto;
`;

type PageTitleProps = {
  children?: ReactNode;
};

function PageTitle(props: PageTitleProps) {
  const { children } = props;
  return (
    <TitleSeparator style={titleStyle}>
      <Title size="small" style={{padding: 0}}>
        {children}
      </Title>
    </TitleSeparator>
  );
}

function TitleSeparator(props: { children: ReactNode, style: CSSProperties }) {
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
  margin-top: calc(var(--tile) / 2);
  margin-bottom: calc(var(--tile) / 2);
  padding: 0;
`;

const TitleSeparatorHeader = styled.header`
  display: flex;
  gap: calc(var(--tile) / 2);
  padding-bottom: calc(var(--tile) / 2);
  @media (max-width: 1020px) {
    padding-bottom: unset;
    gap: unset;
    flex-direction: column;
  }
`;

const titleStyle = {
  ["--pd"]: `calc(var(--tile) / 2)`,
  paddingLeft: "var(--pd)",
  paddingRight: "var(--pd)",
};
