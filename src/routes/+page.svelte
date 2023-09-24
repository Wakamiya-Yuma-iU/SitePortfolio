<script lang="ts">
	import { onMount } from "svelte";
	
	const sections: string[] = [
	  "経歴", "実績", "スキル", "趣味・興味", "連絡先", "ブログ・著作"
	];
	
	type Skill = {
	  name: string;
	  icon: string;
	};
	
	const skills: Skill[] = [
	    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
	  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
	  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
	  { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
	  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
	  { name: "Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
	  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
	  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
	];
	
	const smoothScroll = (sectionId: string): void => {
	  const targetElement = document.getElementById(sectionId);
	  if (targetElement) {
		targetElement.scrollIntoView({
		  behavior: "smooth"
		});
	  }
	};
  </script>
  
  <main class="container mx-auto p-4">

	<section class="my-4">
	  <h1 class="text-3xl font-bold">ちょっとエンジニアの開発サイト</h1>
	  <h2 class="text-xl mt-2" id="自己紹介文">WAKAMIYA YUMA</h2>
	  <p class="text-base mt-1">iU(情報経営イノベーション専門職大学)でシコシコ開発してます</p>
	</section>
  
	<!-- 各セクションは以下の形で続きます -->
	<section class="my-4">
	  <h2 class="text-xl mt-2" id="経歴">経歴</h2>
	  <ul class="list-disc list-inside mt-2">
		<li>2023年 - iU入学</li>
		<li>2023年 - ChatGPTマーケティングプロジェクト</li>
	  </ul>
	</section>
  
	<!-- スキルセクション -->
	<section class="my-4">
	  <h2 class="text-xl mt-2" id="スキル">スキル（使えるとは言っていない）</h2>
	  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
		{#each skills as skill}
		  <div class="flex items-center ">
			<img class="h-8 w-8 " src={skill.icon} alt={skill.name} />
			<span class="ml-2">{skill.name}</span>
		  </div>
		{/each}
	  </div>
	</section>
  
	<section class="my-4">
		<h2 class="text-xl mt-2" id="趣味・興味">趣味・興味</h2>
		<ul>
		  <li>プログラミング</li>
		  <li>旅行</li>
		  <li>読書</li>
		</ul>
	  </section>
  
  </main>
  