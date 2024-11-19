import ICardInterface from "../../interfaces/ICardInterface"

interface InformationCardProps extends ICardInterface { }

export const InformationCard = ({ nome, ingredientes, valor }: InformationCardProps) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl pb-4">{nome}</h2>
      <p>{ingredientes}</p>
      <p className="font-semibold pt-3 text-lg">R$ {valor}</p>
    </div>
  )
}
