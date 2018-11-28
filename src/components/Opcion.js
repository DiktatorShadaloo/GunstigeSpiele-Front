import React from "react";

export default function Opcion(props) {
  return (
    <tbody>
      <tr>
        <td>
          <b>{props.tienda}</b>
        </td>
        <td>
          {props.moneda === "Dolar"
            ? `US$ ${props.costo}   -   ($U ${props.costoConvertido})`
            : props.moneda === "Real"
            ? `R$ ${props.costo}   -   ($U ${props.costoConvertido})`
            : `$U ${props.costo}`}
        </td>
        <td>{props.disponible === "OK" ? "SI" : "NO"}</td>
        <td>
          <a href={props.url}>{props.url}</a>
        </td>
      </tr>
    </tbody>
  );
}
