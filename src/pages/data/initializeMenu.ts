import { cardapioBase } from "../../data/data";

export const initializeMenu = () => {
    const saved = localStorage.getItem("menuItems");
    return saved
        ? JSON.parse(saved)
        : cardapioBase.map((item) => ({
              ...item,
              id: crypto.randomUUID(),
          }));
};
