import { useEffect } from "react";

export const useSyncImages = (leftImage: string, rightImage: string) => {
    useEffect(() => {
        localStorage.setItem("leftImage", leftImage);
        localStorage.setItem("rightImage", rightImage);
    }, [leftImage, rightImage]);
};
