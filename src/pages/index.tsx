import { BlogCollection } from "../components/BlogCollection";
import { CopyRight } from "../components/CopyRight";
import { Layout } from "../components/Layout";
import { SectionTitle } from "../components/SectionTitle";

export default function BlogListingPage() {
  return (
    <Layout.Trunk>
      <SectionTitle>
        From the Blog
      </SectionTitle>
      <Layout.Content>
        <BlogCollection />
      </Layout.Content>
      <CopyRight />
    </Layout.Trunk>
  );
}



