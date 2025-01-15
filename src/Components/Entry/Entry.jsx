import "./Entry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import mountFuji from "../../assets/images/mountFuji.webp";

export default function Entry(props) {
  return (
    <main className="entrySection">
      <div className="imageSection">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="infoSection">
        <div className="headingSection">
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#f55a5a" }}
            />
            <span>{props.country}</span>
          </div>

          <a
            className="googleMapsLink"
            href={props.googleMapsLink}
            target="_blank"
          >
            View in Google Maps
          </a>
        </div>
        <span className="tripTitle">{props.title}</span>
        <span className="tripDate">{props.dates}</span>
        <p className="tripParagraph">{props.text}</p>
      </div>
    </main>
  );
}
