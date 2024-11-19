import { z } from "zod";
export const DishSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório"),
    ingredientes: z.string().min(1, "Os ingredientes são obrigatórios"),
    valor: z.number().positive("O valor deve ser maior que 0"),
    image: z.string().url("A imagem deve ser uma URL válida"),
    id: z.string().uuid("ID inválido")
});
