import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Value: React.FC<Props> = (props) => {
    const { locale } = props;
  const t = useLocale(locale);

    return (
      <div className="text-white body-font bg-value bg-no-repeat bg-cover" id="value">
      <div className="container px-5 py-16 lg:py-36 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-en font-semibold title-font text-white mb-4">
            {
              locale == "ja" && <><span className="text-lg font-jp font-bold">バリュー</span><br /></>
            }
            VALUE
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div className="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span className="text-base font-en font-semibold">value</span><br />
                  <span className="text-6xl font-en font-semibold">01</span>
                </div>
                <div className="w-3/4 text-xl xl:text-2xl font-jp font-medium text-left pl-5">{ t.value.first.title.former }<br />{ t.value.first.title.latter }</div>
              </div>
              <p className="leading-relaxed font-jp font-medium text-base text-left">
                { t.value.first.content }
              </p>
            </div>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div className="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span className="text-base font-en font-semibold">value</span><br />
                  <span className="text-6xl font-en font-semibold">02</span>
                </div>
                <div className="w-3/4 text-xl xl:text-2xl font-jp font-medium text-left pl-5">{ t.value.second.title.former }<br />{ t.value.second.title.latter }</div>
              </div>
              <p className="leading-relaxed font-jp font-medium text-base text-left">
                { t.value.second.content }
              </p>
            </div>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="text-whitetitle-font font-medium mb-3 flex flex-wrap items-center border-b border-sh-blue">
                <div className="w-1/4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue via-sh-blue to-sh-dark-blue">
                  <span className="text-base font-en font-semibold">value</span><br />
                  <span className="text-6xl font-en font-semibold">03</span>
                </div>
                <div className="w-3/4 text-xl xl:text-2xl font-jp font-medium text-left pl-5">{ t.value.third.title.former }<br />{ t.value.third.title.latter }</div>
              </div>
              <p className="leading-relaxed font-jp font-medium text-base text-left">
              { t.value.third.content }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
