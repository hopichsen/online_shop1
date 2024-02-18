import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { getAll, getOneByUserID } from '../http/basketAPI';

const Auth = observer(() => {
    const { user, basket } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;

            if (isLogin) {
                data = await login(email, password); // Pass email and password to login function
            } else {
                data = await registration(email, password); // Pass email and password to registration function
            }
            const id = data.id;
            user.setID(id)
            user.setUser(user);
            user.setIsAuth(true);
            user.setRole(data.role);
            basket.setBasketID(id);
            getAll().then(basketData => {
                [...basketData.filter(item => item.basketId == id)].forEach(basketItem => {
                    basket.setBasketClothes(basketItem.clotheId)
                })
            })
            navigate(SHOP_ROUTE);

        } catch (e) {
            alert(e.response.data.message);
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: 'none', color: '#827cb8' }}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{ textDecoration: 'none', color: '#827cb8' }}>Войдите!</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
