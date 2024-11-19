import { useState } from "react";
import { z } from "zod";
import ICardInterface from "../../../interfaces/ICardInterface";
import { DishFormProps } from "../../../interfaces/IDishForm";
import { ActionDishForm } from "./ActionDishForm";
import { DishSchema } from "./DishSchema";
import { ImageUpload } from "./ImageUpload";
import { InputDishForm } from "./InputDishForm";
import { handleImageUpload } from "./utils/handleImageUpload";
import { handleSubmit } from "./utils/handleSubmit";

type ValidationErrors = Partial<Record<keyof z.infer<typeof DishSchema>, string>>;

export const DishForm: React.FC<DishFormProps> = ({ onSubmit, initialData, onClose }) => {
    const [formData, setFormData] = useState<Partial<ICardInterface>>({
        nome: initialData?.nome || '',
        ingredientes: initialData?.ingredientes || '',
        valor: initialData?.valor,
        image: initialData?.image || '',
        id: initialData?.id || crypto.randomUUID()
    });

    const [errors, setErrors] = useState<ValidationErrors>({});

    return (
        <form onSubmit={(e) => handleSubmit(e, formData, DishSchema, setErrors, onSubmit, onClose)} className="space-y-4">
            <InputDishForm label={"Nome do Prato"} value={formData.nome} functionChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))} errors={errors} type={"text"} />

            <div>
                <label className="block text-gray-700">Ingredientes</label>
                <textarea
                    value={formData.ingredientes}
                    onChange={(e) => setFormData(prev => ({ ...prev, ingredientes: e.target.value }))}
                    className="w-full p-2 border rounded text-gray-900" />
                {errors.ingredientes && <p className="text-red-500 text-sm">{errors.ingredientes}</p>}
            </div>

            <InputDishForm label={"Valor"} value={formData.valor} functionChange={(e) => setFormData(prev => ({ ...prev, valor: Number(e.target.value) }))} errors={errors} type={"number"} />

            <ImageUpload image={formData.image} errors={errors} handleImageUpload={(e) => handleImageUpload(e, setFormData, setErrors)} />

            <ActionDishForm onClose={onClose} initialData={initialData} />
        </form>
    );
};
