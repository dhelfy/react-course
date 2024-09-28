import "./styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { private_routes_arr, public_routes_arr } from "./router/routes";
import { useState } from "react";

function App() {
  let [isLogged, setIsLogged] = useState(false)

  let private_routes = private_routes_arr.map(function (route) {
    if (route.path === "index") {
      return <Route index element={<route.element />} />
    }
    return <Route path={route.path} element={<route.element />} />
  })

  let public_routes = public_routes_arr.map(function (route) {
    return <Route path={route.path} element={<route.element isLogged={isLogged} setIsLogged={setIsLogged}/>} />
  })

  return (
    <div className="App">
      <BrowserRouter>
        {isLogged ?
          <Routes>
            <Route path="/" element={<Layout />}>
              {private_routes}
            </Route>
          </Routes>
          :
          <Routes>
              {public_routes}
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;