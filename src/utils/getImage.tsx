import Image, { ImageProps, StaticImageData } from 'next/image';
import { getPublicPath } from '@/utils/paths';

interface PublicImageProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData;
}

export const PublicImage = ({ src, ...props }: PublicImageProps) => {
  const finalSrc = typeof src === 'string' ? getPublicPath(src) : src;

  return (
    <Image
      src={finalSrc}
      {...props}
    />
  );
};
