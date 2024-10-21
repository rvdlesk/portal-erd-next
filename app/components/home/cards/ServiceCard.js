import './yourStyles.css';

const ServiceCard = ({ backgroundImage, iconClass, iconColor ="white", iconSize = '60px', text, link }) => {
  return (
    <div className="col-md-6 actualizacion-datos animate__animated animate__fadeInUp">
      <div className="parent">
        <a href={link} className="clean-link">
          <div
            className="consulta actualizacion"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <i className={iconClass} style={{ color: iconColor, fontSize: iconSize }}></i>
            <span>{text}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
