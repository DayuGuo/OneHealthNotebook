// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "One Health  Notebook";
export const SITE_DESCRIPTION =
  "大家好，这是一个分享跨学科研究资料，培养批判性、系统性思考能力的社区。";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Captain Awesome";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
