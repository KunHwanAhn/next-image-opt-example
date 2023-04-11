export const PATH = {
  HOME: '/',
  IMG_VS_NEXT_IMAGE: '/img-vs-next-image',
  TYPE_OF_SRC: '/type-of-src',
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
    href: PATH.TYPE_OF_SRC,
    title: 'src 유형',
  },
];
