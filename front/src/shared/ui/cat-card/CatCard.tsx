import clsx from "clsx";

import classes from "./style.module.scss";

interface CatCardProps {
  className?: string;
  cat: string;
}

export const CatCard = ({ className, cat }: CatCardProps) => {
  return (
    <div className={clsx(classes.imgBox, className)}>
      <img src={cat} alt="" className={classes.img} />
    </div>
  );
};
