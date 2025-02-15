"use client";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

import React, { useState } from "react";

export default function ContactPage() {
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
    <div className="flex pt-6 justify-center h-lvh ">
      <div className="flex flex-col flex-1 max-w-xl gap-2">
        {!isSubmitted && !isError && (
          <Card
            shadow="md"
            className="p-8 transition-all duration-500 shadow-xl shadow-primary-400/20"
          >
            <CardHeader className="flex-col flex">
              <h2 className={title({ size: "sm" })}>Contact</h2>
            </CardHeader>
            <CardBody className="">
              <form
                className="gap-2"
                method="POST"
                name="contact"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <Input
                  variant="underlined"
                  label="First Name"
                  name="first-name"
                  id="first-name"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Last Name"
                  name="last-name"
                  id="last-name"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Company"
                  name="company"
                  id="company"
                  isRequired
                />
                <Input
                  variant="underlined"
                  label="Business Email"
                  type="email"
                  name="email"
                  id="email"
                  isRequired
                />

                <Input
                  isRequired
                  type="textarea"
                  label="How can we help?"
                  name="message"
                  id="message"
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
              <p>We will reach out to you shortly.</p>
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
              </p>
              <span>{Error}</span>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}
