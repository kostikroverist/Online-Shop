import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
    name: string
    path: string,
    icon?: React.ReactNode
    line?: boolean;
}

const CustomLink: FC<Props> = ({ path, icon, name, line }) => {
    return (
        <>
            <div className={`pt-3`}>
                <div className="p-2 flex items-center">
                    {icon}
                    <Link to={path} >
                        <p className="text-black font-inter font-medium text-xl leading-7 tracking-wide pl-5">
                            {name}
                        </p>
                    </Link>
                </div>
            </div>
            <div className={`${line ? 'border-b border-solid border-blue-400  bg-opacity-70 ml-8 mt-1' : ''}`}></div>
        </>

    )
}

export default CustomLink
