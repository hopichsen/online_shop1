import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from 'react-router-dom'; // Импортируем useLocation из react-router-dom
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts'; // Импортируем маршрут для корзины
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import chum from '../assets/chum.png'; // Импортируем изображение корзины

const NavBar = observer(() => {
    const { user,basket } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation(); // Получаем текущий путь страницы

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        basket.setBasketID(0);
        basket.deleteAllClothes();
    }

    return (
        <Navbar variant="dark" style={{ borderTop: '0', backgroundColor: '#827cb8', paddingLeft: '70px', paddingRight: '70px' }}>
            <Container fluid>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>UsefulStore</NavLink>
                {user.isAuth ? (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        {/* Проверяем, не находимся ли мы на странице аутентификации */}
                        {location.pathname !== LOGIN_ROUTE && (
                            <>
                                <NavLink to={BASKET_ROUTE} style={{ textDecoration: 'none' }}>
                                    <img src={chum} alt="Cart" style={{ width: '30px', marginLeft: '10px', marginTop: '5px' }} />
                                </NavLink>
                                {user._role === 'ADMIN' && ( // Проверяем роль пользователя
                                    <Button
                                        variant={"outline-light"}
                                        onClick={() => navigate(ADMIN_ROUTE)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Админ панель
                                    </Button>
                                )}
                                <Button
                                    variant={"outline-light"}
                                    onClick={() => logOut()}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Выйти
                                </Button>
                            </>
                        )}
                    </Nav>
                ) : (
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
