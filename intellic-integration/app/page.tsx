"use client";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import {
  ArrowForward,
  ArrowRight,
  ArrowUpward,
  Lightbulb,
  RocketLaunch,
} from "@mui/icons-material";

import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Home() {
  const hero = [
    "Reimagining systems integration",
    "from first principles—",
    "harnessing technology",
    "for unstoppable transformation",
  ];

  const sections = [
    {
      id: "section1",
      title: "1. Spark Curiosity",
      description:
        "We build a genuine connection with your team—diving into your process and operations to pinpoint the real challenges that need to be solved. Our approach combines deep technical expertise with human-centered design thinking.",
      icon: Lightbulb,
      color: "yellow",
    },
    {
      id: "section2",
      title: "2. Accelerate Action",
      description:
        "We collaborate on forward-thinking strategies and concepts that pave the way for seamless, impactful implementation. Quick wins merge with long-term goals, ensuring every effort has measurable results.",
      icon: RocketLaunch,
      color: "green",
    },
    {
      id: "section3",
      title: "3. Elevate & Expand",
      description:
        "We don't just stop at implementation. We continuously monitor, refine, and optimize solutions to ensure they evolve with your business. Our commitment is to elevate your operations and expand your capabilities.",
      icon: ArrowUpward,
      color: "primary",
    },
  ];

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
          <Card className="inline-block bg-background/75 justify-center p-6">
            {hero.map((line, index) => (
              <h1
                key={index}
                id={String(index)}
                className={title({ size: "lg", fullWidth: true })}
              >
                {line}
                <br />
              </h1>
            ))}
            <CardFooter className="flex justify-end items-center text-lg pt-6 gap-2">
              <Image
                width={32}
                height={32}
                src="./logo.svg"
                alt="Intellic Integration Logo"
              />
              <h2 className={title({ size: "sm" })}>Intellic Integration</h2>
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
              className="group p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <CardHeader className="flex gap-6">
                <section.icon fontSize="large" />
                <h2 className={title({ size: "sm", fullWidth: true })}>
                  {section.title}
                </h2>
              </CardHeader>
              <CardBody className="transform transition-all duration-1000">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-3xl leading-relaxed">
                  {section.description}
                </p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
        <Card className="group p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
          <CardHeader>
            <h2 className={"text-4xl font-bold text-primary-400 underline"}>
              The Result: A Lasting Partnership
            </h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-3xl leading-relaxed">
              By uniting deep respect for people, a culture of innovation, and
              advanced technology-driven innovation, we enable enterprise
              transformation that extends well beyond any single project.
            </p>
          </CardBody>
          <CardFooter className="p-2">
            <Button
              variant="shadow"
              color="primary"
              as={Link}
              href="/contact"
              className="p-8 flex items-center gap-4 hover:scale-105 transition-all duration-300 mt-8 group text-2xl"
            >
              Get Started
              <ArrowForward />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
