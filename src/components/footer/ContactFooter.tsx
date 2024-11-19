import { useState } from "react";
import iconinstagram from "../../assets/icons8-instagram-48.png";
import iconWhats from "../../assets/icons8-whatsapp-48.png";
import { EditableText } from "../EditTable/EditTable";

export const ContactFooter = () => {
  const [instagram, setInstagram] = useState<string>("@instagram")
  const [whatsapp, setWhatsapp] = useState<string>("(99) 99999-9999")
  return (
    <div>
      <p className="lg:text-3xl text-xl text-center font-semibold">
        Peça sua <span>comida aqui</span>
      </p>
      <div className="sm:flex block justify-center lg:gap-12 gap-3 mt-2 sm:text-lg text-base">
        <div className="flex items-center gap-2">
          <img src={iconinstagram} alt="" className="w-8" />
          <EditableText
            field="instagram"
            value={instagram}
            setValue={setInstagram}
          />
        </div>
        <div className="flex items-center gap-2">
          <img src={iconWhats} alt="" className="w-8" />
          <EditableText
            field="whatsapp"
            value={whatsapp}
            setValue={setWhatsapp}
          />
        </div>
      </div>
    </div>
  )
}
