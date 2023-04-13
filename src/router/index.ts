import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import TasksComponent from "../views/Tasks.vue"
import ProjectsComponent from "../views/Projects.vue"
import FormView from "../views/Projects/Form.vue"

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
  {
    path: "/projects/new",
    name: "New project",
    component: FormView,
  },
  {
    path: "/projects/:id",
    name: "Edit project",
    component: FormView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
