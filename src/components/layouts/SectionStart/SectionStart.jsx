import './SectionStart.css'
const SectionStart = ({children}) => {
  return (
    <div className="sections-title-box">
      <h1 className="title">{children}</h1>
    </div>
  )
}

export default SectionStart