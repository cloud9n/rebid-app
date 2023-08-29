/*
PARTS WITH CHANGES

1. All TextInput ===>> changed all onChange to onChangeText
2. {({ handleChange, handleBlur, handleSubmit, values, touched }) ===>> added errors
3. <Text style={styles.errorText}>error</Text> ===>> some logic
*/

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { theme } from '../config/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../assets/logo';
import { Home } from './Home';
import { db } from '../config/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../config/firebase.config';

export function Profile({ navigation }) {
    const regTime = new Date().getTime();
    //async function to check and uthenticate user

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Logo />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: 'column',
        gap: 16,
    },

})