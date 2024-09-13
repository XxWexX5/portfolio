import { FaBeer } from "react-icons/fa";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function App() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default App;
