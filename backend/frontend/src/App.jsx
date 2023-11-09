import { HashRouter, Routes,  Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ClasesScreen from './screens/ClasesScreen';
import UserScreen from './screens/UserScreen'


function App() {
      const userInfoFromRedux = useSelector((state) => state.userInfo.userInfo)

      const [userInfo, setUserInfo] = useState(userInfoFromRedux)

      useEffect(() => {
            setUserInfo(userInfoFromRedux)
      }, [userInfoFromRedux]);

      return (
            <>
                  
                  <HashRouter basename='/'>
                  <Header userInfo={userInfo}/>
                        <Routes >
                              <Route path="/" element={<HomeScreen/>} exact/> 
                              <Route path="/clases" Component={ClasesScreen}  /> 
                              <Route path="/user" element={<UserScreen userInfo={userInfo}/>}  /> 
                              
                        </Routes>
                  </HashRouter>
            </>
      )
}

export default App