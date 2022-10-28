import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div className="App-header">
        <div className="Message">{t("welcomeMessage")}</div>
        <button
          className="btn Button-style"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "tr-TR" ? "en-US" : "tr-TR")
          }
        >
          {t("HomeScreen.changeLanguage")}
        </button>
      </div>
    </div>
  );
}
