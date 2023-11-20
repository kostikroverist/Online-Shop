import { FC } from "react";
import { IoPersonOutline } from "react-icons/io5";
import CustomLink from "../CustomLink/CustomLink";
import { SlBasket } from "react-icons/sl";
import { LuWallet } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";
import { TbMessage } from "react-icons/tb";
import { FaPercent } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import './style.css';
type Props = {
    isSidebarOpen: boolean,
    closeSideBar: () => void,
}
const SideBarMenu: FC<Props> = ({ isSidebarOpen, closeSideBar }) => {

    return (
        <>
            {isSidebarOpen && (
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    {/* Sidebar content */}
                    <button
                        onClick={closeSideBar}
                        className={`absolute top-2 right-2 p-2 text-black focus:outline-none `}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path fill="#000000" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <main className="flex flex-col  justify-center flex-1 w-5/6 pl-5 ">
                        <CustomLink path={'myProfile'} name="Мій профіль" line={true} icon={<IoPersonOutline size="23" />} />
                        <CustomLink path={'myOrders'} name="Мої замовлення" icon={<SlBasket size="23" />} />
                        <CustomLink path={'myWallet'} name="Мій гаманець" icon={<LuWallet size="23" />} />
                        <CustomLink path={'returnProductService'} name="Сервіс та повернення товару" icon={<MdSecurity size="23" />} />
                        <CustomLink path={'orderTracking'} name="Відслідкувати замовлення" icon={<LuPackageSearch size="23" />} />
                        <CustomLink path={'myMessage'} name="Моє листування" line={true} icon={<TbMessage size="23" />} />
                        <CustomLink path={'discount'} name="Знижки" icon={<FaPercent size="23" />} />
                        <CustomLink path={'action'} name="Акції" line={true} icon={< MdOutlineDiscount size="23" />} />
                        <CustomLink path={'setting'} name="Налаштування" icon={<IoSettingsOutline size="23" />} />

                    </main>
                </div >
            )}
        </>

    );
}

export default SideBarMenu
