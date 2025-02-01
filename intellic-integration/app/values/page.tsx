"use client";
import { subtitle, title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

export default function ValuesPage() {
  const accordionItemClasses = {
    title: "font-bold"
  };
  const data = {
    cards: [
      {
        title: "Authenticity",
        subtitle: "",
        description:
          "We genuinely care for our employees, clients, their customers, and society. Our approach prioritizes meaningful impact—preserving and creating middle-class jobs.",
      },
      {
        title: "Expertise",
        subtitle: "",
        description:
          "We stay at the forefront through continuous learning, building expert teams so our clients don’t have to. Tackling complex projects keeps our work exciting, positioning Intellic as the team that pushes technology to the edge.",
      },
      {
        title: "Humility",
        subtitle: "",
        description:
          "We recognize that learning never stops. We embrace opportunities to grow alongside our clients and employees",
      },
      {
        title: "Faith-Based Servant Leadership",
        subtitle: "",
        description:
          "We strive to be greater than ourselves, seeking to improve the world around us. We answer to a Higher Power and are grateful for the opportunity to serve our community and beyond.",
      },
      {
        title: "Transparency",
        subtitle: "",
        description:
          "We are open about our business practices, our projects, and our employees. We believe that transparency builds trust and better collaboration.",
      },
    ],
    valueDescription:
      "Intellic was founded on five core values that continue to shape how we manage our business, projects, employees, and interact with the world around us.",

    ctas: [
      {
        label: "Mission",
        href: "/mission",
      },
      {
        label: "Our Team",
        href: "/team",
      },
      {
        label: "Services",
        href: "/services",
      },
    ],
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col max-w-xl gap-2">
        <Card shadow="md" className="p-8">
          <CardHeader className="flex-col flex">
            <h2 className={title({ size: "sm" })}>Core Values</h2>
          </CardHeader>
          <CardBody className="gap-2">
            <p className="">{data.valueDescription}</p>
            <Accordion>
              {data.cards.map((card, index) => (
                <AccordionItem
                  key={index}
                  aria-label={card.title}
                  title={card.title}
                  classNames={accordionItemClasses}
                >
                  {card.description}
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>
        <div className="flex justify-center gap-2">
          {data.ctas.map((cta, index) => (
            <Link
              key={index}
              href={cta.href}
              isExternal={false}
              className="flex-1 text-center flex items-center justify-center text-primary-600 bg-primary-50 p-4 rounded-lg shadow-md"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
