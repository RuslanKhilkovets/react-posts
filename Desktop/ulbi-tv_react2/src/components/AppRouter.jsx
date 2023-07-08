import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import { useContext } from "react";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading) <Loader/>

    return (
        <>
            {isAuth
                ?
                <Routes>    
                    {privateRoutes.map((route) => (
                            <Route
                                key={route.path}
                                element={<route.component />}
                                path={route.path}
                                exact={route.exact}
                            />
                    ))}
                    
                </Routes>
                :
                <Routes>    
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={<route.component />}
                            path={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Routes>
            }
            
            
        </>
        
    );
};

export default AppRouter;