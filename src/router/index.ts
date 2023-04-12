import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import TasksComponent from "../views/Tasks.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: TasksComponent,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
