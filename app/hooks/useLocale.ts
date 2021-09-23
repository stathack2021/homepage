import langsDict from "../locales/langDict.json";
// import { useRouter } from "next/router";


const langFilter = (locale: string, langsDict) => {
    let langDict;
    
    for (const key in langsDict) {
        if (langsDict[key][locale]) {
            langDict = {...langDict, [key]: langsDict[key][locale] }
            // langDict[key] = langsDict[key][locale]
        } else {
            langDict = {...langDict, [key]: langFilter(locale, langsDict[key]) }
            // langDict[key] = langFilter(locale, langsDict[key])
        }
    }
    
    return langDict
}

const useLocale = (locale: string) => {
    // const { locale } = useRouter();

    const langDict = langFilter(locale, langsDict);

    console.log(langDict)
    return [ locale, langDict ];
};

export default useLocale;