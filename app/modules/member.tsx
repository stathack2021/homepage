import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Member: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
        
      <div className="text-white body-font bg-member bg-no-repeat bg-cover" id="member">
      <div className="container px-12 md:px-40 lg:px-24 py-16 lg:py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-en font-semibold title-font text-white mb-4">
            {
              locale == "ja" &&
              <>
              <span className="text-lg font-jp font-bold">役員紹介</span><br />
              </>
            }
            MEMBER
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 font-jp font-medium">
          <div className="lg:w-1/3 lg:mb-0 mb-20">
            <div className="h-full text-center">
              <img alt="Ryoto Matsuba" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/rmatsuba.jpg" />
              <p className="text-gray-100">{ t.member.first.role }</p>
              <h2 className="text-white font-medium title-font tracking-wider text-4xl">{ t.member.first.name }</h2>
              {
                locale == "ja" &&
                <p className="text-gray-100">{t.member.first.name_sub}</p>
              }
              <span className="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p className="leading-relaxed lg:px-4 xl:px-16 text-left">
                {t.member.first.introduction}
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 mb-20">
            <div className="h-full text-center">
              <img alt="Tomohiro Inoue" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/tinoue.jpg" />
              <p className="text-gray-100">{ t.member.second.role }</p>
              <h2 className="text-white font-medium title-font tracking-wider text-4xl">{ t.member.second.name }</h2>
              {
                locale == "ja" &&
                <p className="text-gray-100">{ t.member.second.name_sub }</p>
              }
              <span className="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p className="leading-relaxed lg:px-4 xl:px-16 text-left">
                {t.member.second.introduction}
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 mb-20">
            <div className="h-full text-center">
              <img alt="Ken Murata" className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/images/kmurata.jpg" />
              <p className="text-gray-100">{ t.member.third.role }</p>
              <h2 className="text-white font-medium title-font tracking-wider text-4xl">{ t.member.third.name}</h2>
              {
                locale == "ja" &&
                <p className="text-gray-100">{ t.member.third.name_sub }</p>
              }
              <span className="inline-block h-1 w-10 rounded bg-sh-blue mt-6 mb-4"></span>
              <p className="leading-relaxed lg:px-4 xl:px-16 text-left">
                {t.member.third.introduction}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    )
}
