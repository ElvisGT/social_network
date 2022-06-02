import { Children } from "react";

type SizeProps = {children:string}
    
export const Button = ({children}:SizeProps) => {
    return (
        <button className="bg-red-600 w-24 h-7 rounded-3xl active:border-2 hover:bg-red-500 text-white">
            {children}
        </button>
    )
};
