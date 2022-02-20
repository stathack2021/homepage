import useLocale from "../hooks/useLocale"

export interface Props {
  locale: string;
}

export const Footer: React.FC<Props> = (props) => {
  const { locale } = props;
  const t = useLocale(locale);

    return (
      <footer className="text-gray-600 body-font font-en">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 mx-auto text-center ">
          <a className="flex title-font font-medium items-center justify-center text-gray-900">
            <img src="/images/logo_white.svg" alt="Logo" height={'64'} width={'240'} />
          </a>
        </div>
        <div className="hidden md:flex flex-grow flex-wrap mx-auto -mb-10 mt-10 text-center text-white">
          <a className="mr-5 hover:text-blue-400" href="/#about">ABOUT US</a>
          <a className="mr-5 hover:text-blue-400" href="/#value">VALUE</a>
          <a className="mr-5 hover:text-blue-400" href="/#service">SERVICE</a>
          <a className="mr-5 hover:text-blue-400" href="/#news">NEWS</a>
          <a className="mr-5 hover:text-blue-400" href="/#member">MEMBER</a>
          <a className="mr-5 hover:text-blue-400" href="/#company">COMPANY</a>
          <a className="mr-5 hover:text-blue-400" href="/#contact">CONTACT</a>
        </div>
        <nav  className="md:hidden mx-auto my-auto text-white font-en list-none text-left space-y-5 mt-10" id="mobile-menu">
          <li className="hover:text-blue-400"><a href="/#about">ABOUT US</a></li>
          <li className="hover:text-blue-400"><a href="/#value">VALUE</a></li>
          <li className="hover:text-blue-400"><a href="/#service">SERVICE</a></li>
          <li className="hover:text-blue-400"><a href="/#news">NEWS</a></li>
          <li className="hover:text-blue-400"><a href="/#member">MEMBER</a></li>
          <li className="hover:text-blue-400"><a href="/#company">COMPANY</a></li>
          <li className="hover:text-blue-400"><a href="/#contact">CONTACT</a></li>
        </nav>
        <div className="flex-grow flex flex-wrap mx-auto mt-32 text-center text-white">
          <a className="hover:text-blue-400 font-jp w-full" href="https://docs.google.com/document/d/1aLZxMF1pQr3nnX0IiREiA21fhIzKYtEQ/edit?usp=sharing&ouid=103723920923670350704&rtpof=true&sd=true"> { t.footer.privacy_policy}</a>
          <p className="text-sm text-center w-full mx-auto pt-2">© 2021 StatHack, inc.</p>
        </div>
      
      </div>
    
    </footer>
    )
}
