import clsx from "clsx";

import { Cat } from "@/entities";
import { CatCard } from "@/shared/ui/cat-card/CatCard";

import classes from "./style.module.scss";

interface TheCardViewerProps {
  className?: string;
  items: Cat[];
}

export const TheCardViewer = ({ className, items }: TheCardViewerProps) => {
  return (
    <section className={clsx(classes.viewer, className)}>
      {items.map((cat) => (
        <CatCard cat={cat} key={cat.id} />
      ))}
    </section>
  );
};
