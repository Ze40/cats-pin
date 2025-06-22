import { useEffect, useRef, useState } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { api } from "@/api/api";
import { Cat } from "@/entities";
import { TheCardViewer } from "@/feat";
import { Container } from "@/shared/ui";

const AllCatsPage = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["cats"],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await api.get<Cat[]>("/cats", {
          headers: {
            "content-page": pageParam,
          },
        });
        return response.data;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    const allCats = data?.pages.flat() || [];
    setCats(allCats);
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage]);

  if (isError) {
    console.error("Ошибка при получении котов");
    return <div>Произошла ошибка</div>;
  }
  return (
    <Container>
      <TheCardViewer items={cats} isLoading={isLoading} />
      <div ref={loaderRef} className="p-2xl text-center">
        {isFetchingNextPage && "... загружаем еще котиков ..."}
      </div>
    </Container>
  );
};

export default AllCatsPage;
