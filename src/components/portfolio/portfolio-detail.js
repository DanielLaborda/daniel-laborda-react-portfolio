import React from "react";
//recogemosd info del url
export default function(props) {
  return (
  <div>
    <h2>Portfolio Detail for {props.match.params.slug}</h2>

  </div>);
}