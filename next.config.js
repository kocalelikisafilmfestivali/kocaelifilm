/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "kocaelikffcms.herokuapp.com",
      "141.136.44.174",
      "panel.kocaelifilmfestivali.com",
    ],
  },
  env: {
    NEXT_APP_API_URL: "https://panel.kocaelifilmfestivali.com/api/graphql",
    NEXT_APP_API_IMAGE_URL: "https://panel.kocaelifilmfestivali.com",
  },
};

module.exports = nextConfig;
