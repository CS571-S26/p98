import ArticleLayout from "../../components/ArticleLayout";
import illustration from "../../assets/carbon-footprint-illustration.png";

function CarbonFootprintPage() {
  return (
    <ArticleLayout
      title="Your Carbon Footprint"
      author="Max Maeder"
      imageSrc={illustration}
    >
      foo bar
    </ArticleLayout>
  );
}

export default CarbonFootprintPage;