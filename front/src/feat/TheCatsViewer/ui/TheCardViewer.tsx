import clsx from "clsx";

import { CatCard } from "@/shared/ui/cat-card/CatCard";

import classes from "./style.module.scss";

interface TheCardViewerProps {
  className?: string;
  items: Array<string>;
}

export const TheCardViewer = ({ className }: TheCardViewerProps) => {
  return (
    <section className={clsx(classes.viewer, className)}>
      {[...new Array(20)].map((cat, i) => (
        <CatCard cat="/test.png" key={cat + i} />
      ))}
    </section>
  );
};
