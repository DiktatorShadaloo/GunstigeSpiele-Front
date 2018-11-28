import React from "react";
import tick from "../tick.png";
import cruz from "../cruz.png";
import "../css/Opcion.css";

export default function Opcion(props) {
  return (
    <tbody>
      <tr className="h5">
        <td>
          <b>{props.tienda}</b>
        </td>
        <td className="opcion-precio">
          {props.moneda === "Dolar"
            ? `US$ ${props.costo}   -   ($U ${props.costoConvertido})`
            : props.moneda === "Real"
            ? `R$ ${props.costo}   -   ($U ${props.costoConvertido})`
            : `$U ${props.costo}`}
        </td>
        <td className="opcion-disponible">
          {props.disponible === "OK" ? (
            <img src={tick} className="opcion-icono" />
          ) : (
            <img src={cruz} className="opcion-icono" />
          )}
          {props.disponible !== "OK" ? "  No disponible para su región" : null}
        </td>
        <td>
          <a href={props.url}>{props.url}</a>
        </td>
      </tr>
    </tbody>
  );
}
