import { type RouteRecordRaw, createRouter, createWebHistory, type Router } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "main >> portal",
		component: () => import("@/views/PortalView.vue"),
	},
	{
		path: "/home",
		name: "main >> acasa",
		component: () => import("@/views/main/HomeView.vue"),
	},
	{
		path: "/ambientale",
		name: "main >> lumini ambientale",
		component: () => import("@/views/main/AmbientalView.vue"),
	},
	{
		path: "/starlight",
		name: "main >> plafon instelat",
		component: () => import("@/views/main/StarlightView.vue"),
	},
	{
		path: "/about",
		name: "main >> despre noi",
		component: () => import("@/views/main/AboutView.vue"),
	},
	{
		path: "/contact",
		name: "main >> contact",
		component: () => import("@/views/main/ContactView.vue"),
	},
	{
		path: "/portfolio",
		name: "main >> portofoliu",
		component: () => import("@/views/main/PortfolioView.vue"),
	},
];

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
