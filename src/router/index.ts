import { type RouteRecordRaw, createRouter, createWebHistory, type Router } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "main >> portal",
		component: () => import("@/views/PortalView.vue"),

		meta: {
			title: "Portal @ SOUNDFORFUN",
		},
	},
	{
		path: "/home",
		name: "main >> acasa",
		component: () => import("@/views/main/HomeView.vue"),

		meta: {
			title: "Prima pagina @ SOUNDFORFUN",
			navbarTitle: "Acasa",
		},
	},
	{
		path: "/ambientale",
		name: "main >> lumini ambientale",
		component: () => import("@/views/main/AmbientalView.vue"),

		meta: {
			title: "Lumini ambientale @ SOUNDFORFUN",
			navbarTitle: "Lumini ambientale",
		},
	},
	{
		path: "/starlight",
		name: "main >> plafon instelat",
		component: () => import("@/views/main/StarlightView.vue"),

		meta: {
			title: "Plafon starlight @ SOUNDFORFUN",
			navbarTitle: "Plafon starlight",
		},
	},
	{
		path: "/about",
		name: "main >> despre noi",
		component: () => import("@/views/main/AboutView.vue"),

		meta: {
			title: "Despre noi @ SOUNDFORFUN",
			navbarTitle: "Despre",
		},
	},
	{
		path: "/contact",
		name: "main >> contact",
		component: () => import("@/views/main/ContactView.vue"),

		meta: {
			title: "Contacteaza-ne @ SOUNDFORFUN",
			navbarTitle: "Contact",
		},
	},
	{
		path: "/portfolio",
		name: "main >> portofoliu",
		component: () => import("@/views/main/PortfolioView.vue"),

		meta: {
			title: "Portofoliu @ SOUNDFORFUN",
			navbarTitle: "Portofoliu",
		},
	},
];

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
