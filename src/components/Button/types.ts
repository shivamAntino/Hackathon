export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
  variant: ButtonVariant;
}

export type ButtonVariant = "primary" | "secondary" | "text";
