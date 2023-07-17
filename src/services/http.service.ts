import axios from "axios";

const api = "https://boliapi.com.br/modality";

export async function findModalities(): Promise<any> {
  const data = await axios.get(api);
  return data;
}
