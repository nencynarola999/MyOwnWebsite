
import { Inter } from "next/font/google"
import Fixedimgsec from "./fixedimgsec"
import Slidersec from "./slidersec"
import NumberCountingsec from "./numberCountingsec"
import Fourimgsec from "./fourimgsec"
import Videosec from "./videosec"
import Twoimgsec from "./twoimgsec"
import Formbgsec from "./formbgsec"
import Threesec from "./threesec"
import Backgroundsec from "./backgroundsec"


const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Backgroundsec />
      <Threesec />
      <Fixedimgsec />
      <Slidersec />
      <NumberCountingsec />
      <Fourimgsec />
      <Videosec />
      <Twoimgsec />
      <Formbgsec />
    </>
  )
}