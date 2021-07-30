import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Gallery(props) {
  return (
    <div className="container">
      <Card className="col-md-6 m-4">
        <CardImg
          top
          width="100%"
          src={props.data.productimage}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.data.productname}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.data.productid}
          </CardSubtitle>
          <CardText>Rp. {props.data.productprice}</CardText>
          <Button
            onClick={() => props.remove(props.data.productid)}
            className="float-right"
            color="danger"
          >
            Hapus
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
