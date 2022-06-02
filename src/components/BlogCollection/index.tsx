import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { BlogPostItem } from "../../pages/[id]";
import { CardLink } from "../Card";
import PageError from "../PageError";
import { Title } from "../Title";

type BlogPostCollection = {
  blogPostCollection: {
    items: ReadonlyArray<BlogPostItem>;
  };
};

// https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77/explore?access_token=AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I

export const BlogCollection = () => {
  const { loading, data, error } = useQuery<BlogPostCollection>(
    BLOG_POST_COLLECTION_QUERY, {fetchPolicy: "no-cache"}
  );

  const skeleton = Array<undefined>(10).fill(undefined);
  const itemsOrSkeleton = loading ? skeleton : data?.blogPostCollection.items;

  return (
    <Container>
      {error && <PageError error={error}/>}
      {itemsOrSkeleton?.map((item, i) => {
        const isWide = i % 5 === 0;
        const key = i;
        const width = `var(--${isWide ? "wide" : "slim"})`;
        return (
          <div style={{ width }}>
            <CardLink
              key={key}
              loading={loading}
              linkTo={item?.sys.id || "#"}
              style={{
                height: "calc(var(--tile) * 21)",
                margin: "var(--half-tile)",
              }}
            >
              <>
                <Title size="medium">{item?.title}</Title>
                {item?.body}
              </>
            </CardLink>
          </div>
        );
      })}
    </Container>
  );
};

const BLOG_POST_COLLECTION_QUERY = gql`
  query {
    blogPostCollection(limit: 10) {
      items {
        sys {
          id
        }
        title
        preface
        body
      }
    }
  }
`;

const Container = styled.div`
  --slim: 33.33%;
  --wide: 66.66%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 760px) {
    --slim: 50%;
    --wide: 50%;
  }
  @media (max-width: 480px) {
    --slim: 100%;
    --wide: 100%;
  }
`;
