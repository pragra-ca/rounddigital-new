import { Email } from "@/components/blog/Email";
import LatestArticles from "@/components/blog/LatestArticles";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import { blogSummaries, toBlogListItem } from "@/data/blogSummaries";

export async function getStaticProps() {
  return {
    props: {
      blogPosts: blogSummaries.map(toBlogListItem),
    },
  };
}

const BlogIndex = ({ blogPosts }) => {
  return (
    <Layout>
      <Seo
        title="Insights & Trends in Tech, Design & Marketing | RoundDigital Blog"
        description="Stay ahead with expert insights from RoundDigital. Explore blogs on tech trends, web and mobile development, digital marketing, branding strategies, MVP building, and more."
        keywords="RoundDigital blog, tech trends, web development blogs, mobile app development, digital marketing tips, branding strategies, startup growth, MVP development, UI/UX design, Canada tech"
      />
      <main className="py-8 md:py-10 lg:py-12">
        <LatestArticles blogPosts={blogPosts} />
      </main>
      <Email />
    </Layout>
  );
};

export default BlogIndex;
