import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/api/api";

export const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (catId: string) => api.post("/cats/likes", { cat_id: catId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cats"] });
    },
  });
};

export const useRemuveLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (catId: string) => api.delete(`/cats/likes/${catId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cats"] });
      queryClient.invalidateQueries({ queryKey: ["favoriteCats"] });
    },
  });
};
