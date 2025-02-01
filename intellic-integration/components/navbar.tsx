"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { button as buttonStyles } from "@heroui/theme";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Image } from "@heroui/image";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Navbar = () => {
  const dropdownItems = [
    {
      key: "about",
      description: "",
      label: "About Us",
    },
    {
      key: "team",
      description: "",
      label: "Our Team",
    },
    {
      key: "values",
      description: "",
      label: "Core Values",
    },
    {
      key: "mission",
      description: "",
      label: "Mission",
    },
    {
      key: "careers",
      description: "",
      label: "Careers",
    },
  ];
  const mobileMenuItems = [
    {
      key: "about",
      description: "",
      label: "About Us",
    },
    {
      key: "team",
      description: "",
      label: "Our Team",
    },
    {
      key: "services",
      description: "",
      label: "Services",
    },
    {
      key: "industries",
      description: "",
      label: "Industries",
    },
    {
      key: "values",
      description: "",
      label: "Core Values",
    },
    {
      key: "mission",
      description: "",
      label: "Mission",
    },
    {
      key: "careers",
      description: "",
      label: "Careers",
    },
  ];

  return (
    <HeroUINavbar
      isBlurred={false}
      className="bg-transparent"
      maxWidth="xl"
      position="static"
    >
      <NavbarContent
        className="items-center basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Image
              isBlurred
              width={32}
              height={32}
              src="./logo.svg"
              alt="Intellic Integration Logo"
              className="hidden md:block"
            />
            <p className="font-bold text-inherit px-0 md:px-1">
              Intellic Integration
            </p>
          </NextLink>
        </NavbarBrand>

        <div className="hidden md:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="/services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/industries">
              Industries
            </Link>
          </NavbarItem>
          <Dropdown className="bg-gradient-to-br from-primary-50">
            <NavbarItem>
              <DropdownTrigger>
                <div className="flex cursor-pointer hover:text-default-600">
                  <p>About</p>
                  <ExpandMoreIcon />
                </div>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="About Us"
              className="w-[340px] rounded-lg"
              items={dropdownItems}
              color="primary"
              itemClasses={{
                base: "gap-4",
                title: "hover:text-white",
              }}
            >
              {(item) => (
                <DropdownItem
                  key={item.key}
                  description={item.description}
                  href={item.key}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
              className: "text-white",
            })}
            href="/contact"
          >
            Contact Us
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="sm:hidden basis-1 pl-4 flex items-center"
        justify="end"
      >
        <Link
          className={buttonStyles({
            size: "sm",
            color: "primary",
            radius: "md",
            variant: "shadow",
            className: "text-white",
          })}
          href="/contact"
        >
          Contact Us
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-gradient-to-br from-primary-50">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {mobileMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="p-2">
              <Link
                href={item.key}
                underline="always"
                size="lg"
                color="foreground"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
