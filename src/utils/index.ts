const ASPECT_RATIO_LIST = ['16:9', '4:3'] as const;
type AspectRatioTypes = typeof ASPECT_RATIO_LIST[number];

const CALCED_ASPECT_RATIO_INFO: Record<AspectRatioTypes, number> = {
  '16:9': 9 / 16,
  '4:3': 3 / 4,
};

const calcHeight = (width: number, aspectRatio: AspectRatioTypes = '16:9') => width * CALCED_ASPECT_RATIO_INFO[aspectRatio];

export {
  // eslint-disable-next-line import/prefer-default-export
  calcHeight,
};
