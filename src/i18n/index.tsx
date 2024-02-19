import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from "./translations/en.json"
import ptJSON from "./translations/pt.json"

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        en: enJSON,
        pt: ptJSON
    }
})

export default i18next;