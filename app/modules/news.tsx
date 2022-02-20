import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const News: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
        
      <div className="text-gray-600 body-font bg-sh-white" id="news">
      <div className="container lg:px-5 py-16 lg:py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-semibold font-en title-font text-sh-black mb-4">
            {
              locale == "ja" &&
              <>
                <span className="text-lg font-bold font-jp">最新情報</span><br />
              </>
            }
            NEWS
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div className="container px-10 md:px-20 py-12 mx-auto">
          {(() => {
              const items = [];
              for (const content_id in t.news.contents) {
                items.push(
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-700">{t.news.contents[content_id].category}</span>
                      <span className="mt-1 text-gray-500 text-sm">{t.news.contents[content_id].date}</span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-xl font-medium text-gray-900 title-font mb-2">{t.news.contents[content_id].title}</h2>
                      <p className="leading-relaxed">{t.news.contents[content_id].description}</p>
                      <a className="text-sh-dark-blue inline-flex items-center mt-4" href={t.news.contents[content_id].url}> {
              locale == "ja" ? "詳細" : "Read more"}
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                )
              }
              return (
                <div className="-my-8 divide-y-2 divide-gray-200">
                  {items}
                </div>
                )
          })()}
          
        </div>
      </div>
    </div>
    )
}
