import ICardInterface from "../../interfaces/ICardInterface";
import { ActionCard } from "./ActionCard";
import { InformationCard } from "./InformationCard";

interface CardProps extends ICardInterface {
    onEdit: (dish: ICardInterface) => void;
    onDelete: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({ id, nome, image, ingredientes, valor, onEdit, onDelete }) => {
    return (
        <div className="sm:flex block gap-8 items-center relative group">
            <ActionCard onEdit={onEdit} onDelete={onDelete} id={id} image={image} ingredientes={ingredientes} nome={nome} valor={valor} />

            <img src={image} alt={nome} className="lg:w-56 lg:h-56 w-48 h-48 sm:pb-0 pb-5" />
            <InformationCard id={id} image={image} ingredientes={ingredientes} nome={nome} valor={valor} />
        </div>
    );
};