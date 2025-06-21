import clsx from "clsx";

import { HeartIcon } from "@/assets/icons";

import classes from "./style.module.scss";

interface CatCardProps {
  className?: string;
  cat: string;
}

export const CatCard = ({ className, cat }: CatCardProps) => {
  return (
    <div className={clsx(classes.imgBox, className)}>
      <img src={cat} alt="" className={classes.img} />
      <button type="button" className={classes.icon}>
        <HeartIcon isFill />
      </button>
    </div>
  );
};
