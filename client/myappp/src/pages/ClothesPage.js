import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneClothes } from '../http/clothesAPI';
import { Context } from '..';
import { create } from '../http/basketAPI';


const ClothesPage = () => {
  const { basket, user } = useContext(Context);
  const randomId = Math.floor(Math.random() * 195891918) + 1;
  const [clothes, setClothes] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneClothes(id).then(data => setClothes(data))
  }, [])
  const handleAddToBasket = () => {
    basket.setBasketClothes(id);
    const newItem = { id: randomId, basketId: user.id, clotheId: id, created_at: '123', updated_at: '123' }
    create(newItem);
  }
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + clothes.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{clothes.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {clothes.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}

          >
            <h3>От: {clothes.price} руб.</h3>
            <Button onClick={handleAddToBasket} variant={"outline-dark"}>Добавить в корзину</Button>

          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Описание</h1>
        {clothes.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? '#827cb8' : 'transparent', padding: 10 }}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default ClothesPage;