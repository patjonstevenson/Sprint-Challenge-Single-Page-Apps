import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";


export default function CharacterCard({ character }) {
  return (

    <Card className="card">
      <CardBody>
        <CardTitle>{character.name}</CardTitle>
        <CardSubtitle>Status: {character.status}</CardSubtitle>
      </CardBody>
    </Card>

  );

}
