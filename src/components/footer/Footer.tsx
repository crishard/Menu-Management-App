import { useState } from "react";
import iconPizza from "../../assets/icons8-kawaii-pizza-100.png";
import { EditableText } from "../EditTable/EditTable";
import { ContactFooter } from "./ContactFooter";
import { Delivery } from "./Delivery";

export const Footer = () => {
    const [logo, setLogo] = useState<string>("Seu negócio")

    return (
        <footer className="py-12 flex gap-12 items-center lg:justify-end justify-center bg-yellow-500 rounded-xl lg:px-20 px-10 mt-16">
            <div className="xl:flex lg:block absolute left-12 xl:left-24 items-center bg-gray-200 rounded-r-full px-4 py-16 text-gray-950 hidden">
                <img src={iconPizza} alt="logo" />
                <div className="xl:text-2xl text-xl font-semibold xl:pt-0 pt-3">
                    <EditableText
                        field="logo"
                        value={logo}
                        setValue={setLogo}
                    />
                </div>
            </div>
            <ContactFooter />
            <Delivery />
        </footer>
    )
}