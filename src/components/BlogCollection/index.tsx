import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { Card } from "../Card";
import { Title } from "../Title";

type BlogPostItem = {
  sys: { id: string };
  title: string;
  preface: string;
  body: string;
};

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
      {itemsOrSkeleton?.map((item, i) => {
        const isWide = i % 5 === 0;
        const key = i;
        const width = `var(--${isWide ? "wide" : "slim"})`;
        return (
          <div style={{ width }}>
            <Card
              key={key}
              loading={loading}
              linkTo={item?.sys.id}
              style={{
                margin: "calc(var(--tile) / 2)",
                height: "400px",
              }}
            >
              <>
                <Title size="medium">{item?.title}</Title>
                {item?.body}
              </>
            </Card>
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