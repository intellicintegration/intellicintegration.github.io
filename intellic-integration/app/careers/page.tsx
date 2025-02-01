"use client";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";

export default function CareerPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col flex-1 max-w-xl gap-2">
        <Card shadow="md" className="p-8 ">
          <CardHeader className="flex-col flex">
            <h2 className={title({ size: "sm" })}>Join Our Team</h2>
          </CardHeader>
          <CardBody className="">
            <Form className="flex gap-2">
              <Input variant="underlined" label="First Name" isRequired />
              <Input variant="underlined" label="Last Name" isRequired />
              <Input
                variant="underlined"
                label="Email"
                type="email"
                isRequired
              />
              <Input variant="underlined" label="Phone Number" />
              <Textarea variant="underlined" label="Cover Letter"/>
              <Input accept=".pdf,.md,.txt,.docx,.odt,.rtf,.doc" variant="underlined" label="Resume" type="file" isRequired />
              <CardFooter className="flex justify-end">
                <Button className="text-white" radius="md" color="primary">
                  Submit
                </Button>
              </CardFooter>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
