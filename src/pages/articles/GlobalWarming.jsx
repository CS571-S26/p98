import ArticleLayout from "../../components/ArticleLayout";
import illustration from "../../assets/global-warming-illustration.png";

function GlobalWarmingPage() {
  return (
    <ArticleLayout
      title="All About Global Warming"
      author="Max Maeder"
      imageSrc={illustration}
    >
      <p>
        Global warming refers to the long-term increase in Earth's average surface temperature,
        primarily driven by human activities. The burning of fossil fuels such as coal, oil, and
        natural gas releases greenhouse gases like carbon dioxide and methane into the atmosphere.
        These gases trap heat from the sun, creating a “greenhouse effect” that prevents heat from
        escaping back into space. While this process is natural and essential for life on Earth,
        human actions have intensified it, leading to a steady rise in global temperatures over the past century.
        <br /><br />
        The impacts of global warming are wide-ranging and increasingly visible. Rising temperatures contribute
        to melting polar ice caps and glaciers, which in turn cause sea levels to rise and threaten coastal communities.
        Extreme weather events such as hurricanes, heatwaves, droughts, and heavy rainfall are becoming more frequent
        and intense. Ecosystems are also under stress, with many plant and animal species struggling to adapt to changing
        conditions. Coral reefs, for example, are experiencing widespread bleaching due to warmer ocean temperatures, while
        shifts in climate zones are disrupting habitats and migration patterns.
        <br /><br />
        Addressing global warming requires coordinated efforts on both individual and global scales. Governments and organizations
        are working to reduce greenhouse gas emissions by transitioning to renewable energy sources like solar and wind power,
        improving energy efficiency, and promoting sustainable practices. Individuals can also contribute by reducing energy
        consumption, using public transportation, and supporting environmentally responsible policies. While the challenge is
        significant, continued innovation, awareness, and cooperation offer hope for mitigating the effects of global warming and
        protecting the planet for future generations.
      </p>
    </ArticleLayout>
  );
}

export default GlobalWarmingPage;