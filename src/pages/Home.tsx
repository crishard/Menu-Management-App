
import { useEffect, useState } from "react"
import { Toaster, toast } from 'react-hot-toast'
import img from "../assets/icons8-add-48.png"
import imgBase from "../assets/icons8-logo-42.png"
import { FlexCards } from "../components/Card/FlexCards"
import { ConfirmationModal } from "../components/ConfirmationModal/ConfirmationModal"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/Header/Header"
import { DishForm } from "../components/Modal/DishForm/DishForm"
import { Modal } from "../components/Modal/Modal"
import PDFGeneratorButton from "../components/PDFGeneratorButton/PDFGeneratorButton"
import ICardInterface from "../interfaces/ICardInterface"
import { initializeMenu } from "./data/initializeMenu"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useSyncImages } from "./hooks/useSyncImages"
import { handleAddDish } from "./utils/handleAddDish"
import { handleDeleteDish } from "./utils/handleDeleteDish"
import { handleEditDish } from "./utils/handleEditDish"

export const Home = () => {
    const [title, setTitle] = useState<string>("CARDÁPIO");
    const [leftImage, setLeftImage,] = useLocalStorage("leftImage", imgBase);
    const [rightImage, setRightImage] = useLocalStorage("rightImage", imgBase);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDish, setEditingDish] = useState<ICardInterface | null>(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [dishToDelete, setDishToDelete] = useState<string | null>(null);
    const [menu, setMenu] = useState(initializeMenu());

    useSyncImages(leftImage, rightImage);

    useEffect(() => {
        localStorage.setItem('menuItems', JSON.stringify(menu));
    }, [menu]);

    const confirmDelete = (id: string) => {
        setDishToDelete(id);
        setIsConfirmModalOpen(true);
    };

    return (
        <main className="py-36 px-10 lg:px-24 bg-gray-200 text-gray-800">
            <Toaster />
            <Header
                title={title} onTitleChange={setTitle}
                leftImage={leftImage} rightImage={rightImage}
                onLeftImageChange={setLeftImage} onRightImageChange={setRightImage}
                onTitleChangeSuccess={() =>
                    toast.success('Título atualizado!', {
                        duration: 2000,
                        position: 'top-center'
                    })}
            />

            <FlexCards menu={menu} setEditingDish={(dish) => { setEditingDish(dish) }} setIsModalOpen={() => { setIsModalOpen(true) }} confirmDelete={confirmDelete} />

            <div className="flex justify-center gap-10">
                <button className=" flex items-center justify-center"
                    onClick={() => {
                        setEditingDish(null);
                        setIsModalOpen(true);
                    }}>
                    <img src={img} alt="" className="w-16 h-16" />
                </button>
                <PDFGeneratorButton />
            </div>

            <Modal isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingDish(null);
                }}>
                <DishForm
                    onSubmit={editingDish ? (dish) => handleEditDish(dish, setMenu, setEditingDish) : (dish) => handleAddDish(dish, setMenu)}
                    initialData={editingDish}
                    onClose={() => {
                        setIsModalOpen(false);
                        setEditingDish(null);
                    }}
                />
            </Modal>

            <ConfirmationModal
                isOpen={isConfirmModalOpen}
                onClose={() => {
                    setIsConfirmModalOpen(false);
                    setDishToDelete(null);
                }}
                onConfirm={() => handleDeleteDish(setMenu, dishToDelete, setDishToDelete)}
                title="Confirmar exclusão"
                message="Tem certeza que deseja excluir este prato? Esta ação não pode ser desfeita."
            />
            <Footer />
        </main>
    );
};
