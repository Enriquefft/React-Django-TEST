import { BrowserRouter, Routes,  Route } from 'react-router-dom'
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
                  <Header userInfo={userInfo}/>
                  <BrowserRouter >
                        <Routes >
                              <Route path="/" Component={HomeScreen} /> 
                              <Route path="/clases" Component={ClasesScreen}  /> 
                              <Route path="/user" element={<UserScreen userInfo={userInfo}/>}  /> 
                              
                        </Routes>
                  </BrowserRouter>
            </>
      )
}

export default App