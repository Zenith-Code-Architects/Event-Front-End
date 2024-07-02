const About = ({icon, text}) => {
  return (
    <div className="border w-48 h-36 flex flex-col items-center justify-center">
          <i> {icon}</i>
          <p>{text}</p>
    </div>
  )
}

export default About