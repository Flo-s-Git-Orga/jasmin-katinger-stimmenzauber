import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const scrollToVideo = () => {
    const videoSection = document.querySelector<HTMLElement>('.py-16.bg-beige');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVideoVisible) {
          setIsVideoVisible(true);
          if (videoRef.current) {
            videoRef.current.src = videoRef.current.src.replace('autoplay=0', 'autoplay=1');
          }
        }
      });
    }, { threshold: 0.5 });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVideoVisible]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        ✅ Index.tsx wird korrekt geladen
      </h1>

      <Button onClick={scrollToVideo}>Zum Video scrollen</Button>

      <div className="py-16 bg-beige mt-10">
        <iframe
          ref={videoRef}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xyz?autoplay=0"
          title="Testvideo"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      <Accordion type="single" collapsible className="w-full mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>Was ist das hier?</AccordionTrigger>
          <AccordionContent>
            Dies ist eine Testseite zur Fehleranalyse.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Index;
