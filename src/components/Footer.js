/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t, i18n } = useTranslation("common");

  const footerStyle = {
    backgroundColor: "#D30A40",
    color: "white",
    position: "absolute",
    bottom: 0,
    height: "2.5rem",
    width: "100%",
  };
  return (
    <footer style={footerStyle}>
      <p>{t("madeby.text")}</p>
    </footer>
  );
}
