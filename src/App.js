import "./styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { private_routes_arr, public_routes_arr } from "./router/routes";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/context";

function App() {
  let [isLogged, setIsLogged] = useState(false)

  let private_routes = private_routes_arr.map(function (route, i) {
    if (route.path === "index") {
      return <Route index element={<route.element />} key={i}/>
    }
    return <Route path={route.path} element={<route.element />} key={i}/>
  })

  let public_routes = public_routes_arr.map(function (route, i) {
    return <Route path={route.path} element={<route.element />} key={i}/>
  })

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsLogged(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
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
    </AuthContext.Provider>
  );
}

export default App;