import { useQuery } from "@tanstack/react-query";

import { api } from "@/api/api";
import { Cat } from "@/entities";
import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

import ContentPageLayout from "../layout";

const AllCatsPage = () => {
  const {
    data: cats = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cats"],
    queryFn: () =>
      api
        .get<Cat[]>("/cats", {
          headers: {
            "content-page": 1,
          },
        })
        .then((res) => res.data),
  });

  if (isError) {
    console.error("Ошибка при получении котов");
    return <div>Произошла ошибка</div>;
  }
  return (
    <ContentPageLayout>
      <Container>
        <TheCardViewer items={cats} isLoading={isLoading} />
      </Container>
    </ContentPageLayout>
  );
};

export default AllCatsPage;
