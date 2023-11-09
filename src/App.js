import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { isJsonString } from './utils'
import {jwtDecode} from "jwt-decode";
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
import * as UserService from './services/UserService'
function App() {
  const disPatch = useDispatch();
  const user = useSelector((state) => state.user) 
  useEffect(() => {
    const { decoded, storageData} = handleDecoded()
    if(decoded?.id){
      handleGetDetailsUser(decoded?.id, storageData)
    }
  },[])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if(storageData && isJsonString(storageData)){
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData);
      }
      
      return {decoded,storageData}
    } 
    UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if(decoded?.exp < currentTime.getTime() / 1000){
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    // Do something with request error
    return Promise.reject(err);
  });
  const handleGetDetailsUser = async(id,token) => {
    const res = await UserService.getDetailUser(id,token)
    disPatch(updateUser({...res?.data, access_token: token}))
  }
  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page =route.page
              const ischeckAuth = !route.isPrivate || user.isAdmin
              const Layout =route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route path={route.path} key={ ischeckAuth && route.path} element={
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