export interface HeaderProps {
    title: string;
    onTitleChange: (newTitle: string) => void;
    leftImage: string;
    rightImage: string;
    onLeftImageChange: (newImage: string) => void;
    onRightImageChange: (newImage: string) => void;
    onTitleChangeSuccess?: () => void;
}