import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Header() {
  return (
    <header>
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex gap-12">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="https://github.com/radix-ui"
              className="flex text-secondary-700 hover:opacity-70 transition-opacity"
            >
              <div className="relative">
                About me
                <div className="w-[.35rem] h-[.3rem] bg-red-500 absolute -right-[.5rem] bottom-[.4rem] rounded-full"></div>
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="text-neutral-50 hover:opacity-70 transition-opacity">
            <NavigationMenu.Link href="https://github.com/radix-ui">
              Work
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="text-neutral-50 hover:opacity-70 transition-opacity">
            <NavigationMenu.Link href="https://github.com/radix-ui">
              Formation
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="text-neutral-50 hover:opacity-70 transition-opacity">
            <NavigationMenu.Link href="https://github.com/radix-ui">
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
