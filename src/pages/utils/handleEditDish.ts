import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import ICardInterface from "../../interfaces/ICardInterface";

export const handleEditDish = (
    updatedDish: ICardInterface,
    setMenu: Dispatch<SetStateAction<ICardInterface[]>>,
    setEditingDish: Dispatch<SetStateAction<ICardInterface | null>>
) => {
    setMenu((prev) =>
        prev.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish))
    );
    setEditingDish(null);
    toast.success('Prato atualizado com sucesso!', {
        duration: 3000,
        position: 'top-center',
    });
};
