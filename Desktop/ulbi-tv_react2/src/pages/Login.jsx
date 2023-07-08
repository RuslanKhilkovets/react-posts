import React, { useContext } from 'react';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault();
        setIsAuth(!isAuth)
        localStorage.setItem("auth", "true")
    }
    return ( 
        <div>
            <h1>Login page</h1>
            <form action="" onSubmit={login}>
                <Input type="text" placeholder="Enter login..." />
                <Input type="password" placeholder="Enter password..." />
                <Button>Sign In</Button>
            </form>
        </div>
     );
}
 
export default Login;