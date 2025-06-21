import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

import ContentPageLayout from "../layout";

const AllCatsPage = () => {
  return (
    <ContentPageLayout>
      <Container>
        <TheCardViewer items={[]} />
      </Container>
    </ContentPageLayout>
  );
};

export default AllCatsPage;
