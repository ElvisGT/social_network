
type SizeProps = {text:string}
    
export const Button = ({text}:SizeProps) => {
    return (
        <button className="bg-red-600 w-24 h-7 rounded-3xl active:border-2 hover:bg-red-500">
            {text}
        </button>
    )
};
