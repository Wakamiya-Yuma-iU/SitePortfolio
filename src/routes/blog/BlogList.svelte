<script lang="ts">
	import { flip } from 'svelte/animate';
	export let filteredPosts: any[] = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each filteredPosts.length ? filteredPosts : ['no-posts'] as post, index (post.title || index)}
		<div class="blog-post relative" animate:flip={{duration: 500}}>
			{#if post !== 'no-posts'}
				<a href={`/${post.id}`} class="block">
					<img src={post.eyecatch ?? 'src/lib/images/image1.jpeg'} alt={post.title} class="w-full h-48 object-cover">
					<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
						{post.title}
					</div>
				</a>
			{:else}
            <div class="bg-gray-300 w-full h-48 object-cover flex items-center justify-center">
                <p class="text-center text-base">記事が見つかりませんでした</p>
            </div>
			{/if}
		</div>
	{/each}
</div>
