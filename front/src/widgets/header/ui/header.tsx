import { Container } from "@/shared/ui";

import Navigation from "../../navigation/ui/navigation";

const Header = () => {
  return (
    <header className="bg-secondary">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
