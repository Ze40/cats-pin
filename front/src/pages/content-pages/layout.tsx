import { ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate } from "react-router";

import { isAuth } from "@/shared/helpers";
import { Header } from "@/widgets";

const queryClient = new QueryClient();

const ContentPageLayout = ({ children }: { children: ReactElement | ReactElement[] }) => {
  if (!isAuth()) return <Navigate to={"/login"} />;
  return (
    <main>
      <Header />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </main>
  );
};

export default ContentPageLayout;
