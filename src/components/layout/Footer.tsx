
const networkLinks = [
    {id:1,href:"exaple.com",name:"Linkedin"},
    {id:2,href:"exaple.com",name:"Github"},
    {id:3,href:"exaple.com",name:"Facebook"},
    {id:4,href:"exaple.com",name:"Twitter"},

];


export const Footer = () => {
    return (
        <div className="bg-red-600 shadow w-full h-28 absolute inset-y-full text-white text-sm">
            <div className="max-w-6xl mx-auto px-5 xl:px-0 h-14 flex items-center justify-center">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"> 
                    {
                        networkLinks.map(item => (
                            <li key={item.id}>
                                <a href={item.href} className="py-2 pr-4 pl-3">{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                </div>
            <h3 className="text-center italic">All right reserved</h3>
        </div>
    )
}
