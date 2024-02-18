import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from '../components/BrandBar';
import ClothesItem from '../components/ClothesItem';
import ClothesList from '../components/ClothesList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchClothes, fetchTypes } from '../http/clothesAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {clothes} = useContext(Context)

    useEffect( () => {
        fetchTypes().then(data => clothes.setTypes(data))
        fetchBrands().then(data => clothes.setBrands(data))
        fetchClothes(null, null, 1,3).then(data => { // тут указываем кол-во товаров на странице
            clothes.setClotheses(data.rows)
            clothes.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchClothes(clothes.selectedType.id, clothes.selectedBrand.id, clothes.page,3).then(data => { 
            clothes.setClotheses(data.rows)
            clothes.setTotalCount(data.count)
        })
    }, [clothes.page, clothes.selectedType, clothes.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <ClothesList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;