<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>




<style>
	@import '@fontsource/fira-mono';

:root {
	--font-body: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	--font-mono: 'Fira Mono', monospace;
	--color-bg-0: rgb(202, 216, 228);
	--color-bg-1: hsl(209, 36%, 86%);
	--color-bg-2: hsl(224, 44%, 95%);
	--color-theme-1: #ff3e00;
	--color-theme-2: #4075a6;
	--color-text: rgba(0, 0, 0, 0.7);
	--column-width: 42rem;
	--column-margin-top: 4rem;
	font-family: var(--font-body);
	color: var(--color-text);
}

body {
	min-height: 100vh;
	margin: 0;
	background-attachment: fixed;
	background-color: var(--color-bg-1);
	background-size: 100vw 100vh;
	background-image: radial-gradient(
			50% 50% at 50% 50%,
			rgba(255, 255, 255, 0.75) 0%,
			rgba(255, 255, 255, 0) 100%
		),
		linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
}

h1,
h2,
p {
	font-weight: 400;
}

p {
	line-height: 1.5;
}

a {
	color: var(--color-theme-1);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

h1 {
	font-size: 2rem;
	text-align: center;
}

h2 {
	font-size: 1rem;
}

pre {
	font-size: 16px;
	font-family: var(--font-mono);
	background-color: rgba(255, 255, 255, 0.45);
	border-radius: 3px;
	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
	padding: 0.5em;
	overflow-x: auto;
	color: var(--color-text);
}

.text-column {
	display: flex;
	max-width: 48rem;
	flex: 0.6;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
}

input,
button {
	font-size: inherit;
	font-family: inherit;
}

button:focus:not(:focus-visible) {
	outline: none;
}

@media (min-width: 720px) {
	h1 {
		font-size: 2.4rem;
	}
}

.visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: auto;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;
}


</style>