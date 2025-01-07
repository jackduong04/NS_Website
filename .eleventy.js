module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/Resources");
    eleventyConfig.addPassthroughCopy("./src/script.js");
    eleventyConfig.addPassthroughCopy("./src/projects_script.js");
    eleventyConfig.addPassthroughCopy("./src/job_profile.js");
    eleventyConfig.addPassthroughCopy("./src/services_script.js");
    eleventyConfig.addPassthroughCopy("./src/admin");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}