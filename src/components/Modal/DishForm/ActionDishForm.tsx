import ICardInterface from "../../../interfaces/ICardInterface";

interface ActionDishForm {
    onClose: () => void;
    initialData: ICardInterface | null | undefined;
}

export const ActionDishForm = ({onClose, initialData}: ActionDishForm) => {
    return (
        <div className="flex justify-end gap-2">
            <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-900"
            >
                Cancelar
            </button>
            <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 text-white"
            >
                {initialData ? 'Salvar' : 'Criar'}
            </button>
        </div>
    )
}
