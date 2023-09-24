<style>
	a { text-decoration: none!important; }

	header {
	  background-color: var(--color-bg-2);
	  color: var(--color-theme-1);
	  transition: background-color 0.3s ease-in-out;
	  position: relative; 
	}
  
	header:hover {
	  background-color: var(--color-bg-0);
	}
  
	.nav-link:hover {
	  border-bottom: 2px solid var(--color-theme-1);
	}

	/* 追加：スマホ用のナビゲーションを画面の上に固定 */
	.fixed-nav {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	}
</style>

<script>
	import { page } from '$app/stores';
	let showMenu = false;
	
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<!-- ヘッダー部分 -->
<header class="shadow-md">
	<div class="w-full fixed flex justify-between items-center p-4 bg-slate-100">
	
	  <!-- プロフィール写真、名前、一言自己紹介 -->
	  <div class="flex items-center">
		<a href="/" class="flex items-center">
		  <div>
			<span class="text-lg font-semibold">ちょっとエンジニア 開発サイト</span><br/>
			<span class="text-sm">〜色々やりすぎて錯綜中〜</span>
		  </div>
		</a>
	  </div>
	  
	  <!-- ハンバーガーメニュー（スマホ用） -->
	  <div class="md:hidden">
		<button on:click={toggleMenu} class="flex items-center p-2 rounded-md">
			<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	  </div>

	  <!-- ナビゲーション（PC用） -->
	  <nav class="hidden md:flex items-center">
		<ul class="flex items-center space-x-4">
		  <!-- ナビゲーションの項目 -->
		  {#each ['/','/about','/skills','/projects','/blog','/resume','/contact'] as path, index}
			<li class={$page.url.pathname === path ? 'border-white nav-link' : 'nav-link'}>
				<a href={path} class="px-2 py-1">{['ホーム', '自己紹介', 'スキルセット', 'プロジェクト', 'ブログ', '経歴', 'お問い合わせ'][index]}</a>
			</li>
		  {/each}
		</ul>
	  </nav>
	  
	  <!-- ナビゲーション（スマホ用、ドロップダウン） -->
	  {#if showMenu}
	  <nav class="md:hidden w-full absolute top-full left-0 z-20">
		<div class="bg-white shadow-md">
		  <ul>
			<!-- ナビゲーションの項目 -->
			{#each ['/','/about','/skills','/projects','/blog','/resume','/contact'] as path, index}
			  <li class={$page.url.pathname === path ? 'border-white nav-link' : 'nav-link z-100'}>
				<a href={path} class="block px-4 py-2">{['ホーム', '自己紹介', 'スキルセット', 'プロジェクト', 'ブログ', '経歴', 'お問い合わせ'][index]}</a>
			  </li>
			{/each}
		  </ul>
		</div>
	  </nav>
	  {/if}
	</div>
</header>
