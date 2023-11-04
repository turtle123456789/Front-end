  import React, { Fragment, useEffect } from 'react'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import { routes } from './routes'
  import DefaultComponent from './components/DefaultComponent/DefaultComponent'
  import { isJsonString } from './utils'
  import {jwtDecode} from "jwt-decode";
  import {useDispatch} from 'react-redux'
  import { updateUser } from './redux/slides/userSlide'
  import * as UserService from './services/UserService'
  function App() {
    const disPatch = useDispatch();
    useEffect(() => {
      let storageData = localStorage.getItem('access_token')
      if(storageData && isJsonString(storageData)){
        storageData = JSON.parse(storageData)
        const decoded = jwtDecode(storageData);
        if(decoded?.id){
          handleGetDetailsUser(decoded?.id, storageData)
        }
      }
      console.log('storageData', storageData)
    },[])
    const handleGetDetailsUser = async(id,token) => {
      const res = await UserService.GetDetailUser(id,token)
      console.log('res', res)
      disPatch(updateUser({...res?.data, access_token: token}))
    }
    return (
      <div>
          <Router>
            <Routes>
              {routes.map((route) => {
                const Page =route.page
                const Layout =route.isShowHeader ? DefaultComponent : Fragment
                return (
                  <Route key={route.path} path={route.path} element={
                    <Layout>
                      <Page/>
                    </Layout>
                  } />
                )
              })}
            </Routes>
          </Router>
      </div>
    )
  }
  export default App