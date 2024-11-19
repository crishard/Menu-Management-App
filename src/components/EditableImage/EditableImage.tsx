import { EditableImageProps } from "../../interfaces/IEditableImageProps";

export const EditableImage: React.FC<EditableImageProps> = ({
    src,
    alt,
    onImageChange,
    className = "w-16 h-16 object-cover cursor-pointer hover:opacity-80"
}) => {
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative group">
            <img
                src={src}
                alt={alt}
                className={className}
            />
            <label
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
                <span className="text-white">Edit</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
            </label>
        </div>
    );
};