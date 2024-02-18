import React, { useState } from 'react';
import CreateClothes from '../components/modals/CreateClothes';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [clothesVisible, setClothesVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <style>
                {`
                    .custom-button {
                        background-color: #827cb8;
                        color: white;
                    }
                    .custom-button:hover {
                        background-color: white;
                        color: black;
                    }
                `}
            </style>
            <Button
                variant="outline-dark"
                className="mt-4 p-2 custom-button"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2 custom-button"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2 custom-button"
                onClick={() => setClothesVisible(true)}
            >
                Добавить одежду / обувь
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateClothes show={clothesVisible} onHide={() => setClothesVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;
