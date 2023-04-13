import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"

import IProject from "@/interfaces/IProject"

interface State {
  projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: "TypeScript",
      },
      {
        id: new Date().toISOString(),
        name: "Vue",
      },
      {
        id: new Date().toISOString(),
        name: "Vuex",
      },
    ],
  },
})
