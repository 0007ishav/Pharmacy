import { useMediaQuery } from '@react-hook/media-query';

export const useScreenSize = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return isLargeScreen;
};
