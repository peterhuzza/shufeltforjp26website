"use client";

import ArticleContent from '@/components/article/ArticleContent'; // todo change name of component
import MapEmbed from '@/components/mapEmbed/mapEmbed';

export interface MidsectionProps {
  mapSrc: string;
  content: string | string[]; // TODO: clean up this 
}

export default function Midsection({
  mapSrc,
  content
}: MidsectionProps) {
  return (
    <div className="w-full">
      <section className="relative w-full md:min-h-[75vh] flex flex-col">

        {/* flex-col (Mobile): Stacks elements vertically
          md:flex-row (Desktop): Places them side-by-side 
        */}
        <div className="flex flex-col md:flex-row h-full items-start">

          {/* Map: 
            w-full h-[35vh] (Mobile): Full width, fixed height so it doesn't take up the whole screen
            md:w-1/2 md:h-[75vh] (Desktop): Half width, taller height
          */}
          <div className="w-full h-[35vh] md:w-1/2 md:h-[75vh]">
            <MapEmbed embedSrc={mapSrc} />
          </div>

          {/* Content: 
            w-full (Mobile): Full width
            md:w-1/2 (Desktop): Half width
          */}
          <div className="w-full md:w-1/2 mx-auto py-6 px-5">
            <ArticleContent content={content} />
          </div>

        </div>

      </section>
    </div>
  );
}
