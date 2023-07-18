import { IFilterState } from "@/types/filer-state.interface";
import { ILesson } from "@/types/lesson.interface";
import { IModality } from "@/types/modality.interface";
import axios from "axios";

const api = "https://boliapi.com.br";

export async function findModalities(): Promise<any> {
  return await axios.get<IModality>(`${api}/modality`);
}

export async function search(payload: IFilterState): Promise<any> {
  return await axios.put<ILesson[]>(`${api}/classroom/filter-student`, payload);
}
