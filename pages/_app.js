import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import "slick-carousel/slick/slick.css";
import 'aos/dist/aos.css';
import "@/styles/_Main.scss";
import "@/styles/_About.scss";
import "@/styles/_Project.scss";
import "@/styles/_Service.scss";
import "@/styles/_Contact.scss";
import "@/styles/_Var.scss";
import Arrowimgsec from './arrowimgsec';
import Footer from './footer';
import Colorsec from './colorsec';
import Navbar1 from './navbar';
export default function App({ Component, pageProps }) {
  // document?.documentElement?.classList?.add("bodydiv");

  return (
    <>
      <Arrowimgsec />
      <Navbar1 />
      <Component {...pageProps} />
      <Colorsec />
      <Footer />

    </>
  )

}
