/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "kocaelikffcms.herokuapp.com"],
  },
  env: {
    NEXT_APP_API_URL: "https://kocaelikffcms.herokuapp.com/api/graphql",
    NEXT_APP_API_IMAGE_URL: "https://kocaelikffcms.herokuapp.com",
  },
};

module.exports = nextConfig;
