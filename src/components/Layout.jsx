import { Outlet } from "react-router-dom";
import NavBar from "./UI/NavBar/NavBar";

// лэйаут для всех страниц
export default function Layout () {
    return (
        <>
            {/* NavBar будет присутствовать на каждой странице */}
            <NavBar />
            {/* В компонент Outlet будет вставлен весь контент */}
            <Outlet />
        </>
    )
}