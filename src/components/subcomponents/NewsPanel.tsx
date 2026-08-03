import React from 'react';
import Link from 'next/link';
import Button from '@/components/buttons/button'

// Exporting this interface allows other components (and the Builder) to know what data structure to use.
export interface NewsItemData {
  date: string;
  title: string;
  summary: string;
  linkHref: string;
}

export default function NewsPanel({ date, title, summary, linkHref }: NewsItemData) {
  return (
    <div className="flex flex-col h-full border border-gray-200 p-6 bg-white shadow-sm">
      <div className="flex flex-col h-full">

        {/* Date Tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-black uppercase border-t-inferno border-t-2 ">
            {date}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-tight">
          {title}
        </h3>

        {/* Summary Text */}
        <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
          {summary}
        </p>

        {/* Read More Link */}
        <div className="mt-auto border-t-2 border-inferno pt-4 text-right">
          <Button
            href={linkHref || "#"}
            variant='secondary'
            className="py-2 px-4 inline-flex items-center text-sm font-bold text-slate-900 hover:shadow-md trasition-shadow duration-200 uppercase tracking-wide transition-colors"

          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

      </div>
    </div>
  );
}
