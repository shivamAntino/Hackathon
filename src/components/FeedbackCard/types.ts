export interface IFeedbackCardProps {
    userName : string;
    userDesignation : string;
    userPic : string;
    feedbacks : Feedback[];
    overAllFeedback? : string;
    isPending : boolean;
}

export interface Feedback {
    name :string;
    value : number | null;
}