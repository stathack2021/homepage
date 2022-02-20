import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Company: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
        
      <div className="text-gray-600 body-font bg-sh-white" id="company">
      <div className="container lg:px-5 py-16 lg:py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-semibold font-en title-font text-sh-black mb-4">
            {
              locale == "ja" &&
              <>
                <span className="text-lg font-bold font-jp">会社概要</span><br />
              </>
            }
            COMPANY
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sh-blue inline-flex"></div>
          </div>
        </div>
        <div className="mx-auto p-4 font-jp font-medium text-sh-black">
          <div className="h-full bg-sh-gray2 p-8 rounded">
            <div className="flex flex-wrap divide-x divide-sh-gray3">
              <div className="md:w-1/2 lg:px-8 xl:px-20 py-6">
                <table className="w-full h-1/2 md:h-full">
                  <tbody>
                    <tr>
                      <td>{ t.company.name.label }</td>
                      <td>{ t.company.name.item }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.location.label }</td>
                      <td>〒{t.company.location.item.postal_code}<br />{ t.company.location.item.address }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.establishment.label}</td>
                      <td>{ t.company.establishment.item}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full h-1/2 my-10 md:hidden">
                  <tbody>
                    <tr>
                      <td>{ t.company.member.title }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.first.label }</td>
                      <td>{ t.company.member.first.item }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.second.label }</td>
                      <td>{ t.company.member.second.item }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.third.label }</td>
                      <td>{ t.company.member.third.item }</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-1/2 px-16 xl:px-20 py-6 hidden md:block">
                <table className="w-full h-full">
                  <tbody>
                    <tr>
                      <td>{ t.company.member.title }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.first.label }</td>
                      <td>{ t.company.member.first.item }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.second.label }</td>
                      <td>{ t.company.member.second.item }</td>
                    </tr>
                    <tr>
                      <td>{ t.company.member.third.label }</td>
                      <td>{ t.company.member.third.item }</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
