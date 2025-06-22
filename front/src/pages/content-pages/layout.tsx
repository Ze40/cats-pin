import { ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@/widgets";

const queryClient = new QueryClient();

const ContentPageLayout = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </main>
  );
};

export default ContentPageLayout;
