import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['../app/generated/prisma/client', 'pg'],
};

export default nextConfig;