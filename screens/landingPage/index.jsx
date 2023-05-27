import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native"

const LandingPage = (props) => {
    const { setLoginMethod } = props

    const handleGuestLogin = () => {
        setLoginMethod('Guest')
    }

    return(
        <View style={styles.landingPage}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/bcferries.png')}
                    style={styles.ferryLogo}
                    />
                <Text style={styles.h1}>Unofficial App</Text>
            </View>
            
            <View style={styles.loginContainer}>
                <Pressable 
                    style={styles.googleLogin}>
                    <Text style={styles.loginText}>Log in with Google</Text>
                </Pressable>

                <Pressable 
                    style={styles.emailLogin}>
                    <Text style={styles.loginText}>Log in with Email</Text>
                </Pressable>

                <Pressable 
                    onPress={handleGuestLogin}
                    style={styles.guestLogin}>
                    <Text style={styles.loginText}>Continue as Guest</Text>
                </Pressable>

                <Pressable 
                    style={styles.signUp}>
                    <Text style={styles.createAccount}>Create Account</Text>
                </Pressable>
            </View>

            <View style={styles.footer}>
                <Image 
                    source={require('../../assets/ferryPicture.jpg')}
                    style={styles.ferryPicture}
                    />
                <Text 
                    style={styles.footerText}
                    onPress={() => Linking.openURL('https://www.bcferriesapi.ca/')}>
                    Made with BC Ferries API by Sam Pratt
                </Text>
                <Text 
                    style={styles.footerText}
                    onPress={() => Linking.openURL('https://tristanthorburn.com')}>
                    Tristan Thorburn
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    landingPage:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
    },
    logoContainer:{
        position:'absolute',
        top:150,
    },
    ferryLogo:{
        resizeMode: 'contain',
        width:325,
    },
    h1:{
        textAlign:'center',
        fontSize:20,
    },
    loginContainer: {
        height: 275,
        width: 300,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    googleLogin:{
        width: '80%',
        backgroundColor: '#0079A5',
        alignItems: 'center',
    },
    emailLogin:{
        width: '80%',
        backgroundColor: '#0079A5',
        alignItems: 'center',
    },
    guestLogin:{
        width: '80%',
        backgroundColor: '#0079A5',
        alignItems: 'center',
    },
    signUp:{
        backgroundColor:'#1A4A84',
        width:'80%',
        alignItems:'center',
    },
    loginText: {
        fontSize: 24,
        color:'white',
    },
    createAccount:{
        color:'white',
        fontSize: 24,
    },
    ferryPicture:{
        resizeMode:'contain',
        height:125,
    },
    footer:{
        position:'absolute',
        bottom:0,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height:250,
    },
    footerText:{
        fontSize:18,
    }
})

export default LandingPage;