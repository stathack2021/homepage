import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Service: React.FC<Props> = (props) => {
    const { locale } = props;
    const t = useLocale(locale);

    return (
        
      <div className="text-white body-font" id="service">
      <div className="py-16 lg:py-28 px-5 md:px-24 bg-sh-gray shadow-lg">
        <div className="text-center mb-20">
          {
            locale == "ja" &&
            <p className="text-lg font-jp font-bold py-2 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">事業概要</p>
          }
          <h1 className="text-5xl lg:text-6xl font-en font-semibold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">
            SERVICE
          </h1>
        </div>

        <div className="font-jp font-medium text-sh-black md:px-20 md:mb-10 lg:w-3/4 mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pt-5 font-light text-center">{ t.service.description.title1 }</h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pb-5 font-light text-center">{ t.service.description.title2 }</h2>
          <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
            { t.service.description.content.former }<br/>
            { t.service.description.content.latter }
          </p>
        </div>
      
      
        <div className="container mx-auto text-sh-black lg:py-20 space-y-10 lg:space-y-32">
        
        <div className="flex flex-wrap lg:w-4/5 mx-auto">
          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-64 h-64 xl:w-80 xl:h-80 text-white flex flex-col items-center justify-center rounded-xl shadow-lg">
              <img className="mx-auto" src="images/solution1.svg" width={200} height={200}></img>
            </div>
            <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
              { t.service.solution.first.content }
            </p>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-64 h-64 xl:w-80 xl:h-80 text-white flex flex-col items-center justify-center rounded-xl shadow-lg">
              <img className="mx-auto" src="images/solution2.svg" width={200} height={200}></img>
            </div>
            <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
              { t.service.solution.second.content }
            </p>
          </div>

          <div className="p-4 md:px-20 lg:p-4 lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-64 h-64 xl:w-80 xl:h-80 text-white flex flex-col items-center justify-center rounded-xl shadow-lg">
              <img className="mx-auto" src="images/solution3.svg" width={200} height={200}></img>
            </div>
            <p className="p-4 leading-10 font-jp font-medium text-xl text-left">
              { t.service.solution.third.content }
            </p>
          </div>

        </div>

        <div className="font-jp font-medium text-sh-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center">{ t.service.example.header.title }</h2>
          <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
            { t.service.example.header.content }
          </p>
        </div>

        <div className="container">
          <div className="flex flex-wrap items-top lg:px-10 xl:w-3/5 mx-auto border-b border-gray-200 flex-row">
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
          <div className="flex flex-wrap items-top my-10 lg:w-3/5 mx-auto border-b border-gray-200">
            <div className="flex flex-col text-center items-center md:w-1/2">
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
            <div className="flex flex-col text-center items-center md:w-1/2">
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
            <div className="flex flex-wrap xl:divide-x divide-sh-gray3 py-10 justify-center">
              <div className="flex xl:w-1/2 items-center justify-center">
                <div className="hidden lg:block lg:mr-5">
                  <img src="/images/document.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center lg:ml-5">
                    <button className="mx-auto h-12 md:h-16 font-bold text-white bg-sh-blue hover:bg-sh-blue-hover  border-0 py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.document.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.document.description }</p>
                </div>
              </div>

              <div className="flex xl:w-1/2 items-center justify-center">
                <div className="hidden lg:block lg:mr-5">
                  <img src="/images/ai.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center lg:ml-5">
                    <button className="mx-auto h-12 md:h-16 font-bold text-sh-blue bg-sh-white hover:bg-sh-blue-hover border-2 border-sh-blue py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.ai.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.ai.description }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-wrap items-top lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="flex-grow text-left">
              <p className="text-lg font-en font-bold text-transparent bg-clip-text bg-gradient-to-b from-sh-light-blue  via-sh-blue to-sh-dark-blue">example 02</p>
              <h2 className="text-3xl md:text-4xl py-2">{ t.service.example.second.title }</h2>
              <p className="leading-relaxed text-base font-jp font-medium mb-5">
                {t.service.example.second.subtitle }
              </p>
              <p className="leading-relaxed text-base font-jp font-medium">
                {t.service.example.second.description}
              </p>
            </div>
            <div className="hidden lg:block lg:ml-20">
              <img src="/images/ex2_1.jpg" alt="example_2" width={'353'} height={'299'} />
            </div>
            
            <div className="lg:hidden w-full py-5">
                <img className="w-full" src="/images/ex2_1.jpg" alt="example_1" width={'352'} height={'300'} />
              </div>
          </div>
          <div className="flex flex-wrap items-top my-10 lg:w-3/5 mx-auto border-b border-gray-200 flex-row">
            <div className="flex flex-col text-center items-center md:w-1/2">
              <div className="inline-flex items-center justify-center mb-4 flex-shrink-0">
                <img src="/images/ex2_2.png" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.second.content.first.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.second.content.first.description }
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center md:w-1/2">
              <div className="inline-flex items-center justify-center text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex2_3.png" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.second.content.second.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.second.content.second.description }
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center items-center md:w-1/2 mt-6">
              <div className="inline-flex items-center justify-center text-sh-blue mb-4 flex-shrink-0">
                <img src="/images/ex2_4.png" alt="example_1" width={'440'} height={'220'} />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-jp text-lg title-font font-bold mb-2 text-left">{ t.service.example.third.content.second.title }</h2>
                <p className="leading-relaxed text-base font-jp font-medium text-left">
                { t.service.example.third.content.second.description }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 mx-auto px-2 font-jp font-medium text-sh-black">
          <div className="h-full bg-sh-blue bg-opacity-20 p-4 rounded-xl">
            <div className="flex flex-wrap xl:divide-x divide-sh-gray3 py-10 justify-center">
              <div className="flex xl:w-1/2 items-center justify-center">
                <div className="hidden lg:block lg:mr-5">
                  <img src="/images/document.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center lg:ml-5">
                    <button className="mx-auto h-12 md:h-16 font-bold text-white bg-sh-blue hover:bg-sh-blue-hover  border-0 py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.document.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.document.description }</p>
                </div>
              </div>

              <div className="flex xl:w-1/2 items-center justify-center">
                <div className="hidden lg:block lg:mr-5">
                  <img src="/images/ai.svg" width={120} height={120} />
                </div>
                <div className="flex flex-col items-center lg:ml-5">
                    <button className="mx-auto h-12 md:h-16 font-bold text-sh-blue bg-sh-white hover:bg-sh-blue-hover border-2 border-sh-blue py-2 px-8 focus:outline-none rounded-full text-lg">{ t.service.contact.ai.button}</button>
                    <p className="text-base font-jp font-medium mt-4">{ t.service.contact.ai.description }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="font-jp font-medium text-sh-black">
            <h2 className="text-3xl lg:text-4xl font-light text-center">{ t.service.flow.title }</h2>
            <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
              { t.service.flow.description }
            </p>
          </div>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap lg:w-3/4 mx-auto justify-center -my-2">
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H174L190 39.3031L174 80.6365H0V39.3031V0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-11 text-sh-dark-blue font-bold">{ t.service.flow.steps.first }</p>
          </div>
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H174L190 39.3031L174 80.6365H0L16 40.6365L0 0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-14 text-sh-dark-blue font-bold">{ t.service.flow.steps.second }</p>
          </div>
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H174L190 39.3031L174 80.6365H0L16 40.6365L0 0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-14 text-sh-dark-blue font-bold">{ t.service.flow.steps.third }</p>
          </div>
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H174L190 39.3031L174 80.6365H0L16 40.6365L0 0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-16 text-sh-dark-blue font-bold">{ t.service.flow.steps.fourth }</p>
          </div>
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H174L190 39.3031L174 80.6365H0L16 40.6365L0 0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-16 text-sh-dark-blue font-bold">{ t.service.flow.steps.fifth }</p>
          </div>
          <div className="relative my-2">
            <svg className="text-sh-dark-blue text-opacity-30 fill-current" width="190" height="80" viewBox="0 0 190 81" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.636475H190V39.3031V80.6365H0L16 40.6365L0 0.636475Z"/>
            </svg>
            <p className="absolute top-7 left-14 text-sh-dark-blue font-bold">{ t.service.flow.steps.sixth }</p>
          </div>
        </div>
        
        <div className="font-jp font-medium text-sh-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center">{ t.service.technology.title }</h2>
          <p className="leading-relaxed text-xl mt-5 text-left lg:text-center">
            { t.service.technology.description.first }
          </p>
          <p className="leading-relaxed text-xl text-left lg:text-center">
            { t.service.technology.description.second }
          </p>
        </div>

        <div className="flex flex-wrap mx-auto lg:w-1/2">
          <div className="flex-col items-center w-1/2 px-4">
            <svg className="mb-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 2.88647H6V0.636475H0V6.63647H2.25V2.88647Z" fill="#0148B1"/>
              <path d="M17.9995 0.636475V2.88647H21.7495V6.63647H23.9995V0.636475H17.9995Z" fill="#0148B1"/>
              <path d="M21.7495 22.3865H17.9995V24.6365H23.9995V18.6365H21.7495V22.3865Z" fill="#0148B1"/>
              <path d="M2.25 18.6365H0V24.6365H6V22.3865H2.25V18.6365Z" fill="#0148B1"/>
              <path d="M12 18.6365C15.3137 18.6365 18 15.9502 18 12.6365C18 9.32277 15.3137 6.63647 12 6.63647C8.68629 6.63647 6 9.32277 6 12.6365C6 15.9502 8.68629 18.6365 12 18.6365Z" fill="#0148B1"/>
            </svg>
            <h3 className="mb-4 font-bold">{ t.service.technology.kinds.first.title }</h3>
            <p>{ t.service.technology.kinds.first.description }</p>
          </div>
          <div className="flex-col items-center w-1/2 px-4">
            <svg className="mb-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1013_10036)">
                <path d="M3.65674 4.29321V24.6365H24V4.29321H3.65674ZM22.1713 22.8078H5.48543V6.1219H22.1713V22.8078Z" fill="#0148B1"/>
                <path d="M6.6642 19.6075H20.9925C21.1357 19.6075 21.2671 19.5289 21.3349 19.4028C21.4028 19.2772 21.396 19.1239 21.3171 19.0047L16.8708 12.268C16.6908 11.9952 16.3858 11.8313 16.0587 11.8313C15.732 11.832 15.4271 11.9963 15.2474 12.2698L12.1153 17.0363L10.3866 15.0769C10.1859 14.8498 9.89093 14.7288 9.58882 14.7506C9.28639 14.772 9.01137 14.9334 8.84534 15.1866L6.33921 19.0054C6.26065 19.125 6.25423 19.2775 6.3221 19.4033C6.38993 19.5293 6.52137 19.6075 6.6642 19.6075Z" fill="#0148B1"/>
                <path d="M10.3153 13.2646C11.4041 13.2646 12.2865 12.3823 12.2865 11.2935C12.2865 10.2046 11.4041 9.32227 10.3153 9.32227C9.2265 9.32227 8.34375 10.2046 8.34375 11.2935C8.34375 12.3823 9.2265 13.2646 10.3153 13.2646Z" fill="#0148B1"/>
                <path d="M20.3433 2.46521V0.636475H0V20.9798H1.82873V19.1511V2.46521H18.5146H20.3433Z" fill="#0148B1"/>
              </g>
              <defs>
                <clipPath id="clip0_1013_10036">
                <rect width="24" height="24" fill="white" transform="translate(0 0.636475)"/>
                </clipPath>
              </defs>
            </svg>
            <h3 className="mb-4 font-bold">{ t.service.technology.kinds.second.title }</h3>
            <p>{ t.service.technology.kinds.second.description }</p>
          </div>
          <div className="flex-col items-center w-1/2 px-4 mt-10">
            <svg className="mb-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1013_10046)">
                  <path d="M4.9578 22.4258C3.60245 22.4258 2.50277 21.3303 2.50277 19.9708V7.92427H6.30175C7.43242 7.92427 8.34606 7.0103 8.34606 5.87958V2.08107H16.0676C17.4229 2.08107 18.5188 3.17658 18.5188 4.53601V10.3713C18.9911 10.658 19.4365 11.0067 19.8355 11.4053C19.8779 11.448 19.9244 11.4945 19.963 11.541V4.53601C19.963 2.3828 18.2167 0.636475 16.0676 0.636475H7.75009L7.32391 1.05849L1.48066 6.90179L1.05859 7.32797V19.9709C1.05859 22.1203 2.80867 23.8704 4.9578 23.8704H13.2757C13.2757 23.8704 11.8557 22.6444 11.4636 22.4258H4.9578V22.4258Z" fill="#0148B1"/>
                  <path d="M9.96134 11.4052C10.3947 10.9718 10.875 10.6039 11.39 10.3055H5.14404V11.6843H9.69781C9.78326 11.5912 9.86834 11.4982 9.96134 11.4052Z" fill="#0148B1"/>
                  <path d="M15.7926 6.62646H10.1777V8.006H15.7926V6.62646Z" fill="#0148B1"/>
                  <path d="M5.14404 14.1779V15.5566H7.9632C8.01725 15.0881 8.11404 14.6271 8.26498 14.1779H5.14404Z" fill="#0148B1"/>
                  <path d="M5.14404 19.429H8.6367C8.4162 18.9835 8.24946 18.5229 8.12961 18.0502H5.14404V19.429Z" fill="#0148B1"/>
                  <path d="M22.5225 22.4206C22.5225 22.4206 20.8053 20.9185 20.3942 20.5086C19.7915 19.9085 19.5506 19.6196 19.7631 19.1322C20.6942 17.2338 20.372 14.8771 18.7931 13.2987C16.8078 11.313 13.5886 11.313 11.6033 13.2987C9.61792 15.2844 9.61792 18.5029 11.6033 20.4886C13.1813 22.0666 15.5395 22.3888 17.4363 21.4581C17.9241 21.2456 18.2134 21.4865 18.8132 22.0897C19.2235 22.5004 20.7251 24.2176 20.7251 24.2176C21.5037 24.9962 22.1027 24.5174 22.4631 24.1578C22.822 23.7982 23.3011 23.1992 22.5225 22.4206ZM17.2797 18.9748C16.1302 20.124 14.2666 20.124 13.1167 18.9748C11.9674 17.8256 11.9674 15.9613 13.1167 14.8124C14.2666 13.6632 16.1302 13.6632 17.2797 14.8124C18.429 15.9612 18.429 17.8256 17.2797 18.9748Z" fill="#0148B1"/>
              </g>
              <defs>
                  <clipPath id="clip0_1013_10046">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.636475)"/>
                  </clipPath>
              </defs>
            </svg>

            <h3 className="mb-4 font-bold">{ t.service.technology.kinds.third.title }</h3>
            <p>{ t.service.technology.kinds.third.description }</p>
          </div>
          <div className="flex-col items-center w-1/2 px-4 mt-10">
            <svg className="mb-4" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1013_10057)">
                <path d="M1.18262 8.87822V16.3947C1.18262 17.9555 2.44796 19.2209 4.00895 19.2209H9.27179V6.05212H4.00895C2.44791 6.05212 1.18262 7.31751 1.18262 8.87822Z" fill="#0148B1"/>
                <path d="M22.3592 0.778131C22.2054 0.684193 22.0315 0.636475 21.857 0.636475C21.7084 0.636475 21.5593 0.671162 21.4224 0.740584L10.9648 6.05208V19.2209L21.4224 24.5324C21.5593 24.6018 21.7084 24.6365 21.857 24.6365C22.0315 24.6365 22.2054 24.5888 22.3592 24.4948C22.6437 24.3203 22.8169 24.0105 22.8169 23.6766V1.59633C22.8169 1.26244 22.6437 0.953068 22.3592 0.778131ZM20.7476 21.8686L13.0342 17.9511V7.32183L20.7476 3.4043V21.8686Z" fill="#0148B1"/>
              </g>
              <defs>
                <clipPath id="clip0_1013_10057">
                <rect width="24" height="24" fill="white" transform="translate(0 0.636475)"/>
                </clipPath>
              </defs>
            </svg>
            <h3 className="mb-4 font-bold">{ t.service.technology.kinds.fourth.title }</h3>
            <p>{ t.service.technology.kinds.fourth.description }</p>
          </div>
        </div>

        </div>
      </div>
    </div>
    )
}
