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
        </div>

        <div className="font-jp font-medium text-sh-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pt-5 font-light text-center">{ t.service.description.title1 }</h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-light text-center">{ t.service.description.title2 }</h2>
          <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
            { t.service.description.content.former }<br/>
            { t.service.description.content.latter }
          </p>
        </div>
      
      
        <div className="container mx-auto text-sh-black lg:py-20 space-y-10 lg:space-y-32">
        
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="h-80 bg-gray-400 text-whitetitle-font font-medium mb-3 flex flex-wrap items-center">
                外観検査
              </div>
              <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
                { t.service.solution.first.content }
              </p>
            </div>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="h-80 bg-gray-400 text-whitetitle-font font-medium mb-3 flex flex-wrap items-center">
                OCR
              </div>
              <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
                { t.service.solution.second.content }
              </p>
            </div>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow px-5 xl:px-10">
              <div className="h-80 bg-gray-400 text-whitetitle-font font-medium mb-3 flex flex-wrap items-center">
                オーダーメイドのAIソリューション
              </div>
              <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
                { t.service.solution.third.content }
              </p>
            </div>
          </div>

        </div>

        <div className="font-jp font-medium text-sh-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center">{ t.service.example.header.title }</h2>
          <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
            { t.service.example.header.content }
          </p>
        </div>

        <div className="container">
          <div className="flex items-top lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="hidden lg:block">
              <img src="/images/ex1_1.jpg" alt="example_1" width={'360'} height={'180'} />
            </div>
            <div className="flex-grow text-left lg:ml-20 w-20">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 01</p>
              <h2 className="text-3xl md:text-4xl py-2">{ t.service.example.first.title }</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.first.subtitle }
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.first.description}
              </p>
            </div>
            <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex1_1.jpg" alt="example_1" width={'352'} height={'300'} />
              </div>
          </div>
          <div className="flex items-top my-10 lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="flex flex-col text-center items-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex1_2.jpg" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.first.content.first.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.first.content.first.description }
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="inline-flex items-center justify-center text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex1_3.png" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.first.content.second.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.first.content.second.description }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 mx-auto px-2 font-jp font-medium text-sh-black">
          <div className="h-full bg-sh-blue bg-opacity-20 p-4 rounded-xl">
            <div className="flex flex-wrap divide-x divide-sh-gray3 py-10">
              <div className="flex w-1/2 items-center justify-center">
                <div className="mr-5">
                  <img src="/images/document.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center ml-5">
                    <button className="mx-auto w-80 md:w-80 h-12 md:h-16 font-bold text-white bg-sh-blue hover:bg-sh-blue-hover  border-0 py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.document.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.document.description }</p>
                </div>
              </div>

              <div className="flex w-1/2 items-center justify-center">
                <div className="mr-5">
                  <img src="/images/ai.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center ml-5">
                    <button className="mx-auto w-80 md:w-80 h-12 md:h-16 font-bold text-sh-blue bg-sh-white hover:bg-sh-blue-hover border-2 border-sh-blue py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.ai.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.ai.description }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex items-top lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="hidden lg:block">
              <img src="/images/ex1_1.jpg" alt="example_1" width={'360'} height={'180'} />
            </div>
            <div className="flex-grow text-left lg:ml-20 w-20">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 01</p>
              <h2 className="text-3xl md:text-4xl py-2">{ t.service.example.first.title }</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.first.subtitle }
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.first.description}
              </p>
            </div>
            <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex1_1.jpg" alt="example_1" width={'352'} height={'300'} />
              </div>
          </div>
          <div className="flex items-top my-10 lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="flex flex-col text-center items-center">
              <div className="inline-flex items-center justify-center rounded-full bg-blue-100 text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex1_2.jpg" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.first.content.first.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.first.content.first.description }
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="inline-flex items-center justify-center text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex1_3.png" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.first.content.second.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.first.content.second.description }
                </p>
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
