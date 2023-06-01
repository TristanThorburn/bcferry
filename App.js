import {Button, View} from 'react-native'
import { useState } from 'react';
import LandingPage from './screens/LandingPage';
import FerryApp from './screens/FerryApp';


const App = () =>{
  const [ loginMethod, setLoginMethod ] = useState(null)

  return(
    <View>
      {loginMethod === '' || loginMethod === null
        ? <LandingPage 
            setLoginMethod={setLoginMethod}
            />
        : loginMethod === 'Guest'
          ? <FerryApp
              loginMethod={loginMethod}
              setLoginMethod={setLoginMethod}
              />
          : loginMethod.email !== ''
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