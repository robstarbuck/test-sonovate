import { gql, useQuery } from "@apollo/client";
import { BlogCollection } from "../components/BlogCollection";
import { CopyRight } from "../components/CopyRight";
import { Layout } from "../components/Layout";
import { SectionTitle } from "../components/SectionTitle";
import { BlogPostItem } from "./[id]";

type BlogPostCollection = {
  blogPostCollection: {
    items: ReadonlyArray<BlogPostItem>;
  };
};

export default function BlogListingPage() {
  const { loading, data, error } = useQuery<BlogPostCollection>(
    BLOG_POST_COLLECTION_QUERY
  );
  return (
    <Layout.Trunk>
      <SectionTitle>From the Blog</SectionTitle>
      <Layout.Content>
        <BlogCollection
          loading={loading}
          items={data?.blogPostCollection.items}
          error={error}
        />
      </Layout.Content>
      <CopyRight />
    </Layout.Trunk>
  );
}

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
