import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./TourCard.css";
import { notInterestedContext } from "../../App";

const TourCard = ({ id, title, content, image, price }) => {
  const handleNotInterested = useContext(notInterestedContext);
  return (
    <Card className="my-4 cardContainer mx-auto">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button
          variant="outline-danger"
          onClick={() => {
            handleNotInterested(id);
          }}
        >
          Not interested
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TourCard;
