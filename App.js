import {View} from 'react-native'
import { useState } from 'react';
import LandingPage from './screens/LandingPage';
import FerryApp from './screens/FerryApp';

const App = () =>{
  const [ loginMethod, setLoginMethod ] = useState('')

  return(
    <View>
      {loginMethod === ''
        ? <LandingPage 
            setLoginMethod={setLoginMethod}
            />
        : loginMethod === 'Guest'
          ? <FerryApp
              loginMethod={loginMethod}
              setLoginMethod={setLoginMethod}
              />
          : null
      }
    </View>
  )
};

export default App;