import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Service: React.FC<Props> = (props) => {
    const { locale } = props;
    const t = useLocale(locale);

    return (
        
      <div className="text-white body-font" id="service">
      <div className="py-16 lg:py-28 bg-sh-gray shadow-lg rounded-lg my-10 lg:my-20 mx-4 lg:mx-8 xl:mx-20 px-4 md:px-16 lg:px-0">
        <div className="text-center mb-20">
          {
            locale == "ja" &&
            <p className="text-lg font-jp font-bold py-2 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">事業概要</p>
          }
          <h1 className="text-5xl lg:text-6xl font-en font-semibold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">
            SERVICE
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>

        <div className="font-jp font-medium text-sh-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl py-5 font-bold text-center">{ t.service.description.title }</h2>
          <p className="leading-relaxed text-base mt-5 text-left lg:text-center">
            { t.service.description.content.former }<br/>
            { t.service.description.content.latter }
          </p>
        </div>
      
      
        <div className="container mx-auto text-sh-black lg:py-20 space-y-10 lg:space-y-32">
        
          <div className="flex items-top lg:w-5/6 mx-auto border-b border-gray-200 flex-row">
            <div className="hidden lg:block">
              <img src="/images/ex1.png" alt="example_1" width={'352'} height={'300'} />
            </div>
            <div className="flex-grow text-left lg:ml-20 mt-6 w-20 pt-10 lg:pt-20">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 01</p>
              <h2 className="text-3xl md:text-4xl py-2">{ t.service.example.first.title }</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.first.subtitle }
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.first.description}
              </p>

              <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex1.png" alt="example_1" width={'352'} height={'300'} />
              </div>

              <div className="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video w-6 h-6" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2">{ t.service.example.first.content.first.title }</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                    { t.service.example.first.content.first.description }
                    </p>
                  </div>
                </div>
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-type w-6 h-6" viewBox="0 0 16 16">
                      <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-jp font-bold mb-2">{ t.service.example.first.content.second.title }</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                      { t.service.example.first.content.second.description }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-top lg:w-5/6 mx-auto border-b border-gray-200 flex-row">
            <div className="flex-grow text-left lg:mr-20 mt-6 pt-10 lg:pt-20 w-20">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 02</p>
              <h2 className="text-3xl md:text-4xl py-2">{t.service.example.second.title}</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.second.subtitle}
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.second.description}
              </p>

              <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex2.png" alt="example_2" width={'352'} height={'300'} />
              </div>

              <div className="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search w-6 h-6" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-jp font-bold mb-2">{ t.service.example.second.content.first.title}</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                      {t.service.example.second.content.first.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-text w-6 h-6" viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                      <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-jp font-bold mb-2">{ t.service.example.second.content.second.title}</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                      {t.service.example.second.content.second.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/ex2.png" alt="example_2" width={'352'} height={'300'} />
            </div>
          </div>

          <div className="flex items-top lg:w-5/6 mx-auto border-b border-gray-200 flex-row pb-10 lg:pb-0">
            <div className="hidden lg:block">
              <img src="/images/ex3.png" alt="example_3" width={'352'} height={'300'} />
            </div>
            <div className="flex-grow text-left lg:ml-20 mt-6 pt-10 lg:pt-20 w-20">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 03</p>
              <h2 className="text-3xl md:text-4xl py-2">{ t.service.example.third.title }</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.third.subtitle }
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.third.description}
              </p>

              <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex3.png" alt="example_3" width={'352'} height={'300'} />
              </div>

              <div className="flex flex-wrap -mx-4 -mb-10 my-5 md:space-y-0 space-y-6">
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-line w-6 h-6" viewBox="0 0 16 16">
                      <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2">{ t.service.example.third.content.first.title }</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                      { t.service.example.third.content.first.description }
                    </p>
                  </div>
                </div>
                <div className="p-4 2xl:w-1/2 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wifi w-6 h-6" viewBox="0 0 16 16">
                      <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                      <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-jp font-bold mb-2">{ t.service.example.third.content.second.title }</h2>
                    <p className="leading-relaxed text-base font-jp font-medium">
                      { t.service.example.third.content.second.description }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 w-full mt-10 ">
            <button onClick={() => { window.location.href = '/#contact' }} className="flex mx-auto w-48 md:w-96 h-12 md:h-16 items-center justify-center font-bold text-white bg-gradient-to-l from-sh-light-blue  via-sh-blue to-sh-dark-blue hover:bg-gradient-to-l hover:from-sh-light-blue-hover  hover:via-sh-blue-hover hover:to-sh-dark-blue-hover  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">CONTACT</button>
          </div>

        </div>
      </div>
    </div>
    )
}
