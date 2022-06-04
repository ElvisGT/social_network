export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>,React.AriaAttributes {}

export const Button: React.FC<ButtonProps> = (
  {
    children,
    className,
    ...rest
  }) => {

  const defaultBtn = "flex items-center justify-center px-4 w-auto bg-red-600 h-7 rounded-3xl active:border-2 hover:bg-red-500 text-white m-1";

  return (
    <button
      className={`${defaultBtn} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
};
