// @ts-ignore
const tg = window.Telegram.WebApp;
// console.log(tg.themeParams);
type MainButtonParams = {
  text: string;
  onBtnClick: () => void;
  color?: string;
};

type MainButton = (params: MainButtonParams) => {
  showMainButton: () => void;
  hideMainButton: () => void;
};

type PopupParams = {
  message: string;
  title: string;
};

type Popup = (params: PopupParams) => {
  showPopup: () => void;
};

const useTelegram = () => {
  const expandApp = () => {
    tg.expand();
  };

  const mainButton: MainButton = ({ text, onBtnClick, color = "#000000" }) => {
    tg.MainButton.setParams({ color, text });
    tg.MainButton.onClick(onBtnClick);

    const showMainButton = () => {
      tg.MainButton.show();
    };
    const hideMainButton = () => {
      tg.MainButton.hide();
    };
    return { hideMainButton, showMainButton };
  };

  const popup: Popup = ({ message, title }) => {
    const showPopup = () => {
      tg.showPopup({ message, title });
    };

    return { showPopup };
  };

  const getUserData = () => {
    return tg.initDataUnsafe.user.first_name;
  };
  return { expandApp, getUserData, mainButton, popup };
};

export default useTelegram;
