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

  return { expandApp, mainButton };
};

export default useTelegram;
