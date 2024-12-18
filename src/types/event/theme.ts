export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  assets: ThemeAssets;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface ThemeAssets {
  modelUrl?: string;
  backgroundImage?: string;
  musicUrl?: string;
}