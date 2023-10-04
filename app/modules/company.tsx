import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Company: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
        
      <div className="text-gray-600 body-font bg-sh-white" id="company">
      <div className="container py-16 mx-auto lg:px-5 lg:py-24">
        <div className="mb-20 text-center">
          <h1 className="mb-4 text-5xl font-semibold lg:text-6xl font-en title-font text-sh-black">
            {
              locale == "ja" &&
              <>
                <span className="text-lg font-bold font-jp">会社概要</span><br />
              </>
            }
            COMPANY
          </h1>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 rounded-full bg-sh-blue"></div>
          </div>
        </div>
        <div className="p-4 mx-auto font-medium font-jp text-sh-black">
          <div className="h-full p-8 rounded bg-sh-gray2">
            <div className="flex flex-wrap divide-x divide-sh-gray3">
              <div className="py-6 md:w-1/2 lg:px-8 xl:px-20">
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
                    <tr>
                      <td>{ t.company.parent.label}</td>
                      <td><a className="text-sh-dark-blue" href={t.company.parent.url}>{ t.company.parent.item }</a></td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full my-10 h-1/2 md:hidden">
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

              <div className="hidden w-1/2 px-16 py-6 xl:px-20 md:block">
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
