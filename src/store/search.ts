// Utilities
import { defineStore } from "pinia";
import { IFilterState } from "../types/filer-state.interface";

export const useSearchStore = defineStore("search", {
  state: () =>
    ({
      city: "",
      credit: 0,
      day: "0000-00-00",
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
