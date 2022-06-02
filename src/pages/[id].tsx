import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Card } from "../components/Card";
import { CopyRight } from "../components/CopyRight";
import { Layout } from "../components/Layout";
import { Title } from "../components/Title";

export default function BlogPage() {
  const router = useRouter();
  const { id: queryId } = router.query;
  const singleId = Array.isArray(queryId) ? queryId.at(0) : queryId;

  const { data, loading } = useQuery<
    { blogPost: BlogPostItem },
    { id: string }
  >(BLOG_POST_QUERY, {
    variables: { id: singleId ?? "" },
    skip: singleId === undefined,
  });

  return (
    <Layout.Trunk>
      <Layout.Content>
        <Card loading={loading} style={{ padding: "var(--tile)" }}>
          <Title size="large">{data?.blogPost.title}</Title>
          <p>{data?.blogPost.body}</p>
        </Card>
      </Layout.Content>
      <CopyRight />
    </Layout.Trunk>
  );
}

export type BlogPostItem = {
  sys: { id: string };
  title: string;
  preface: string;
  body: string;
};

const BLOG_POST_QUERY = gql`
  query ($id: String!) {
    blogPost(id: $id) {
      sys {
        id
      }
      title
      preface
      body
    }
  }
`;
