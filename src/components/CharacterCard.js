import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <Card body className="text-center">
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>Status: {character.status}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );

}
