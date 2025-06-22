import clsx from "clsx";

import { Cat } from "@/entities";
import { CatCard, CatSceleton } from "@/shared/ui";

import classes from "./style.module.scss";

interface TheCardViewerProps {
  className?: string;
  items: Cat[];
  isLoading?: boolean;
}

export const TheCardViewer = ({ className, items, isLoading }: TheCardViewerProps) => {
  return (
    <section className={clsx(classes.viewer, className)}>
      {isLoading
        ? [...new Array(10)].map((_, index) => <CatSceleton key={index} />)
        : items.map((cat) => <CatCard cat={cat} key={cat.id} />)}
    </section>
  );
};
