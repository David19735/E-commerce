import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "@/components/Bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Aos from "@/components/Aos";

export const metadata = {
  title: "Shop",
  description: "Tienda en línea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
       <Bootstrap/> 
        <Aos/> 
      </body>
    </html>
  );
}
