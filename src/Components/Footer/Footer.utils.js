import { path } from "../../routes/path";

const FooterUtils=(t)=> {
    return [
        {name:t("footer.about"), value:path.aboutUs},
        {name:t("footer.terms"), value:path.home},
        {name:t("footer.privacy"), value:path.home},
        {name:t("footer.return"), value:path.home},
        {name:t("footer.contact"), value:path.contactUs}
    ]
};

export default FooterUtils;