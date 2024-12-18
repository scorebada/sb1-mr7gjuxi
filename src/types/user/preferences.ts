import { EventType } from '../event/base';

export interface UserPreferences {
  theme: ThemePreference;
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
  eventPreferences: EventPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  eventReminders: boolean;
  marketingUpdates: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'PUBLIC' | 'FRIENDS' | 'PRIVATE';
  showAttendedEvents: boolean;
  showUpcomingEvents: boolean;
}

export interface EventPreferences {
  preferredTypes: EventType[];
  maxDistance: number;
  priceRange: {
    min: number;
    max: number;
  };
}