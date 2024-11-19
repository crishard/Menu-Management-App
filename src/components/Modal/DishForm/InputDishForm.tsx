interface InputDishForm {
    label: string,
    value: string | number | undefined;
    functionChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    errors: any,
    type: string
}
export const InputDishForm = ({ label, value, functionChange, errors, type }: InputDishForm) => {
    return (
        <div>
            <label className="block text-gray-700">{label}</label>
             <input
                type={type}
                value={value}
                onChange={functionChange}
                className="w-full p-2 border rounded text-gray-900"
            />
            
            {errors.valor && <p className="text-red-500 text-sm">{errors.valor}</p>}
        </div>
    )
}
