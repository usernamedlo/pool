"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu } from "lucide-react";
import Link from "next/link";

import Container from "@/components/ui/container";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const routes = [
  { key: "id1", href: "/", label: "Home" },
  { key: "id2", href: "/page1", label: "Page1" },
  { key: "id3", href: "/page2", label: "Page2" },
];

export const Header = async () => {

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.key}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">PLACEHOLDER</h1>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <nav className="mx-6 items-center space-x-4 lg:space-x-3 hidden md:block">
              {routes.map((route) => (
                <Button key={route.key} asChild variant="ghost">
                  <Link
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <ThemeToggle />
            <ConnectButton />
          </div>
        </div>
      </Container>
    </header>
  );
};