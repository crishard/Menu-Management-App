import ICardInterface from "./ICardInterface";

export interface DishFormProps {
    onSubmit: (dish: ICardInterface) => void;
    initialData?: ICardInterface | null;
    onClose: () => void;
}