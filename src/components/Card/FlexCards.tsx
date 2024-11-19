import ICardInterface from "../../interfaces/ICardInterface";
import { Card } from "./Card";

interface FlexCards {
  menu: ICardInterface[],
  setEditingDish: (value: React.SetStateAction<ICardInterface | null>) => void,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void,
  confirmDelete: (id: string) => void,
}

export const FlexCards = ({ menu, setEditingDish, setIsModalOpen, confirmDelete }: FlexCards) => {
  return (
    <section className="grid xl:grid-cols-2 gap-16 pb-16 pt-20">
      {menu.map((prato) => (
        <Card
          key={prato.id}
          {...prato}
          onEdit={(dish) => {
            setEditingDish(dish);
            setIsModalOpen(true);
          }}
          onDelete={confirmDelete}
        />
      ))}
    </section>
  )
}
