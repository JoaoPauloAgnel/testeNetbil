import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MeuContato from "./pages/MeuContato";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import PaginaBase from "./pages/PaginaBase";
import Colaboradores from "./pages/Colaboradores";

function AppRoutes() {
    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<PaginaBase/>}>
                <Route index element={<Home />}></Route>
                <Route path="/Sobre" element={<Sobre />}></Route>
                <Route path="/MeuContato" element={<MeuContato />}></Route>
                <Route path="/Colaboradores" element={<Colaboradores />}></Route>
                <Route path="*" element={<Page404 />}></Route>
            </Route>
        </Routes>
    </HashRouter>
    )
}

export default AppRoutes