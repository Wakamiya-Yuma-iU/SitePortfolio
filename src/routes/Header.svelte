<style>

	a { text-decoration: none!important; }

	header {
	  background-color: var(--color-bg-2);
	  color: var(--color-theme-1);
	  transition: background-color 0.3s ease-in-out;
	}
  
	header:hover {
	  background-color: var(--color-bg-0);
	}
  
	.nav-link:hover {
	  border-bottom: 2px solid var(--color-theme-1);
	}
  </style>
  
  <script>
	import { page } from '$app/stores';
	import logo from '$lib/images/your-logo.svg';
  </script>
  
  <!-- ヘッダー部分 -->
  <header class="shadow-md">
	<div class="container mx-auto flex justify-between items-center p-4">
	
	  <!-- プロフィール写真、名前、一言自己紹介 -->
	  <div class="flex items-center">
		<a href="/" class="flex items-center">
		  <img src={logo} alt="Your Name" class="w-8 h-8 mr-2" />
		  <div>
			<span class="text-lg font-semibold">ちょっとエンジニア 開発サイト</span><br/>
			<span class="text-sm">〜色々やりすぎて錯綜中〜</span>
		  </div>
		</a>
	  </div>
	
	  <!-- ナビゲーション -->
	  <nav class="flex items-center">
		<ul class="flex items-center space-x-4">
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/" class="px-2 py-1">ホーム</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/about" class="px-2 py-1">自己紹介</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/skills" class="px-2 py-1">スキルセット</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/projects" class="px-2 py-1">プロジェクト</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/blog" class="px-2 py-1">ブログ</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/resume" class="px-2 py-1">経歴</a>
		  </li>
		  <li class={$page.url.pathname === '/' ? ' border-white nav-link' : 'nav-link'}>
			<a href="/contact" class="px-2 py-1">お問い合わせ</a>
		  </li>
		</ul>
	  </nav>
	</div>
  </header>
  