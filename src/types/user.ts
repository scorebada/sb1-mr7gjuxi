export interface User {
  id: string;
  name: string;
  email: string;
  avatar: {
    url: string;
    model3dUrl?: string;
  };
  reputation: {
    rating: number;
    badges: Badge[];
    eventsHosted: number;
    eventsAttended: number;
  };
  preferences: UserPreferences;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  achievedAt: Date;
}

export interface UserPreferences {
  theme: 'DARK' | 'LIGHT';
  notifications: NotificationPreferences;
  eventTypes: EventType[];
}