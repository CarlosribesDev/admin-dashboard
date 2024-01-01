import { PopupContext } from "./popupContext";
import{ ReactNode, useState } from 'react';
import { Popup, PopupType } from "./popupTypes";

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popup, setPopup] = useState<Popup | null>(null);

    const showPopup = (type: PopupType, title: string, message: string) => {
        setPopup({ type, title, message });
    };

    const hidePopup = () => {
        setPopup(null);
    };

    return (
        <PopupContext.Provider value={{ popup, showPopup, hidePopup }}>
            {children}
        </PopupContext.Provider>
    );
};