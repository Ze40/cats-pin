import { ReactElement } from "react";

import { Header } from "@/widgets";

const ContentPageLayout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default ContentPageLayout;
