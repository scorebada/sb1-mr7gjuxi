export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: string;
  route: string;
}