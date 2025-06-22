import { api } from "@/api/api";

import { Like } from "./like.type";

export const addLike = async (catId: string) => {
  return api.post<Like>("/cats/likes", { cat_id: catId });
};
