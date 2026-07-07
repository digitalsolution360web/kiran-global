import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       <LanguageProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
    </>
  );
}