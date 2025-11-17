"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Section } from "../ui/section";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    quote:
      "Lucca is a rare talent. His ability to blend technical expertise with creative vision resulted in a product that exceeded all our expectations. A true professional and a pleasure to work with.",
  },
  {
    id: "testimonial-2",
    name: "John Smith",
    title: "Art Director, Creative Co.",
    quote:
      "The level of detail and polish in Lucca's work is astounding. He took our concept and transformed it into a digital masterpiece. His passion for quality is evident in every pixel.",
  },
  {
    id: "testimonial-3",
    name: "Emily White",
    title: "Founder, Startup Hub",
    quote:
      "Working with Lucca was a game-changer for our startup. He's not just a developer; he's a partner who genuinely invests in the success of the project. Highly recommended!",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" title="What Others Say" subtitle="Trust and satisfaction are the cornerstones of my collaborations.">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.id
            );
            return (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                       <div className="flex gap-1 text-primary mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary"/>)}
                       </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex items-center flex-col">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                        <div className="mt-2">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </Section>
  );
}
