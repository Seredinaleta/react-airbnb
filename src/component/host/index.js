import "./index.css";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Host({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="host">
      <div className="host__header">
        {image && (
          <img className="host__image" height={80} src={image} alt={name}></img>
        )}
        <div className="host__header__info">
          <Heading>Господар - {name} </Heading>
          <div className="host__header__info__sub">
            <span className="host__contacts">{phone}</span>
            <span className="host__contacts">
              Швидкість відгуку - {response_time}
            </span>
            <span className="host__contacts">Рейтинг {response_rate}%</span>
          </div>
        </div>
      </div>
      <p className="host__info">{info}</p>
    </div>
  );
}
