import { useEffect, useState } from "react";

import { api } from "@/api/api";
import { Cat } from "@/entities";
import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

import ContentPageLayout from "../layout";

const AllCatsPage = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get<Cat[]>("/cats", {
        headers: {
          "content-page": 1,
        },
      })
      .then((response) => {
        setCats(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении котов:", error);
      });
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  return (
    <ContentPageLayout>
      <Container>
        <TheCardViewer items={cats} isLoading={isLoading} />
      </Container>
    </ContentPageLayout>
  );
};

export default AllCatsPage;
