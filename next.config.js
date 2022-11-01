/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoia29yZWFzbGVkbyIsImEiOiJjbDl4ZjVhN3cwODN5M3hwYzJxZG9jZm1sIn0.XaeNdmWXcnPrO-chFKu5Aw",
  },
};

module.exports = nextConfig;
