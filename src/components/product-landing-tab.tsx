import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 
const reviews = [
  {
    name: "Emily Selman",
    date: "july 16, 2021",
    review:
      "this icon pack is just what i need for my latest project. There is an icon for just about anything I could ever need .",
    profile: "https://github.com/shadcn.png",
  },
  {
    name: "Hector Gibbons",
    date: "july 16, 2021",
    review:
      "this icon pack is just what i need for my latest project. There is an icon for just about anything I could ever need .",
    profile: "https://github.com/shadcn.png",
  },
];
 
export default function ProductLandingPageWithTabs() {
  return (
    <div className="lg:h-screen bg-background text-foreground py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 justify-center">
        <div className="mx-auto grid max-w-2xl grid-flow-row grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20  lg:grid-cols-2 lg:max-w-none lg:mx-0">
          <div className="w-full lg:pr-8 lg:pt-4">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1683117927786-f146451082fb"
              alt="main img"
            />
          </div>
          <div className="lg:pr-8 lg:pt-4 lg:row-span-3">
            <div className="border-b-2 border-white border-opacity-60">
              <h2 className="text-4xl font-semibold mb-6">
                Application Ui Pack
              </h2>
              <p className="opacity-80 tracking-tight">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                quia cum vero delectus eaque eius, nisi consectetur
                necessitatibus odit sit.
              </p>
              <div className="w-full flex flex-row gap-6 my-10">
                <Button className="w-full bg-violet-600 text-white hover:text-black">
                  Pay $220
                </Button>
                <Button className="w-full">Preview</Button>
              </div>
            </div>
            <div className="mt-10 border-b-2 border-white border-opacity-60 pl-4">
              <h2 className="text-xl font-bold mb-4">Highlight</h2>
              <ul className="mb-10">
                <li className="list-disc opacity-80 mb-2">
                  200+ SVG icons in 3 unique styles
                </li>
                <li className="list-disc opacity-80 mb-2">
                  Compatible with Figma Sketch and Adobe XD
                </li>
                <li className="list-disc opacity-80 mb-2">
                  Drawn on 24 * 24 pixel grid
                </li>
              </ul>
            </div>
            <div className="mt-10 border-b-2 border-white border-opacity-60">
              <h2 className="text-xl font-bold mb-4">Licence</h2>
              <p className="text-base opacity-60 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate, optio dolores. Laboriosam, nihil? Illo, facilis.
              </p>
            </div>
            <div className="mt-10 flex flex-row gap-4">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <Tabs defaultValue="Reviews" className="w-full ">
              <TabsList className="w-full border-b-2 border-white border-opacity-60 pb-10 pl-0 flex justify-start bg-transparent rounded-none">
                <TabsTrigger value="Reviews">Customer Reviews</TabsTrigger>
                <TabsTrigger value="FAQ">FAQ</TabsTrigger>
                <TabsTrigger value="Licence">Licence</TabsTrigger>
              </TabsList>
              <TabsContent value="Reviews">
                <div className="relative pl-16 mt-5">
                  <div className="text-base font-semibold">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Avatar>
                        <AvatarImage src={reviews[0].profile} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    {reviews[0].name}
                  </div>
                  <p className="mt-1 text-base opacity-60 ">
                    {reviews[0].date}
                  </p>
                  <p className="mt-3 text-base opacity-60 ">
                    {reviews[0].review}
                  </p>
                </div>
                <div className="relative pl-16 mt-5">
                  <div className="text-base font-semibold">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Avatar>
                        <AvatarImage src={reviews[1].profile} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    {reviews[1].name}
                  </div>
                  <p className="mt-1 text-base opacity-60 ">
                    {reviews[1].date}
                  </p>
                  <p className="mt-2 text-base opacity-60">
                    {reviews[1].review}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="FAQ">FAQ related data</TabsContent>
              <TabsContent value="Licence">licence related data</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}