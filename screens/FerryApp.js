import {View, Text, StyleSheet, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';

const FerryApp = (props) => {
    const { loginMethod, setLoginMethod } = props

    const handleLogOut = () => {
        if(loginMethod === 'Guest'){
            setLoginMethod('')
        }
        if(loginMethod.email !== ''){
            auth()
            .signOut()
            .then(setLoginMethod(null));
        }
    }

    return(
        <View style={styles.ferryAppContainer}>
            {loginMethod === 'Guest'
                ? <Text>Welcome {loginMethod}</Text>
                : null
            }
            {loginMethod !== 'Guest' && loginMethod.email !== null
                ? <Text>Welcome {loginMethod.displayName}</Text>
                : null
            }
            <Pressable onPress={handleLogOut}>
                <Text>Log Out?</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ferryAppContainer:{
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FerryApp;