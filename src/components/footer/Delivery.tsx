import { useState } from "react"
import { EditableText } from "../EditTable/EditTable"

export const Delivery = () => {
    const [deliveryFee, setDeliveryFee] = useState<string>("5")
   
    return (
        <p className="text-base font-semibold xl:block hidden">
            Atenção a taxa de entrega.
                <span className="flex items-center">
                    Até 5km fixa de R$ <EditableText
                        field="deliveryFee"
                        value={deliveryFee}
                        setValue={setDeliveryFee}
                    />
                </span>
            
        </p>
    )
}
