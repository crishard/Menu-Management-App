import { ZodSchema } from "zod";

export const handleSubmit = (
    e: React.FormEvent,
    formData: any,
    schema: ZodSchema<any>,
    setErrors: React.Dispatch<React.SetStateAction<any>>,
    onSubmit: (data: any) => void,
    onClose: () => void
) => {
    e.preventDefault();
    const result = schema.safeParse(formData);

    if (!result.success) {
        const validationErrors: Record<string, string> = {};
        result.error.errors.forEach((error) => {
            const field = error.path[0] as string;
            validationErrors[field] = error.message;
        });
        setErrors(validationErrors);
        return;
    }

    setErrors({});
    onSubmit(result.data);
    onClose();
};
