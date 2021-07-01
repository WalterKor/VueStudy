import { createWebHistory, createRouter } from "vue-router"; //라이브러리를 임포트하면
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Digimon from "./components/Digimon.vue";
import Detail from "./components/Detail.vue";
import unknown from "./components/unknown.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
    // 위에다 적을 수록 우선순위가 정해진다
    { path: "/list", component: List },
    { path: "/digimon", component: Digimon },
    { path: "/home", component: Home },
    { path: "/", component: Detail },
    {
        path: "/detail/:id",
        component: Detail,
        children: {
            children: [
                {
                    path: "author",
                    component: Author,
                },
                {
                    path: "scomment",
                    component: Comment,
                },
            ],
        },
    },
    { path: "/:anything(.*)", component: unknown },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
