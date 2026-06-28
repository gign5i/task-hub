import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // experimental: {
  //   viewTransition: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
