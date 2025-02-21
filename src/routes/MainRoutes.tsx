import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
    )
}