import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function NearBy({ list }) {
  return (
    <Box shadow className="nearby">
      <Heading border>Пам'ятки поблизу</Heading>
      {list.map(({ id, ...rest }) => {
        return (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        );
      })}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} className="nearby__link">
        {name}
      </a>
    </ListItem>
  );
}
