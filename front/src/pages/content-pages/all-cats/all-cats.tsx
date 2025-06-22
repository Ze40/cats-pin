import { useEffect, useState } from "react";

import { api } from "@/api/api";
import { Cat } from "@/entities";
import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

import ContentPageLayout from "../layout";

const AllCatsPage = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    api
      .get<Cat[]>("/cats", {
        headers: {
          "content-page": 1,
        },
      })
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
      });
  }, []);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  return (
    <ContentPageLayout>
      <Container>
        <TheCardViewer items={cats} />
      </Container>
    </ContentPageLayout>
  );
};

export default AllCatsPage;
