import { Link } from "react-scroll";
import { footerLinks } from "../../constants/footerData";
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Kavu Maithri Rao</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  //   to={item.section}
                  to={t(`footer.${item.section}`)}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {t(`footer.${item.section}`)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Maithri | {t("footer.footer_text_rights")}.
      </p>
    </div>
  );
};

export default FooterMain;
