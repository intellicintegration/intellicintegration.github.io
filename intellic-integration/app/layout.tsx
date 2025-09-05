import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Place } from "@mui/icons-material";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Intellic Integration",
    "Integration",
    "Software",
    "Consulting",
    "Services",
    "UNS",
    "Unified Namespace",
    "MES",
    "Manufacturing Execution System",
    "DTMA",
    "Digital Transformation Maturity Assessment",
    "Digital Transformation",
    "4.0 Industry",
    "Industrial Automation",
    "IIoT"
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    // { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="bg-gradient-to-br from-primary-50 bg-fixed overflow-x-hidden"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-transparent font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-1 transition">
              {children}
            </main>
            <footer className="w-full bg-black text-white py-10">
              <div className="max-w-7xl mx-auto px-6 flex-col gap-4 md:flex-row flex justify-between">
                <Link
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  href="/"
                  color="foreground"
                >
                  <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    width={32}
                    height={32}
                  />
                  <h1 className={"w-full text-bold text-xl"}>
                    Intellic Integration
                  </h1>
                </Link>
                <div className="flex flex-row gap-2 items-center">
                  <Button variant="bordered" as={Link} href="/contact">
                    Contact Us
                  </Button>
                  <Link
                    isExternal
                    aria-label="Linkedin"
                    href="https://www.linkedin.com/company/intellic-integration"
                  >
                    <LinkedInIcon
                      fontSize="large"
                      className="text-default-500"
                    />
                  </Link>
                  <Link
                    isExternal
                    aria-label="Github"
                    href="https://github.com/intellicintegration"
                  >
                    <GithubIcon fontSize="large" className="text-default-500" />
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-8 pt-6 gap-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row">
                {[
                  {
                    name: "Texas",
                    address:
                      "2221 East Lamar Blvd Suite 920 Arlington, TX 76006",
                    phone: "(972)895-3919",
                  },
                ].map((location, index) => (
                  <div key={index} className="flex flex-row gap-2">
                    <Place />
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold">
                        {location.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-400">{location.phone}</p>
                    </div>
                  </div>
                ))}
                <div className="justify-center flex flex-1">
                  <div className="gap-4 flex md:flex-row">
                    {[
                      {
                        label: "About Us",
                        url: "/#about-us",
                      },
                      {
                        label: "Services",
                        url: "/#services",
                      },
                      {
                        label: "Contact",
                        url: "/contact",
                      },
                      {
                        label: "Careers",
                        url: "/careers",
                      },
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className="text-sm text-gray-400"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm max-w-7xl mx-auto">
                © {new Date().getFullYear()} Intellic Integration. All rights
                reserved.
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
