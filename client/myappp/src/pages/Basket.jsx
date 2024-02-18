import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { fetchAllClothes } from '../http/clothesAPI';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {
  const { basket, clothes } = useContext(Context);
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const loadBasketItems = async () => {
      const response = await fetchAllClothes();
      const allClothes = response.rows;
      clothes.addToAllClothes(allClothes);
      const basketItemsIds = Object.values(basket.getClotheIDs()).map(id => parseFloat(id));
const filteredBasketItems = allClothes.filter(item => basketItemsIds.includes(parseFloat(item.id)));
      setBasketItems(filteredBasketItems);
    };
    loadBasketItems();
  }, [basket, clothes]);

  return (
    <div style={{ display: 'flex', margin: '50px 20px', rowGap: '10px', columnGap: '25px', justifyContent: 'space-between', gap: 'auto', flexWrap: 'wrap', alignItems: 'center', height: '100vh' }}>
      {basketItems.length ?
        basketItems.map(item => (
          <div key={item.id} className='container-card' style={{ borderRadius: '8px', border: '4px solid #ff78fd', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <img width={300} height={250} src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
            <span className="title">
              {item.name}
            </span>
            <span className="price-card">
              {item.price}
            </span>
            <span className="brand">
              {item.brand}
            </span>
          </div>
        ))
        :
        <h1>Корзина пуста!</h1>
      }
    </div>
  );
});

export default Basket;
