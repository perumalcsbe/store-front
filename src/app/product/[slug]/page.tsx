/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
 
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    alt: "Description of Image 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556306535-38febf6782e7",
    alt: "Description of Image 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    alt: "Description of Image 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a",
    alt: "Description of Image 4",
  },
];
 
export default function ProductLandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);
 
  const handleClickImage = (index: number) => {
    setCurrentImageIndex(index);
  };
 
  return (
    <div className="md:h-screen bg-background text-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 justify-center ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20  md:grid-cols-2 lg:max-w-none lg:mx-0 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="w-full">
              <img
                className="w-full h-96 object-cover rounded-md "
                src={images[currentImageIndex].src}
                alt={images[0].alt}
              />
            </div>
            <div className=" mt-4 ">
              <Carousel>
                <CarouselContent className="-ml-4">
                  {images.map((images, index) => (
                    <CarouselItem key={images.id} className="basis-1/4 ">
                      <img
                        className={`w-full h-full object-cover rounded-md cursor-pointer ${currentImageIndex === index ? "border-4 border-indigo-600 shadow-lg" : ""}`}
                        src={images.src}
                        alt={images.alt}
                        onClick={() => handleClickImage(index)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <h2 className="text-3xl tracking-tight font-medium mb-4">
              Fancy Black Sunglass
            </h2>
            <p className="text-2xl mb-4">$80</p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              tempora odio praesentium inventore exercitationem ex sit magnam a
              sequi quam?
            </p>
            <div className="flex flex-row mt-5 gap-4">
              <Button className="px-10">Add to bag</Button>
              <Heart />
            </div>
            <div className="mt-5">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Features</AccordionTrigger>
                  <AccordionContent>1.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Care</AccordionTrigger>
                  <AccordionContent>1.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Shipping</AccordionTrigger>
                  <AccordionContent>1.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Return</AccordionTrigger>
                  <AccordionContent>1.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}