<script>
	import '../app.postcss';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header/>
	<div class="pt-12"/>
	<main>
		<slot />
	</main>

	<footer class="footer">
		<div class="container mx-auto py-6 px-4">
			<div class="flex justify-between items-center">
				<div>
					<p>© 2023 ちょっとエンジニア 開発サイト. All rights reserved.</p>
				</div>
				<div class="flex space-x-4">
					<a href="/terms" class="text-sm">利用規約</a>
					<a href="/privacy" class="text-sm">プライバシーポリシー</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.footer {
		background-color: var(--color-bg-2);
		color: var(--color-theme-1);
	}

	@media (min-width: 480px) {
		.footer {
			padding: 12px 0;
		}
	}
</style>
