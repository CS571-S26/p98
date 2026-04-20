import ArticleLayout from "../../components/ArticleLayout";
import illustration from "../../assets/carbon-footprint-illustration.png";

function CarbonFootprintPage() {
  return (
    <ArticleLayout
      title="Your Carbon Footprint"
      author="Max Maeder"
      imageSrc={illustration}
    >
      <p>
        A carbon footprint refers to the total amount of greenhouse gases—primarily carbon
        dioxide—released into the atmosphere as a result of human activities. This includes
        everyday actions like driving a car, using electricity, heating homes, and even the production
        and transportation of the food we eat. Every product and service has an associated carbon cost,
        \from manufacturing to disposal. By measuring a carbon footprint, individuals and organizations
        can better understand how their lifestyle and choices contribute to climate change.
        <br /><br />
        The size of a person's carbon footprint can vary widely depending on factors such as location,
        transportation habits, diet, and energy use. For example, frequent air travel and reliance on
        fossil fuel-powered vehicles significantly increase emissions, while using renewable energy or
        public transportation can reduce them. Diet also plays a role—foods like beef and dairy tend to
        have higher carbon impacts compared to plant-based options. Even small daily decisions, such as
        turning off unused lights or reducing waste, can add up over time and influence one's overall
        environmental impact.
        <br /><br />
        Reducing your carbon footprint involves making more sustainable choices in everyday life. This
        can include conserving energy at home, switching to energy-efficient appliances, reducing
        single-use plastics, and supporting companies that prioritize sustainability. Many people also
        offset their emissions by investing in environmental projects like reforestation or renewable
        energy initiatives. While no single action can eliminate a carbon footprint entirely, consistent
        efforts across many areas can significantly lower it and contribute to the broader fight against
        climate change.
      </p>
    </ArticleLayout>
  );
}

export default CarbonFootprintPage;