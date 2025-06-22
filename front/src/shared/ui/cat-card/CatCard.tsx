import clsx from "clsx";

import { HeartIcon } from "@/assets/icons";
import { Cat } from "@/entities";

import classes from "./style.module.scss";

interface CatCardProps {
  className?: string;
  cat: Cat;
}

export const CatCard = ({ className, cat }: CatCardProps) => {
  return (
    <div className={clsx(classes.imgBox, className)}>
      <img src={cat.url} alt={cat.url} className={classes.img} />
      <button type="button" className={classes.icon}>
        <HeartIcon isFill={cat.isFavorite} />
      </button>
    </div>
  );
};
