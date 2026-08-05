import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;                      // If this exists, it becomes a Link
  onClick?: () => void;               // If this exists (and no href), it's a Button
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline" | "danger" | "refined" | "header";
  className?: string;
  external?: boolean;                 // Force a standard <a> tag (good for external links)
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
  external = false
}) => {

  // 1. The styling is identical for both Buttons and Links


  const variants = {
    primary: `
      bg-btn-base-start-primary 
      text-white text-[11px] font-medium tracking-[0.25em] uppercase 
      shadow-md transition-all duration-300 
      hover:shadow-lg hover:-translate-y-0.5
      active:scale-[0.98] 
      rounded-sm
    `,
    secondary: `
      bg-btn-base-start-secondary 
      text-white text-[11px] font-medium tracking-[0.25em] uppercase 
      shadow-md transition-all duration-300 
      hover:bg-btn-hover-start-secondary 
      active:scale-[0.98] 
      rounded-sm
    `,
    mobile: "p-2 text-brand-color2 hover:bg-brand-color2/10 transition-colors",
    outline: "border-2 border-brand-color text-brand-color hover:bg-brand-color/5 focus:ring-brand-color",
    danger: `
      bg-btn-base-start-danger 
      text-white text-[11px] font-medium tracking-[0.25em] uppercase 
      shadow-md transition-all duration-300 
      hover:shadow-lg hover:-translate-y-0.5
      active:scale-[0.98] 
      rounded-sm
    `,
    refined: `
      bg-brand-color1 
      text-white text-[11px] font-medium tracking-[0.25em] uppercase 
      shadow-md transition-all duration-300 
      hover:shadow-lg hover:-translate-y-0.5
      active:scale-[0.98] 
      rounded-sm
    `,
    header: "relative px-4 overflow-hidden flex justify-center items-center bg-transparent border-t border-brand-color1 border-x border-black border-b-0 text-base text-white transition-all duration-300 hover:border-t-2 hover:border-t-inferno after:absolute after:inset-0 after:pointer-events-none after:bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0)_0%,_transparent_60%)] hover:after:bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.25)_0%,_transparent_60%)] "
  };
  const combinedStyles = `${variants[variant]} ${className} `;

  // 2. CASE A: It's an External Link (e.g., https://google.com)
  // We use a standard <a> tag to avoid Next.js routing logic
  if (href && (external || href.startsWith('http'))) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // 3. CASE B: It's an Internal Link (e.g., /volunteer)
  // We use Next.js <Link> for instant page loads
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // 4. CASE C: It's a regular Button (e.g., Form Submit)

};

export default Button;
