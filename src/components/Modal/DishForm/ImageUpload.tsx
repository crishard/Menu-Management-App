interface ImageUpload{
    image: string | undefined,
    errors: any,
    handleImageUpload:  (e: React.ChangeEvent<HTMLInputElement>) => void,
}
export const ImageUpload = ({image, errors, handleImageUpload}: ImageUpload) => {
    return (
        <div>
            <label className="block text-gray-700">Imagem</label>
            <div className="relative flex">

                <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                    Escolher arquivo
                </label>
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
            </div>
            {image ? (
                <p className="mt-2 text-sm text-gray-700">Arquivo carregado com sucesso!</p>
            ) : (
                <p className="mt-2 text-sm text-gray-500">Nenhum arquivo selecionado</p>
            )}
            {image && (
                <img
                    src={image}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                />
            )}
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>
    )
}
