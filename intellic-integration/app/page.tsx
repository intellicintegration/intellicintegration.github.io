"use client";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import {
  ArrowForward,
  ArrowUpward,
  BatteryFull,
  DriveEta,
  ElectricBolt,
  Factory,
  Flatware,
  KeyboardArrowRight,
  Lightbulb,
  LocalPharmacy,
  Newspaper,
  Person,
  Rocket,
  RocketLaunch,
  Science,
} from "@mui/icons-material";

import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useEffect, useState } from "react";

const slideInVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const logoVariant = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.25, ease: "easeOut" },
  },
};

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  useEffect(() => {
    console.log("typingDone updated:", typingDone);
  }, [typingDone]);
  const [hero] = useTypewriter({
    words: [
      "Redefining systems integration from first principles—harnessing technology for unstoppable transformation.",
    ],
    loop: 1,
    typeSpeed: 55,
    onLoopDone: () => setTypingDone(true),
  });

  const sections = [
    {
      id: "section1",
      title: "1. Spark Curiosity",
      description:
        "We build a genuine connection with your team—diving into your process and operations to pinpoint the real challenges that need to be solved. Our approach combines deep technical expertise with human-centered design thinking.",
      icon: Lightbulb,
      classes: "group-hover:text-yellow-400 group-hover:animate-pulse",
    },
    {
      id: "section2",
      title: "2. Accelerate Action",
      description:
        "We collaborate on forward-thinking strategies and concepts that pave the way for seamless, impactful implementation. Quick wins merge with long-term goals, ensuring every effort has measurable results.",
      icon: RocketLaunch,
      classes:
        "group-hover:text-red-400 group-hover:-translate-y-4 group-hover:translate-x-4",
    },
    {
      id: "section3",
      title: "3. Elevate & Expand",
      description:
        "We don't just stop at implementation. We continuously monitor, refine, and optimize solutions to ensure they evolve with your business. Our commitment is to elevate your operations and expand your capabilities.",
      icon: ArrowUpward,
      classes: "group-hover:text-primary group-hover:-translate-y-4",
    },
  ];

  const services = [
    {
      id: "service1",
      title: "Unified Namespace",
      chips: [
        {
          label: "Real-Time Event Processing",
          description:
            "Transform raw data into actionable insights with millisecond latency, enabling immediate response to production anomalies and opportunities.",
        },
        {
          label: "Namespace Governance",
          description:
            "Implement industry-standard schemas that ensure seamless integration between systems and future-proof your data infrastructure.",
        },
        {
          label: "Custom Integration Solutions",
          description:
            "Bridge legacy systems with modern platforms through tailored connectors that preserve your existing investments while enabling digital transformation.",
        },
        {
          label: "Event-Driven Architecture",
          description:
            "Ensure seamless, real-time data flow between systems with a publish-subscribe model that eliminates bottlenecks and redundancy.",
        },
      ],
    },
    {
      id: "service2",
      title: "Manufacturing Execution",
      chips: [
        {
          label: "Dynamic Production Orchestration",
          description:
            "Optimize throughput with scheduling that adapts to real-time conditions.",
        },
        {
          label: "Intelligent Material Management",
          description:
            "Minimize inventory costs while ensuring production continuity through predictive material requirements planning and automated replenishment.",
        },
        {
          label: "Advanced Quality Assurance",
          description:
            "Reduce defect rates and ensure compliance with automated inspection workflows and digital MRB processes that cut resolution time in half.",
        },
        {
          label: "Real-Time Performance Analytics",
          description:
            "Boost OEE with live monitoring and predictive analytics that identify optimization opportunities before they impact production.",
        },
      ],
    },
    {
      id: "service3",
      title: "Advanced Engineering",
      chips: [
        {
          label: "Industrial AI Solutions",
          description:
            "Leverage machine learning models trained specifically for your processes to predict maintenance needs and optimize production parameters.",
        },
        {
          label: "Intelligent Vision Systems",
          description:
            "Automate quality inspection and process monitoring with advanced computer vision that catches defects human operators might miss.",
        },
        {
          label: "Edge Computing Framework",
          description:
            "Process critical data where it's created, reducing latency and bandwidth costs while enabling real-time decision making at the machine level.",
        },
        {
          label: "Anomaly Detection",
          description:
            "Real-time AI monitoring to detect and prevent equipment failures before they escalate.",
        },
      ],
    },
  ];

  const industries = [
    { id: "aerospace", title: "Aerospace", icon: Rocket },
    { id: "automotive", title: "Automotive", icon: DriveEta },
    { id: "battery-electric", title: "Battery / Electric", icon: BatteryFull },
    { id: "chemical-materials", title: "Chemical / Materials", icon: Science },
    { id: "consumer-goods", title: "Consumer Goods", icon: Person },
    { id: "energy-utilities", title: "Energy / Utilities", icon: ElectricBolt },
    { id: "food-beverage", title: "Food and Beverage", icon: Flatware },
    { id: "metals-mining", title: "Metals / Mining", icon: Factory },
    {
      id: "pharma-life-sciences",
      title: "Pharma / Life Sciences",
      icon: LocalPharmacy,
    },
    { id: "pulp-paper", title: "Pulp / Paper", icon: Newspaper },
  ];

  const accordionItemClasses = {
    title: "font-bold text-sm md:text-base",
  };
  const coreValues = [
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
  ];
  const valueDescription =
    "Intellic was founded on five core values that continue to shape how we manage our business, projects, employees, and interact with the world around us.";

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="h-[calc(100dvh-64px)] flex flex-col justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-10]"
        >
          <source src="./background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInVariants}
        >
          <Card className="inline-block group bg-background/75 justify-center p-6">
            <h1 className={"text-xl max-w-3xl font-bold md:text-4xl"}>
              {hero}
            </h1>
            <CardFooter className="flex justify-end items-center">
              {typingDone && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={logoVariant}
                  className="flex-row flex gap-2 items-center"
                >
                  <Image
                    width={32}
                    height={32}
                    src="./logo.svg"
                    alt="Intellic Integration Logo"
                  />
                  <h2 className="text-xl font-bold">Intellic Integration</h2>
                </motion.div>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className={title({ size: "md", fullWidth: true })}>Our Approach</h1>
        <Divider />

        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInVariants}
          >
            <Card
              key={section.id}
              id={String(index)}
              className="group p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <CardHeader className="flex gap-4">
                <section.icon fontSize="large" className={section.classes} />
                <h2 className={"text-xl font-bold"}>{section.title}</h2>
              </CardHeader>
              <CardBody className="transform transition-all duration-1000">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg leading-relaxed">
                  {section.description}
                </p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
        <Card className="group p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
          <CardHeader>
            <h2 className={"text-xl font-bold text-primary-400"}>
              The Result: A Lasting Partnership
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg leading-relaxed">
              By uniting deep respect for people, a culture of innovation, and
              advanced technology-driven solutions, we enable enterprise
              transformation that extends well beyond any single project.
            </p>
          </CardBody>
          <CardFooter className="">
            <Button
              variant="shadow"
              color="primary"
              as={Link}
              href="/contact"
              className="p-8 flex items-center gap-4 hover:scale-105 transition-all duration-300 group text-xl"
            >
              Get Started
              <ArrowForward />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-default-50/70 w-dvw">
        <div className="container mx-auto max-w-7xl p-6 gap-6 flex-grow transition">
          <div className="flex flex-col gap-6">
            <h1
              id="services"
              className={title({ size: "md", fullWidth: true })}
            >
              Services
            </h1>
            <Divider />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={slideInVariants}
                >
                  <Card className="p-6 bg-background group transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-primary-400">
                        {service.title}
                      </h2>
                    </CardHeader>
                    <CardBody>
                      <Accordion>
                        {service.chips.map((chip, index) => (
                          <AccordionItem
                            key={index}
                            aria-label={chip.label}
                            title={chip.label}
                            classNames={accordionItemClasses}
                          >
                            {chip.description}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardBody>
                    <CardFooter className="justify-end">
                      <Button
                        variant="light"
                        color="primary"
                        as={Link}
                        href="/contact"
                        className="flex items-center gap-2 font-semibold text-md hover:scale-105 transition-all duration-300 mt-4"
                      >
                        Learn More
                        <KeyboardArrowRight />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <h1 id="industries" className={title({ size: "md", fullWidth: true })}>
          Industries
        </h1>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideInVariants}
            >
              <Card
                key={industry.id}
                className="group border-b border-primary p-6"
              >
                <CardHeader className="gap-2">
                  <industry.icon
                    fontSize="medium"
                    className="text-primary-400"
                  />
                  <h2 className="font-semibold">{industry.title}</h2>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-1 justify-end flex-row">
          <div className="flex flex-col items-end gap-2 text-default-500">
            <p>Don&apos;t see your industry?</p>
            <Button
              variant="shadow"
              color="primary"
              as={Link}
              href="/contact"
              className="p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-default-50/70 w-dvw">
        <div className="container mx-auto max-w-7xl p-6 gap-6 flex-grow transition">
          <div className="flex flex-col gap-6">
            <h1
              id="about-us"
              className={title({ size: "md", fullWidth: true })}
            >
              About Us
            </h1>
            <Divider />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-background">
                <CardHeader className="flex-col flex text-primary-400">
                  <h2 className={title({ size: "sm" })}>Our Mission</h2>
                </CardHeader>
                <CardBody className="">
                  <p className="text-lg text-gray-300 md:text-justify">
                    To save and create middle class jobs. We do
                    this by helping employers leverage technology to innovate
                    their businesses. We are here to improve the lives of
                    everyone we come into contact with.
                  </p>
                </CardBody>
                <CardFooter className="flex justify-end">
                  <div className="flex flex-col items-end gap-2 text-default-500">
                    <p>Interested in joining our team?</p>
                    <Button
                      variant="light"
                      color="primary"
                      as={Link}
                      href="/careers"
                      className="p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300 group"
                    >
                      Careers
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card shadow="md" className="p-8 bg-background">
                <CardHeader className="flex-col flex text-primary-400">
                  <h2 className={title({ size: "sm" })}>Core Values</h2>
                </CardHeader>
                <CardBody className="gap-2">
                  <p className="text-lg text-gray-300 md:text-justify">
                    {valueDescription}
                  </p>
                  <Accordion>
                    {coreValues.map((coreValue, index) => (
                      <AccordionItem
                        key={index}
                        aria-label={coreValue.title}
                        title={coreValue.title}
                        classNames={accordionItemClasses}
                      >
                        {coreValue.description}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-64 gap-4 -mt-6 w-dvw text-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500 p-6 opacity-30 blur-3xl rounded-xl z-0"></div>

        <div className="flex flex-col items-center justify-center p-6 rounded-xl relative z-10">
          <h1 className={title({ size: "md", fullWidth: true })}>
            Ready for Transformation?
          </h1>
          <Button
            color="primary"
            variant="solid"
            as={Link}
            href="/contact"
            className="p-8 hover:scale-105 transition-all duration-300 mt-4 text-2xl self-center"
          >
            Let&apos;s Go!
          </Button>
        </div>
      </div>
    </section>
  );
}
