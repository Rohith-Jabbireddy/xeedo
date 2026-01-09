/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export now that React Router is removed
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
