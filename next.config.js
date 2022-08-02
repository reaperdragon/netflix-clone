/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
};
