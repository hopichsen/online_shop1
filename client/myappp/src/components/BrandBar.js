import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
    const { clothes } = useContext(Context)

    return (
        <div className="d-flex">
            {clothes.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer', backgroundColor: brand.id === clothes.selectedBrand.id ? '#827cb8' : 'white', color: brand.id === clothes.selectedBrand.id ? 'white' : 'black' }}
                    key={brand.id}
                    className="p-3"
                    onClick={() => clothes.setSelectedBrand(brand)}
                    border={brand.id === clothes.selectedBrand.id ? '' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;
