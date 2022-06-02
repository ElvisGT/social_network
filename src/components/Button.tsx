export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>,React.AriaAttributes {}


export const Button  : React.FC<ButtonProps> = ({children,className,...rest}) => {
    const classDefault = "flex item-center justify-center px-4 w-auto bg-red-600 h-7 rounded-3xl active:border-2 hover:bg-red-500 text-white"
    return (
        <button 
            {...rest}
            className={className ? className : classDefault}
            >
            {children}
        </button>
    )
};
