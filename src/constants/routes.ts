export const ROUTES = {
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  SCREEN_ONE: 'One',
  SCREEN_TWO: 'Two',
} as const;

export type RouteKeys = keyof typeof ROUTES;