export interface INavbarProps {
  children: React.ReactNode;
}

export interface IDashboardNavbarProps {
  greeting: string;
  user: User;
}

export interface User {
  userName: string;
  userPic: string;
}
