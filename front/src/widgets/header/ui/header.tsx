import clsx from "clsx";
import { NavLink } from "react-router";

import { Container } from "@/shared/ui";

import pagesList from "../model/pages-list";
import classes from "./style.module.scss";

const Header = () => {
  return (
    <header className="bg-secondary">
      <Container>
        <nav>
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
      </Container>
    </header>
  );
};

export default Header;
