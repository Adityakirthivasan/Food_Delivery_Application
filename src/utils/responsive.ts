import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

export const scale = (size: number) =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (
  size: number,
  factor = 0.5,
) =>
  size + (scale(size) - size) * factor;

export { width, height };