import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { color } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Home() {
  const data = {
    cards: [
      {
        title: "Identity",
        subtitle: "Who we are",
        cta: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/team" },
        ]
      },
      {
        title: "Service",
        subtitle: "What we do",
        cta: [
          { label: "Services", href: "/services" },
          { label: "Industries", href: "/industries" },
        ]
      },
      {
        title: "Mission",
        subtitle: "Why we do it",
        cta: [
          { label: "Core Values", href: "/values" },
          { label: "Mission", href: "/mission-statement" },
        ]
      }
    ]
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image src="./logo.svg" width={54} height={54} className="rounded-xl"/>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>We&nbsp;</h1>
        <h1 className={title()}>architect&nbsp;</h1>
        <br />
        <h1 className={title({ color: "blue" })}>Industry 4.0 Solutions&nbsp;</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {data.cards.map((card, index) => (
          <Card key={index} fullWidth shadow="md" className="bg-transparent p-8">
            <CardHeader className="flex-col flex">
              <h2 className={title({ size: "sm" })}>
                {card.title}
              </h2>
              <h3 className={subtitle({class:"text-center"})}>{card.subtitle}</h3>
            </CardHeader>
            <CardBody className="flex gap-4 flex-col">
              {card.cta.map((ctaItem, ctaIndex) => (
                <Link
                  key={ctaIndex}
                  href={ctaItem.href}
                  isExternal={false}
                  className="flex-1 text-center flex items-center justify-center text-primary-600 bg-primary-50 p-4 rounded-lg shadow-md"
                >
                  {ctaItem.label}
                </Link>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="flex-col justify-end">
      <h3 className={subtitle()}>Get started</h3>
      <div className="flex gap-3">
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
      </div>
      </div>
    </section>
  );
}
