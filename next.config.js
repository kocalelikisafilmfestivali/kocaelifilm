/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "kocaelikffcms.herokuapp.com"],
  },
  env: {
    NEXT_APP_API_URL: "http://141.136.44.174:3000/api/graphql",
    NEXT_APP_API_IMAGE_URL: "http://141.136.44.174:3000",
  },
};

module.exports = nextConfig;
