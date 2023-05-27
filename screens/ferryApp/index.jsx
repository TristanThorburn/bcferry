import {View, Text, StyleSheet, Pressable} from 'react-native'

const FerryApp = (props) => {
    const { loginMethod, setLoginMethod } = props

    const handleLogOut = () => {
        setLoginMethod('')
    }

    return(
        <View style={styles.ferryAppContainer}>
            {loginMethod === 'Guest'
                ? <Text>Welcome {loginMethod}</Text>
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