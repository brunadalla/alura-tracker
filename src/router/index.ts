import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import TasksComponent from "../views/Tasks.vue"
import ProjectsComponent from "../views/Projects.vue"
import FormView from "../views/Projects/Form.vue"
import ListView from "../views/Projects/List.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: TasksComponent,
  },
  {
    path: '/projects',
    component: ProjectsComponent,
    children: [
      {
        path: "",
        name: "Projects",
        component: ListView,
      },
      {
        path: "new",
        name: "New project",
        component: FormView,
      },
      {
        path: ":id",
        name: "Edit project",
        component: FormView,
        props: true
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
