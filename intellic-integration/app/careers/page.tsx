"use client";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { useState } from "react";
import { Link } from "@heroui/link";

export default function CareerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => setIsSubmitted(true))
      .catch((error) => {
        setIsError(true);
        setError(error);
      });

    setIsSubmitted(true);
  };

  return (
    <div className="flex pt-6 justify-center h-lvh">
      <div className="flex flex-col flex-1 max-w-xl gap-2">
        {!isSubmitted && !isError && (
          <Card
            shadow="md"
            className="p-8 transition-all duration-500 shadow-xl shadow-primary-400/20"
          >
            <CardHeader className="flex-col flex">
              <h2 className={title({ size: "sm" })}>Join Our Team!</h2>
            </CardHeader>
            <CardBody className="">
              <form
                className="gap-2"
                method="POST"
                name="careers"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <Input
                  variant="underlined"
                  name="first-name"
                  id="first-name"
                  label="First Name"
                  isRequired
                />
                <Input
                  variant="underlined"
                  name="last-name"
                  id="last-name"
                  label="Last Name"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Phone Number"
                  id="telephone"
                  name="telephone"
                />
                <Textarea
                  variant="underlined"
                  label="Cover Letter"
                  name="cover-letter"
                  id="cover-letter"
                />
                <Input
                  accept=".pdf,.md,.txt,.docx,.odt,.rtf,.doc"
                  variant="underlined"
                  label="Resume"
                  type="file"
                  isRequired
                  name="resume"
                  id="resume"
                />
                <CardFooter className="flex justify-end">
                  <Button
                    type="submit"
                    className="text-white"
                    radius="md"
                    color="primary"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </form>
            </CardBody>
          </Card>
        )}
        {isSubmitted && (
          <Card
            shadow="md"
            className="p-8 transition-all duration-500 shadow-xl shadow-primary-400/20"
          >
            <CardHeader className="flex-col flex">
              <h2 className={title({ size: "sm" })}>Thank you!</h2>
            </CardHeader>
            <CardBody className="">
              <p>We will reach out if there are any available positions.</p>
            </CardBody>
          </Card>
        )}
        {Error && (
          <Card
            shadow="md"
            className="p-8 transition-all duration-500 shadow-xl shadow-primary-400/20"
          >
            <CardHeader className="flex-col flex">
              <h2 className={title({ size: "sm" })}>Error</h2>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              <p>
                We apologize, but an error has occurred. Please try again later.
                You can send your resume to
                <Link href="mailto:contact@intellicintegration.com">
                  contact@intellicintegration.com
                </Link>
                .
              </p>
              <span>{Error}</span>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}
