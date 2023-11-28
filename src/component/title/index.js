import "./index.css";

export default function Title({
  title,
  rating,
  review,
  city,
  country,
  superhost,
}) {
  return (
    <div className="title">
      <h1 className="title__text">{title}</h1>
      <div className="title__sub-block">
        <span className="title__sub-value">{rating}</span>
        <span className="title__sub-value">{review}</span>
        <span className="title__sub-value">
          {city}, {country}
        </span>
        {/* <span className="title__sub-value">
          {superhost ? "Супер-хост" : null}
        </span> */}
        {superhost && <span className="title__sub-value">Супер-хост</span>}
      </div>
    </div>
  );
}