import { path } from "../../routes/path";

const NavbarUtils = (t)=>{
    return [
        {data:t('shop'), link:path.home},
        {data:t('design'), link:path.custom_design},
        {data:t('d_library'), link:path.d_library},
    ]
}
export default NavbarUtils;