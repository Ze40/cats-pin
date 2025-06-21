import { Container } from "@/shared/ui";

import Navigation from "../../navigation/ui/navigation";
import classes from "./style.module.scss";

const Header = () => {
  return (
    <header className="bg-secondary mb-3xl">
      <Container className="flex items-center gap-3xl">
        <img src="/logo/logo-main.png" alt="logo" className={classes.logo} />
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
