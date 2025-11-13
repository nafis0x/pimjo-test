import Navbar from "@/components/common/Navbar";
import Footer from "@/components/home/Footer";
import { getMegaMenu } from "@/lib/apis";

export default async function LandingLayout({ children }) {
  const menu = await getMegaMenu();

  return (
    <>
      <Navbar menu={menu.data} />
      {children}
      <Footer />
    </>
  );
}
