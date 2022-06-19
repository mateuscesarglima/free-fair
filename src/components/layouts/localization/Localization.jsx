import SectionHeader from '../sectionHeader/SectionHeader';

const Localization = () => {
  return (
      <section className="localization">
        <SectionHeader>Localização</SectionHeader>
        <iframe
          title="localização da feira da parangaba"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.189211832825!2d-38.56481948474622!3d-3.7689670444367187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c024280a871%3A0x68bb79653980d9ce!2sFeira%20de%20Parangaba!5e0!3m2!1spt-BR!2sbr!4v1655655725737!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </section>
  );
};

export default Localization;
