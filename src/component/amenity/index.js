import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import breakfast from "./breakfast.svg";
import pool from "./pool.svg";
import cons from "./cons.svg";
import gym from "./gym.svg";
import child from "./childsuit.svg";
import parking from "./parking.svg";
import pet from "./pet.svg";
import roomservice from "./roomservice.svg";
import transfer from "./transfer.svg";
import wifi from "./wifi.svg";

export default function Amenity({ ...rest }) {
  return (
    <Box shadow className="amenity">
      <Heading border>Зручності</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenity__list">
      {hasPool && (
        <ListItem imageSrc={pool}>
          <span>Бассейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={gym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={wifi}>
          <span>Безкоштовний Wi-fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={parking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pet}>
          <span>Дозволене розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={transfer}>
          <span>Трансфер з/до аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={cons}>
          <span>Конс'єрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={roomservice}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={child}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
