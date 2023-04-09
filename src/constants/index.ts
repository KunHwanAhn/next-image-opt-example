export const PATH = {
  HOME: '/',
  IMG_VS_NEXT_IMAGE: '/img-vs-next-image',
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
];
