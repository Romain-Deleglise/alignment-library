'use client'

import { useState } from 'react';
import { Info } from 'lucide-react';

type Props = {
  term: string;
  definition: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export default function Tooltip({ term, definition, children, compact = false }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-help border-b-2 border-dotted border-primary/50 hover:border-primary transition-colors"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children || term}
        {!compact && <Info className="inline w-3 h-3 ml-1 text-primary/60" />}
      </span>

      {isVisible && (
        <span
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-sm bg-popover text-popover-foreground border rounded-lg shadow-lg max-w-xs animate-in fade-in zoom-in-95 duration-200"
          style={{ minWidth: '200px' }}
        >
          {!children && <strong className="block mb-1">{term}</strong>}
          <span className="text-muted-foreground">{definition}</span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover" />
        </span>
      )}
    </span>
  );
}
