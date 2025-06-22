import clsx from "clsx";

import { HeartIcon } from "@/assets/icons";
import { Cat, useAddLike } from "@/entities";
import { useRemuveLike } from "@/entities/cats/likes";

import classes from "./style.module.scss";

interface CatCardProps {
  className?: string;
  cat: Cat;
}

export const CatCard = ({ className, cat }: CatCardProps) => {
  const { mutate: addLike } = useAddLike();
  const { mutate: remuveLike } = useRemuveLike();
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
            : () => {
                remuveLike(cat.id);
              }
        }
      >
        <HeartIcon isFill={cat.isFavorite} />
      </button>
    </div>
  );
};
