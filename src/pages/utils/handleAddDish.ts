import toast from "react-hot-toast";
import ICardInterface from "../../interfaces/ICardInterface";

export const handleAddDish = (
    dish: ICardInterface,
    setMenu: (value: React.SetStateAction<ICardInterface[]>) => void
) => {
    setMenu((prev) => [...prev, dish]);
    toast.success('Prato adicionado com sucesso!', {
        duration: 3000,
        position: 'top-center',

    });
};
