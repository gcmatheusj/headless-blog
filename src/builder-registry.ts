"use client";
import { builder, Builder } from "@builder.io/react";
import { BlogPost } from "./components/BlogPost";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(BlogPost, {
  name: "Blog Post",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "handle",
      type: "string",
      required: true,
    },
    {
      name: "shortContent",
      type: "string",
      required: true,
    },
    {
      name: "image",
      type: "file",
      required: true,
    },
  ],
});
