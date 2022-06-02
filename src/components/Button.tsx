import { JSXElementConstructor, ReactElement } from "react";

interface ButtonProps {
    name?:string
    children:ReactElement<any,string | JSXElementConstructor<any>> | string
    className:string
}


export const Button : React.FC<ButtonProps> = ({children,className}) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
};
