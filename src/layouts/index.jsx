import Footer from "../components/common/Footer";
import CTA from "../components/common/CTA";
import Navbar from "../components/common/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <CTA />
      <Footer />
    </div>
  );
};

export default MainLayout;
