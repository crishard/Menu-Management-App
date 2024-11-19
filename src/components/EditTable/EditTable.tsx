import { useState } from "react";
import { EditableTextProps } from "../../interfaces/IEditableTextProps";

export const EditableText: React.FC<EditableTextProps> = ({ 
    field, 
    value, 
    setValue, 
    className = "cursor-pointer hover:bg-yellow-400 px-2 py-1 rounded",
    inputClassName = "bg-white w-32 text-gray-950 px-2 py-1 rounded outline-none"
}) => {
    const [editingField, setEditingField] = useState<string | null>(null)

    const handleEdit = () => {
        if (editingField === field) {
            setEditingField(null)
            return
        }
        setEditingField(field)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setValue(e.currentTarget.value)
            setEditingField(null)
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setEditingField(null)
    }

    if (editingField === field) {
        return (
            <input
                type="text"
                defaultValue={value}
                className={inputClassName}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                autoFocus
            />
        )
    }

    return (
        <span
            onClick={handleEdit}
            className={className}
        >
            {value}
        </span>
    )
}