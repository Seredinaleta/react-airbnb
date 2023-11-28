import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import guest from "./guest.svg";
import bath from "./bath.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";

export default function PropertyDetails({ ...rest }) {
  return (
    <Box shadow className="property">
      <Heading border>Деталі помешкання</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property__list">
      <ListItem imageSrc={guest}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>
      <ListItem imageSrc={bedroom}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>
      <ListItem imageSrc={bath}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>
      <ListItem imageSrc={bed}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
