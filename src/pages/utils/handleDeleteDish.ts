import toast from "react-hot-toast";

export const handleDeleteDish = (setMenu: (value: any) => void, dishToDelete:  string | null, setDishToDelete: (value: React.SetStateAction<string | null>) => void) => {
    if (dishToDelete) {
        setMenu((prev: any[]) => prev.filter(dish => dish.id !== dishToDelete));
        toast.success('Prato removido com sucesso!', {
            duration: 3000,
            position: 'top-center',
            icon: '🗑️',

        });
        setDishToDelete(null);
    }
}
