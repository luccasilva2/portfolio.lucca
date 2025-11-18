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
      "Lucca é um talento raro. Sua capacidade de mesclar expertise técnica com visão criativa resultou em um produto que excedeu todas as nossas expectativas. Um verdadeiro profissional e um prazer de trabalhar.",
  },
  {
    id: "testimonial-2",
    name: "John Smith",
    title: "Diretor de Arte, Creative Co.",
    quote:
      "O nível de detalhe e polimento no trabalho de Lucca é impressionante. Ele pegou nosso conceito e o transformou em uma obra-prima digital. Sua paixão pela qualidade é evidente em cada pixel.",
  },
  {
    id: "testimonial-3",
    name: "Emily White",
    title: "Fundadora, Startup Hub",
    quote:
      "Trabalhar com Lucca foi um divisor de águas para nossa startup. Ele não é apenas um desenvolvedor; é um parceiro que investe genuinamente no sucesso do projeto. Altamente recomendado!",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" title="O Que Dizem" subtitle="Confiança e satisfação são as pedras angulares das minhas colaborações.">
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
