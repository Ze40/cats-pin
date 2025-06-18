import clsx from "clsx";
import { NavLink } from "react-router";

import pagesList from "../model/pages-list";
import classes from "./style.module.scss";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex">
        {pagesList.map((page) => (
          <li key={page.id}>
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                clsx("text-sm color-secondary", classes.navLink, { [classes.active]: isActive })
              }
            >
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
