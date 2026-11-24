/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/thought-leadership/product-innovations",
        destination: "/thought-leadership/product-innovation",
        permanent: true,
      },
      {
        source: "/thought-leadership/product-innovations/:path*",
        destination: "/thought-leadership/product-innovation/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
