import { ModalProps } from "../../interfaces/IModal";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-end">
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-3xl"
                    >
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};