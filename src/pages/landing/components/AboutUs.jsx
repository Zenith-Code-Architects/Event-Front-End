import { ArrowBigDownDash, HandshakeIcon, HeadsetIcon, UserCheck } from "lucide-react"
import About from "../../../components/About"

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-row gap-x-2 justify-center">
        <div className="">
          <About
            icon={<HandshakeIcon width={40} height={40}/>}
            text="Friendly Team" />
        </div>
        <div className="">
          <About
            icon={<ArrowBigDownDash width={40} height={40}/>}
            text="16,000+ users per year" />
        </div>
        <div>
          <About
            icon={<HeadsetIcon width={40} height={40}/>}
            text="24/7 Support" />
        </div>
        <div>
          <About
            icon={<UserCheck width={40} height={40}/>}
          text="User Friendly" />
        </div>
      </div>
    </>


  )
}

export default AboutUs