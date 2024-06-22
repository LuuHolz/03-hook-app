import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserProvider';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { NavbarApp } from './NavbarApp';

const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp 1</h1>
        <NavbarApp/>

        <hr />

        <Routes>
            <Route path="/" element={ <HomePage/>}/>
            <Route path="login" element={ <LoginPage/>}/>
            <Route path="about" element={ <AboutPage/>}/>

            {/* Redireccion a otro componente si hay un error/ no existe la ruta HAY DOS FORMAS:*/}
           {/* <Route  path="/*" element={ <LoginPage/> }/> */}
           <Route path="/*" element={ <Navigate to="/about"/> }/>
        </Routes>
    </UserProvider>
  )
}

export { MainApp }