export interface EditableImageProps {
    src: string;
    alt: string;
    onImageChange: (newImage: string) => void;
    className?: string;
}
