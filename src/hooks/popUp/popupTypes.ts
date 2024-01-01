
export enum PopupType {     
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
}

export interface Popup {
    type: PopupType;
    title: string;
    message: string;
}

export interface PopupContextProps {
    popup: Popup | null;
    showPopup: (type: PopupType, title: string, message: string) => void;
    hidePopup: () => void;
}