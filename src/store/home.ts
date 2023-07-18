import { ILesson } from "@/types/lesson.interface";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    data: {} as ILesson[],
  }),
  actions: {
    addNewState(state: ILesson[]) {
      this.$state.data = state;
    },
  },
});
