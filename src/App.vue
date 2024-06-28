<template>
	<AppTopbar v-if="currentRouteName != 'main >> portal'" />
	<RouterView />
</template>

<script setup lang="ts">
/* import Vue dependencies */
import { computed } from "vue";
import { useRoute, type Router } from "vue-router";

/* import layout components */
import AppTopbar from "@/layout/AppTopbar.vue";

const route: Router = useRoute();
const currentRouteName = computed(() => route.name);
</script>

<style scoped></style>
