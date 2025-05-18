
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1 className="text-dark-green font-serif text-xl font-bold tracking-wide">
        Jasmin Pemmer
      </h1>
      <p className="text-xs text-light-green font-handwriting mt-0.5">
        Meine Stimme, deine Geschichte.
      </p>
    </div>
  );
};

export default Logo;
