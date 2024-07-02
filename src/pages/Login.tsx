import React, { useContext } from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import { AuthContext } from '../content/context';

const Login: React.FC = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = (event: React.FormEvent) => {
        event.preventDefault();
        if (setIsAuth) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        }
    }

    return (
        <div>
            <h1 >Anmeldeseite</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Benutzername eingeben" />
                <MyInput type="password" placeholder="Passwort eingeben" />
                <MyButton>Anmelden</MyButton>
            </form>
        </div>
    );
};

export default Login;