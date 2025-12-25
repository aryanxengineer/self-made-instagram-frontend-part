import { useWindowSize } from "@/hooks/useWindowSize";
import MobileLayout from "./mobile/layout";
import DesktopLayout from "./desktop/layout";

const Layout = () => {
    const { innerWidth } = useWindowSize();

    if (innerWidth && innerWidth < 450) {
        return (<MobileLayout width={innerWidth}></MobileLayout>);
    }

    return <DesktopLayout></DesktopLayout>;
}

export default Layout;