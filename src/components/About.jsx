const About = ({icon, text}) => {
  return (
    <div className="">
      <div className=" border-[0.2px] rounded-md border-[#FF7013] h-24 w-24 flex justify-center drop-shadow-md mb-2 items-center bg-[#F7F7F7]">
      <i> {icon}</i>
      </div>
          
          <p className="text-black"><strong>{text}</strong></p>
    </div>
  )
}

export default About