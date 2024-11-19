export const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<any>>,
    setErrors: React.Dispatch<React.SetStateAction<any>>,
) => {
    const file = e.target.files?.[0];
    if (file) {
        if (file.size > 5000000) {
            setErrors((prev: any) => ({ ...prev, image: "A imagem deve ter menos de 5MB" }));
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prev: any) => ({
                ...prev,
                image: reader.result as string,
            }));
            setErrors((prev: any) => ({ ...prev, image: undefined }));
        };
        reader.onerror = () => {
            setErrors((prev: any) => ({ ...prev, image: "Erro ao carregar a imagem" }));
        };
        reader.readAsDataURL(file);
    }
};
