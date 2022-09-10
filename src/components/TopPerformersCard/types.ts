export interface ITopPerformersCard {
  topPerformers: TopPerformer[];
  headerText: string;
  footerText: string;
}

export interface TopPerformer {
  userName: string;
  userDesignation: string;
  userPic: string;
  rating: number;
}
