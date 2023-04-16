export const PATH = {
  HOME: '/',
  IMG_VS_NEXT_IMAGE: '/img-vs-next-image',
  PROPS_SRC: '/props-src',
  PROPS_WIDTH: '/props-width',
  PROPS_QUALITY: '/props-quality',
  IMAGE_TYPES: '/image-types',
} as const;

interface Page {
  href: string;
  title: string;
}
export const PAGES: Page[] = [
  {
    href: PATH.HOME,
    title: 'Home',
  },
  {
    href: PATH.IMG_VS_NEXT_IMAGE,
    title: 'img vs next/image',
  },
  {
    href: PATH.PROPS_SRC,
    title: 'props - src',
  },
  {
    href: PATH.PROPS_WIDTH,
    title: 'props - width',
  },
  {
    href: PATH.PROPS_QUALITY,
    title: 'props - quality',
  },
  {
    href: PATH.IMAGE_TYPES,
    title: 'Image types',
  },
];
