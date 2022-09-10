export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

export type ButtonVariant = "primary" | "secondary" | "text";
