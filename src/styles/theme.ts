export const COLORS = {
  background: '#000000',
  surface: '#121212',
  neonBlue: '#00f3ff',
  neonGreen: '#39ff14',
  neonPurple: '#bf00ff',
  text: {
    primary: '#ffffff',
    secondary: '#b3b3b3',
    accent: '#00f3ff',
  }
};

export const SHADOWS = {
  neon: {
    shadowColor: COLORS.neonBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  }
};

export const ANIMATIONS = {
  transition: {
    duration: 300,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  glow: {
    duration: 2000,
    easing: 'ease-in-out',
  }
};