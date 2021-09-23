import langsDict from "../locales/langDict.json";
import { useRouter } from "next/router";

const langFilter = (locale: string, langsDict: {[key: string]: any}) => {
    let langDict = {}
    
    for (const key in langsDict) {
        if (langsDict[key][locale]) {
            langDict[key] = langsDict[key][locale]
        } else {
            langDict[key] = langFilter(locale, langsDict[key])
        }
    }
    
    return langDict
}

const useLocale = () => {
    const { locale } = useRouter();

    const langDict: { [key: string]: any } = langFilter(locale, langsDict);

    console.log(langDict)
    return [ locale, langDict ];
};

export default useLocale;