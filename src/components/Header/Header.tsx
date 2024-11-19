import { HeaderProps } from '../../interfaces/IHeaderProps';
import { EditableImage } from '../EditableImage/EditableImage';
import { EditableText } from '../EditTable/EditTable';

export const Header: React.FC<HeaderProps> = ({
    title,
    onTitleChange,
    leftImage,
    rightImage,
    onLeftImageChange,
    onRightImageChange,
    onTitleChangeSuccess
}) => {

    return (
        <div className="flex items-center justify-center gap-8">
            <EditableImage
                src={leftImage}
                alt="Left decoration"
                onImageChange={onLeftImageChange}
            />
            <EditableText
                field="title"
                value={title}
                setValue={(newTitle) => {
                    onTitleChange(newTitle);
                    onTitleChangeSuccess?.();
                }}
                className="cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded text-6xl font-bold"
                inputClassName="bg-white text-6xl font-bold text-gray-950 px-4 py-2 rounded outline-none text-center w-96"
            />
            <EditableImage
                src={rightImage}
                alt="Right decoration"
                onImageChange={onRightImageChange}
            />
        </div>
    );
};
