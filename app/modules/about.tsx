import useLocale from "../hooks/useLocale"

export interface Props {
    locale: string;
}

export const About: React.FC<Props> = (props) => {
    const { locale } = props;
    const t = useLocale(locale);

    return (
        <div className="text-white body-font bg-about" id="about">
            <div className="container lg:px-5 pt-24 pb-20 mx-auto flex flex-wrap">
                <h1 className="text-5xl lg:text-6xl text-white font-en font-semibold title-font mb-2 pl-8 md:pl-16 lg:w-2/5">
                {
                    locale == "ja" && <><span className="text-lg font-jp font-bold">私たちについて</span><br /></>
                }
                ABOUT US
                </h1>
                <div className="lg:w-3/5 pl-8 md:pl-16 pr-8 md:pr-14 lg:pr-0 font-jp font-medium">
                <h2 className="text-3xl xl:text-4xl py-5 md:hidden" >{ t.about.title.br.former}<br/>{ t.about.title.br.latter}</h2>
                <h2 className="text-3xl xl:text-4xl py-5 hidden md:block" >{ t.about.title.no_br}</h2>
                <p className="leading-10 text-base mt-5 w-full xl:w-5/6 2xl:w-2/3">
                    { t.about.content }
                </p>
                <img className="mix-blend-overlay" src="/images/logo_white.svg" alt="Logo" height={'140'} width={'700'} />
                </div>
            </div>
        </div>
    )
}
