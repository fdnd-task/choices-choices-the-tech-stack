export default function (eleventyConfig) {
  // Alles uit public/ komt in de root van de site (zoals bij Vite)
  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Componenten voegen hun eigen CSS/JS toe, de layout zet het in de pagina
  eleventyConfig.addBundle("css");
  eleventyConfig.addBundle("js");
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
};
