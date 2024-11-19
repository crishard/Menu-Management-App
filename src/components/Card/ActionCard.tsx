import ICardInterface from "../../interfaces/ICardInterface";

interface CardProps extends ICardInterface {
    onEdit: (dish: ICardInterface) => void;
    onDelete: (id: string) => void;
}

export const ActionCard = ({ id, nome, image, ingredientes, valor, onEdit, onDelete }: CardProps) => {
    return (
        <div className="absolute top-0 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
                onClick={() => onEdit({ id, nome, image, ingredientes, valor })}
                className="bg-yellow-500 px-3 py-1 rounded-full mr-2 hover:bg-yellow-600 text-3xl"
            >
                ✎
            </button>
            <button
                onClick={() => onDelete(id)}
                className="bg-gray-400 px-3 py-1 rounded-full hover:bg-gray-700 text-3xl"
            >
                ✕
            </button>
        </div>
    )
}
