/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: {
      compilationMode: 'infer'
    }
  }
};

export default nextConfig;
