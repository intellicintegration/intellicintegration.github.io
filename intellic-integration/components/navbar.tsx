"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@nextui-org/button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Navbar = () => {
  const dropdownItems = [
    {
      key: "autoscaling",
      description: "",
      label: "About Us"
    },
    {
      key: "usage_metrics",
      description: "",
      label: "Core Values"
    },
    {
      key: "production_ready",
      description: "",
      label: "Careers"
    },
  ];

  return (
    <NextUINavbar isBlurred={false} className="bg-transparent" maxWidth="xl" position="static">
      <NavbarContent className="items-center basis-1/5 sm:basis-full" justify="start">
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
            <p className="font-bold text-inherit px-0 md:px-1">Intellic Integration</p>
          </NextLink>
        </NavbarBrand>

        <div className="hidden md:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Services
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
              aria-label="ACME features"
              className="w-[340px]  rounded-lg"
              items={dropdownItems}
              color="primary"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {(item) => (
                <DropdownItem key={item.key} className="" description={item.description}>
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
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
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

      <NavbarContent className="sm:hidden basis-1 pl-4 flex items-center" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-gradient-to-br from-primary-50">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar >
  );
};
