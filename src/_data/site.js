const { moduleHasSideEffects } = require("webpack/lib/optimize/SideEffectsFlagPlugin");

const siteURL = (process.env.CONTEXT === "production" 
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL) || 'http://localhost:3000/';

const siteData = {
  url: siteURL
}

module.exports = siteData