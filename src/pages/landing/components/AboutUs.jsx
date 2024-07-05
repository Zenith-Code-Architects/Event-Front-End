import { ArrowBigDownDash, HandshakeIcon, HeadsetIcon, UserCheck } from "lucide-react"
import About from "../../../components/About"
import "../../../App.css"

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-around py-32">
        <div>
          <p className="text-[14px] text-[#878787] mb-4 spacing2">WE ARE ZCA EVENTS</p>
          <h3 className="text-5xl text-[#333333] mb-8"><strong>No.1</strong> Events <br /> Management App</h3>
          <a href="all-events"><button className="bg-[#FF7013] text-sm text-white p-3 rounded-full shadow-lg">GET STARTED!</button></a>
        </div>
        <div className="flex gap-x-7">
          <div className="flex flex-col gap-y-6">
            <div >
              <About
                icon={<HandshakeIcon width={60} height={60} className="text-[#FF7013] text-5xl" />}
                text="Friendly Team" />
            </div>
            <div>
              <About
                icon={<ArrowBigDownDash width={60} height={60} className="text-[#FF7013] text-5xl" />}
                text="16,000+ users" />
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div>
              <About
                icon={<HeadsetIcon width={60} height={60} className="text-[#FF7013] text-5xl" />}
                text="24/7 Support" />
            </div>
            <div>
              <About
                icon={<UserCheck width={60} height={60} className="text-[#FF7013] text-5xl" />}
                text="User Friendly" />
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default AboutUs