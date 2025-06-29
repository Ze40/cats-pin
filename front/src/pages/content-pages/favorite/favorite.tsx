import { useQuery } from "@tanstack/react-query";

import { api } from "@/api/api";
import { Cat } from "@/entities";
import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

const FavoritePage = () => {
  const {
    data: cats = [],
    isLoading,
    isError,
  } = useQuery<Cat[]>({
    queryKey: ["favoriteCats"],
    queryFn: () => api.get<Cat[]>("/cats/likes").then((res) => res.data),
  });

  if (isError) {
    console.error("Ошибка при получении котов");
    return <div>Произошла ошибка</div>;
  }

  return (
    <Container>
      <TheCardViewer items={cats} isLoading={isLoading} />
    </Container>
  );
};

export default FavoritePage;
