import clsx from "clsx";

import { HeartIcon } from "@/assets/icons";
import { Cat, addLike } from "@/entities";

import classes from "./style.module.scss";

interface CatCardProps {
  className?: string;
  cat: Cat;
}

export const CatCard = ({ className, cat }: CatCardProps) => {
  return (
    <div className={clsx(classes.imgBox, className)}>
      <img src={cat.url} className={classes.bgImg} />
      <img src={cat.url} alt={cat.url} className={classes.img} />
      <button
        type="button"
        className={classes.icon}
        onClick={
          !cat.isFavorite
            ? () => {
                addLike(cat.id);
              }
            : () => {}
        }
      >
        <HeartIcon isFill={cat.isFavorite} />
      </button>
    </div>
  );
};
