const path = require('path')
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
})
/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	reactStrictMode: true,
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ['en', 'zh'],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: 'en',
		localeDetection: false,
		// This is a list of locale domains and the default locale they
		// should handle (these are only required when setting up domain routing)
		// Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
		// domains: [
		//   {
		//     domain: 'example.com',
		//     defaultLocale: 'en-US',
		//   },
		//   {
		//     domain: 'example.nl',
		//     defaultLocale: 'nl-NL',
		//   },
		//   {
		//     domain: 'example.fr',
		//     defaultLocale: 'fr',
		//     // an optional http field can also be used to test
		//     // locale domains locally with http instead of https
		//     http: true,
		//   },
		// ],
	},
	// webpack: (config, { isServer }) => {
	//   // Fixes npm packages that depend on `fs` module
	//   if (!isServer) {
	//     config.node = {
	//       fs: 'empty'
	//     }
	//   }

	//   return config
	// },
	// webpack5: false,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false
			config.resolve.alias['@'] = path.join(__dirname, '.')
			config.module.rules.push({
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '/_next/static/images/',
							outputPath: 'static/images/',
							name: '[name].[ext]',
						},
					},
				],
			})
		}
		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
}

module.exports = withMDX(nextConfig)
