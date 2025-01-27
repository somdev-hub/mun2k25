"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const FormPage = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(255, "Name must be less than 255 characters"),
    email: z.string().email("Invalid email address"),
    SIC: z.string().length(8, "SIC must be exactly 8 characters"),
    year: z
      .enum(["1st", "2nd", "3rd", "4th"])
      .refine((val) => ["1st", "2nd", "3rd", "4th"].includes(val), {
        message: "Invalid year"
      }),
    branch: z
      .enum(["CSE", "ECE", "ME", "CE", "EE"])
      .refine((val) => ["CSE", "ECE", "ME", "CE", "EE"].includes(val), {
        message: "Invalid branch"
      }),
    phone: z.string().length(10, "Phone number must be exactly 10 digits")
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      SIC: "",
      year: undefined,
      branch: undefined,
      phone: ""
    }
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-[#eeeeee] pb-12 md:pb-16 pt-[6rem] md:pt-[8rem] px-4 lg:px-[8rem] flex justify-center items-center ">
      <div className="bg-white shadow-md w-full lg:w-[50%] h-[90%] px-6 md:px-8 py-6 md:py-8 ">
        <div className="mb-6">
          <h1 className="text-4xl font-bold font-lalezar">Register Now</h1>
          <p className=" text-gray-500 font-lalezar">
            Register now to participate in the event.
          </p>
        </div>
        <div className="font-lalezar">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-lg"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Email</FormLabel>
                    <FormControl>
                      <Input className="text-lg" placeholder=" " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="SIC"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">SIC</FormLabel>
                    <FormControl>
                      <Input className="text-lg" placeholder=" " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Year</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full text-lg">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent className="font-lalezar">
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Branch</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full text-lg">
                          <SelectValue placeholder="Select Branch" />
                        </SelectTrigger>
                        <SelectContent className="font-lalezar">
                          <SelectItem value="CSE">CSE</SelectItem>
                          <SelectItem value="ECE">ECE</SelectItem>
                          <SelectItem value="ME">ME</SelectItem>
                          <SelectItem value="CE">CE</SelectItem>
                          <SelectItem value="EE">EE</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Phone</FormLabel>
                    <FormControl>
                      <Input className="text-lg" placeholder=" " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <Button type="submit">Submit</Button> */}
              <button
                type="submit"
                className="bg-pink rounded-md w-full mt-6 text-white font-lilita-one py-2 shadow-md hover:bg-violet transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
