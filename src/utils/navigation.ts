import { ROUTES } from '../constants/routes';
import type { MainStackParamList } from '../navigation/types';

export const getRouteParams = <T extends keyof MainStackParamList>(
  route: T,
  params: MainStackParamList[T]
) => ({
  name: route,
  params,
});