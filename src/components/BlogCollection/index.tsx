import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { BlogPostCard } from "../BlogPost";

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

const Container = styled.div`
  --width: 33.33%;
  --width-wide: 66.66%;
  display: flex;
  flex-wrap: wrap;
`;

export const BlogCollection = () => {
  const { loading, data, error } = useQuery<BlogPostCollection>(
    BLOG_POST_COLLECTION_QUERY
  );

  if (loading) {
    return (
      <div>
        <BlogPostCard />
      </div>
    );
  }

  return (
    <Container>
      {data.blogPostCollection.items.map((item, i) => {
        const isFirst = i === 0;
        const width = `var(--${isFirst ? "width-wide" : "width"})`;
        return (
          <div style={{ width }}>
            <BlogPostCard
              linkTo={item.sys.id}
              style={{ margin: "calc(var(--tile) / 2)" }}
            >
              <>
                <h1>{item.title}</h1>
                {item.body}
              </>
            </BlogPostCard>
          </div>
        );
      })}
    </Container>
  );
};
