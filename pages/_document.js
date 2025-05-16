import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link rel="icon" href="/icons/favicon.png" />
				<title>
					My First Layer2 - An education project for newbies to learn
					and interact with Layer2
				</title>
				<meta
					name="description"
					content="MyFirstLayer2 is an education project for newbies to learn and interact with Layer2. As you can see from the name, our users are beginners curious about the knowledge and projects on Layer2. We will use funny and easy-to-understand diagrams and animation to explain Layer2 to newbies. "
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/icons/favicon.png" />
				<meta property="og:title" content={'MyFirstLayer2'} />
				<meta
					property="og:description"
					content={
						'MyFirstLayer2 is an education project for newbies to learn and interact with Layer2. As you can see from the name, our users are beginners curious about the knowledge and projects on Layer2. We will use funny and easy-to-understand diagrams and animation to explain Layer2 to newbies. '
					}
				/>
				<meta property="og:url" content="https://lxdao.io/" />
			</Head>
			<base target="_blank"></base>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
