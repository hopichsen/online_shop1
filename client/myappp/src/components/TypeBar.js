import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { clothes } = useContext(Context)

    return (
        <ListGroup>
            {clothes.types.map(type =>
                <ListGroup.Item
                    style={{ 
                        cursor: 'pointer', 
                        backgroundColor: type.id === clothes.selectedType.id ? '#827cb8' : 'white', 
                        color: type.id === clothes.selectedType.id ? 'white' : 'black',
                        borderRadius: '5px', // Закругляем углы на 5px
                        border: '#212529' // Убираем обводку
                    }}
                    active={type.id === clothes.selectedType.id}
                    onClick={() => clothes.setSelectedType(type)} 
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
