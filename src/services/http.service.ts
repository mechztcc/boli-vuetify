import { IModality } from "@/types/modality.interface";
import axios from "axios";

const api = "https://boliapi.com.br/modality";

export async function findModalities(): Promise<any> {
  return await axios.get<IModality>(api);
}
