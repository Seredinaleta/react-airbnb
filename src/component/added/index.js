import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Added({ ...rest }) {
  return (
    <Box shadow className="added">
      <Heading border>Додаткові властивості</Heading>
      <List {...rest} />
    </Box>
  );
}
function List({ rules, cancel, local, lang, offers, checkin }) {
  return (
    <ul className="added__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{cancel}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{local}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkin}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        {lang.map((el, key) => (
          <span key={key} className="lang__list">
            {el}
          </span>
        ))}
      </ListItem>
    </ul>
  );
}
