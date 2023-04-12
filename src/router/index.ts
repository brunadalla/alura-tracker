import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import TasksComponent from "../views/Tasks.vue"
import ProjectsComponent from "../views/Projects.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: TasksComponent,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsComponent,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
