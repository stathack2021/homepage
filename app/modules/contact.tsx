import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Contact: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
      <div className="text-gray-600 body-font relative bg-contact bg-no-repeat bg-cover" id="contact">
      <div className="container px-5 py-16 lg:py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-en font-semibold title-font text-white mb-4">
            {
              locale == "ja" &&
              <>
              <span className="text-lg font-jp font-bold">お問い合わせ</span><br />
              </>
            }
            CONTACT
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto text-white font-jp font-bold formrun" action="https://form.run/api/v1/r/qi9kpkwk5dxyj7b7x3g12k8v" method="post">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="company" className="leading-7 text-sm">{ t.contact.organization }</label>
                <input type="text" id="company" name="会社名または組織名" className="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-sh-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">{ t.contact.name }</label>
                <input type="text" id="name" name="お名前" data-formrun-required className="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {/* <div data-formrun-show-if-error="お名前">お名前を入力してください</div> */}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm">{ t.contact.mail }</label>
                <input type="email" id="email" name="メールアドレス" data-formrun-type="email" data-formrun-required className="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {/* <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div> */}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm">{ t.contact.content }</label>
                <textarea id="message" name="お問い合わせ内容" data-formrun-required className="w-full bg-sh-gray4 bg-opacity-80 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                {/* <div data-formrun-show-if-error="お問い合わせ内容">お問い合わせ内容を入力してください</div> */}
              </div>
            </div>
            <div className="p-2 w-full mt-10">
              <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." className="flex mx-auto w-48 md:w-96 h-12 md:h-16 items-center justify-center font-bold text-white bg-gradient-to-l from-sh-light-blue  via-sh-blue to-sh-dark-blue hover:bg-gradient-to-l hover:from-sh-light-blue-hover  hover:via-sh-blue-hover hover:to-sh-dark-blue-hover  border-0 py-2 px-8 focus:outline-none rounded text-lg">{ t.contact.button}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}
