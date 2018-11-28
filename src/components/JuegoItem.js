import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "reactstrap";
import "../css/JuegoItem.css";

export default function JuegoItem(props) {
  return (
    <Link to={`/juegos/${props.id}/${props.title}`} className="item-link">
      <ListGroupItem className="card-juego-item">
        <div className="d-flex">
          <img src={props.img} className="juego-img" />
          <h4 className="juego-title">{props.title}</h4>
        </div>
      </ListGroupItem>
    </Link>
  );
}
