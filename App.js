import {View} from 'react-native'
import { useState } from 'react';
import LandingPage from './screens/landingPage';
import FerryApp from './screens/ferryApp';

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