"use client";

import Textfield from '@/components/text/mdfield';
import MapEmbed from '@/components/mapEmbed/mapEmbed';
import { PublicImage } from '@/utils/getImage';
import { StaticImageData } from 'next/image';

export interface MidsectionProps {
  LeftImage: string | StaticImageData;
  LeftImageAltText: string;
  topRight: string | string[];
  mapSrc: string;
  content: string | string[]; // TODO: clean up this 
}

export default function Midsection({
  LeftImage,
  LeftImageAltText,
  topRight,
  mapSrc,
  content
}: MidsectionProps) {
  return (
    <div className=' flex-row'>
      {/* Added scroll-mt-20 to ensure the section isn't covered by the sticky header */}
      <div id="agenda" className="w-full scroll-mt-20">
        <section className="relative w-full md:min-h-[75vh] flex flex-col bg-white border-b-2 border-b-inferno">
          {/* flex-col (Mobile): Stacks elements vertically
          md:flex-row (Desktop): Places them side-by-side 
        */}
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="relative flex items-center justify-start bg-transparent w-full md:w-1/2 px-5 overflow-hidden">
              <PublicImage className='object-center object-contain shadow-2xl' alt={LeftImageAltText} src={LeftImage} fill />
            </div>
            <div className="flex w-full md:w-1/2 px-5">
              <Textfield className='' content={topRight} />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full">
        <section className="relative w-full md:min-h-[75vh] flex flex-col bg-white">
          {/* flex-col (Mobile): Stacks elements vertically
          md:flex-row (Desktop): Places them side-by-side 
        */}
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="w-full h-[35vh] md:w-1/2 md:h-[75vh]">
              <MapEmbed embedSrc={mapSrc} />
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2 px-5">
              <Textfield className='' content={content} />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
