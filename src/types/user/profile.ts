export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: AvatarData;
  reputation: ReputationData;
}

export interface AvatarData {
  url: string;
  model3dUrl?: string;
  lastUpdated: Date;
}

export interface ReputationData {
  rating: number;
  badges: Badge[];
  stats: UserStats;
}