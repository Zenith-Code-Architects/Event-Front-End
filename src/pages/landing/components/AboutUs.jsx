import { ArrowBigDownDash, HandshakeIcon, HeadsetIcon, UserCheck } from "lucide-react"
import About from "../../../components/About"

const AboutUs = () => {
  return (
    <>

      <div className="flex flex-row gap-x-2 justify-center bgImage ">
      
          <div className="">
            <About
              icon={<HandshakeIcon width={60} height={60} className="text-white text-5xl" />}
              text="Friendly Team" />
          </div>
          <div className="">
            <About
              icon={<ArrowBigDownDash width={60} height={60} className="text-white text-5xl" />}
              text="16,000+ users per year" />
          </div>
          <div className="">
            <About
              icon={<HeadsetIcon width={60} height={60} className="text-white text-5xl" />}
              text="24/7 Support" />
          </div>
          <div className="">
            <About
              icon={<UserCheck width={60} height={60} className="text-white text-5xl" />}
              text="User Friendly" />
          </div>
        </div>
    </>


  )
}

export default AboutUs