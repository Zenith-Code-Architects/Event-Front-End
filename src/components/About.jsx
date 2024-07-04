const About = ({icon, text}) => {
  return (
    <div className=" w-48 h-[50vh] flex flex-col items-center justify-center">
          <i className=""> {icon}</i>
          <p className="text-white">{text}</p>
    </div>
  )
}

export default About