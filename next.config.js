/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['pact.canto.com'],
	},
	ignoreBuildErros: true,
};

module.exports = nextConfig;
