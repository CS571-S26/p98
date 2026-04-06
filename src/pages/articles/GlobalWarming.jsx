import ArticleLayout from "../../components/ArticleLayout";
import illustration from "../../assets/global-warming-illustration.png";

function GlobalWarmingPage() {
  return (
    <ArticleLayout
      title="All About Global Warming"
      author="Max Maeder"
      imageSrc={illustration}
    >
      foo bar
    </ArticleLayout>
  );
}

export default GlobalWarmingPage;