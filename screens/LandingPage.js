import { View, Text, Image, StyleSheet, Pressable, Linking } from "react-native"
import { useEffect, useState } from "react";
import 'expo-dev-client';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LandingPage = (props) => {
    GoogleSignin.configure({
      webClientId: '884581971899-m8fsn37g6ks0dllvtsp111p2kuvpcsqb.apps.googleusercontent.com',
    });
    const { setLoginMethod } = props
    const [initializing, setInitializing] = useState(true);

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
    
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        // return auth().signInWithCredential(googleCredential);

        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setLoginMethod(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    const handleGuestLogin = () => {
        setLoginMethod('Guest')
    }

    return(
        <View style={styles.landingPage}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/bcferries.png')}
                    style={styles.ferryLogo}
                    />
                <Text style={styles.heading}>Unofficial App</Text>
            </View>
            
            <View style={styles.loginContainer}>
                <GoogleSigninButton onPress={onGoogleButtonPress}/>

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
                    source={require('../assets/ferryPicture.jpg')}
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
    heading:{
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