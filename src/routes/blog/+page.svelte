<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';
	import BlogList from './BlogList.svelte'; 
	import type { BlogResponse, Blog as Content } from "../../lib/microcms";
	export let data: BlogResponse;

	interface BlogPost {
		title: string;
		content: string;
		eyecatch?: string; 
		id: string;
	}

	const blogPosts = writable<BlogPost[]>([]);
	const searchQuery = writable<string>("");

	onMount(() => {
		const cmsPosts: BlogPost[] = data.contents.map((content: Content) => ({
			title: content.title,
			content: content.content,
			eyecatch: content.eyecatch?.url, 
			id: content.id
		}));

		blogPosts.set(cmsPosts);
	});

	const filteredPosts = derived(
		[blogPosts, searchQuery],
		([$blogPosts, $searchQuery]) => {
			return $searchQuery === "" 
				? $blogPosts 
				: $blogPosts.filter(post => post.title.toLowerCase().includes($searchQuery.toLowerCase()));
		}
	);
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl mb-4">ブログ一覧</h1>
	<div class="search-bar mb-4">
		<input type="text" placeholder="検索..." bind:value={$searchQuery} class="p-2 border rounded">
	</div>
	<BlogList filteredPosts={$filteredPosts} />
</div>
