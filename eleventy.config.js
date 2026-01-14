export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon");
  eleventyConfig.addPassthroughCopy("src/content");

   eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    const d = new Date(dateObj);
    return d.toISOString().split("T")[0];
  });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
