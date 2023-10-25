<script setup lang="ts">
import { Icon } from '$components/icon';
import { NavBar } from '$modules/nav-bar';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<div class="wrapper">
			Hello
			<NavBar />
			<Icon
				name="hamburger"
				class="w-5 fill-red-600" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
