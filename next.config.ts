import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{hostname:"i.discogs.com"},{hostname:"unsplash.com"},{hostname:"images.unsplash.com"},{hostname:"images.metmuseum.org"},{hostname:"drive.google.com"}]
  },
};

export default nextConfig;
