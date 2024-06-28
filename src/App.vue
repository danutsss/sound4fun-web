<template>
	<header v-if="currentRouteName != 'main >> portal'">
		<AppTopbar />
		<AppNavbar />
	</header>

	<main>
		<RouterView />
	</main>

	<footer>
		<AppFooter />
	</footer>
</template>

<script setup lang="ts">
/* import Vue dependencies */
import { computed, ref, type Ref } from "vue";
import { useRoute, type Router } from "vue-router";

/* import layout components */
import AppTopbar from "@/layout/AppTopbar.vue";
import AppNavbar from "@/layout/AppNavbar.vue";
import AppFooter from "@/layout/AppFooter.vue";

const route: Router = useRoute();
const currentRouteName = computed(() => route.name);
</script>

<style scoped></style>
