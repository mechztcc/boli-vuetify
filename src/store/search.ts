// Utilities
import { defineStore } from "pinia";
import { IFilterState } from "../types/filer-state.interface";

export const useSearchStore = defineStore("search", {
  state: () =>
    ({
      city: "",
      credit: 0,
      day: "",
      district: "",
      level: [],
      local: false,
      modality: [],
      online: false,
      teacherName: "",
      weekDay: [],
    } as IFilterState),
  actions: {
    addNewState(state: IFilterState) {
      this.$state = state;
    },
  },
});
