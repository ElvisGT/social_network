
const networkLinks = [
    {id:1,href:"exaple.com",name:"Linkedin"},
    {id:2,href:"exaple.com",name:"Github"},
    {id:3,href:"exaple.com",name:"Facebook"},
    {id:4,href:"exaple.com",name:"Twitter"},

];


export const Footer = () => {
    return (
        <div className="bg-red-600 shadow w-full h-28 absolute inset-y-full text-white text-sm">
            <div className="flex  h-20 flex-row justify-evenly items-center"> 
                {
                    networkLinks.map(item => (
                        <a href={item.href} className="py-2 pr-4 pl-3">{item.name}</a>
                    ))
                }
            </div>
            <h3 className="text-center italic">All right reserved</h3>
        </div>
    )
}
