import './SectionHeader.css'

const SectionHeader = ({children}) => {
  return (
    <div className="sections-title-box">
      <h1 className="title">{children}</h1>
    </div>
  );
};

export default SectionHeader;
