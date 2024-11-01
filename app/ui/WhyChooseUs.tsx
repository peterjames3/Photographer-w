"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Content from '@/components/ui/Content';

export default function WhyChooseUs() {
  return (
    <div className="w-full md:w-1/3 p-4">
      <Content>
        <h2 className="text-xl font-semibold mb-2 text-white">WHY CHOOSE US?</h2>
        <Accordion type="single" className="text-gray-200" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              100% Responsive Service
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              Our photography services are tailored to your needs, ensuring
              flexibility and responsiveness to deliver exactly what you envision,
              whether it&apos;s for personal, commercial, or event photography.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Clean & Professional Results
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              We provide high-quality, clean, and professionally edited
              photographs that capture the essence of every moment, ensuring
              stunning results every time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              Expertise & Experience
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              With years of experience in studio and outdoor photography, we have
              the expertise to handle any type of shoot, delivering beautiful and
              creative images that stand out.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Content>
    </div>
  );
}
