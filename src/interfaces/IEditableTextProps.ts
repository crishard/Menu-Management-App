export interface EditableTextProps {
    field: string;
    value: string;
    setValue: (value: string) => void;
    className?: string;
    inputClassName?: string;
}
