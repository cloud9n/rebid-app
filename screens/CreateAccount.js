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
import { Formik } from 'formik';
import { theme } from '../config/theme';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../assets/logo';
import { Home } from './Home';
import { db } from '../config/firebase.config';
import { setDoc, doc } from 'firebase/firestore';

import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../config/firebase.config';


const schema = yup.object().shape({
    fName: yup.string().min(3).required(),
    lName: yup.string().min(3).required(),
    email: yup.string().min(8).max(60).required(),
    password: yup.string().min(8).max(32).required(),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'password must match')
});

export function CreateAccount({ navigation }) {
    const regTime = new Date().getTime();
    //async function to check and uthenticate user
    const handleCreateAccount = async (email, pass, fName, lName) => {
        await createUserWithEmailAndPassword(authentication, email, pass, fName, lName)
            .then(() => {
                Alert.alert(
                    'Status Report',
                    'Your account was created successfully',
                    [{
                        text: 'Proceed',
                        onPress: () => navigation.navigate('my-home')
                    }]
                );
                //checks for userid
                onAuthStateChanged(authentication, user => {
                    const uid = user.uid;
                    console.log(uid);
                    setDoc(doc(db, 'users', uid), {
                        firstName: fName,
                        lastName: lName,
                        email: email,
                        createdAt: 'regTime',
                    });
                })
                    .catch((e) => Alert.alert(
                        'Status Report',
                        'Error',
                        [{
                            text: 'Dismiss',
                            onPress: () => console.log(e)
                        }]
                    ));
            })
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                {/* <View style={styles.logo}>

                    <FontAwesomeIcon icon={faGavel} size={40} color={theme.colors.dullRed1} beatFade />

                </View>
                <Text style={styles.brandName}>Rebid</Text> */}
                <Logo />

                <View style={styles.form}>
                    <Formik
                        initialValues={{ fName: '', lName: '', email: '', password: '', passwordConfirmation: '' }}
                        onSubmit={values => console.log(values.email)
                            //     {
                            //     handleCreateAccount(values.email, values.password)
                            // }
                        }
                        validationSchema={schema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                            <>
                                <View>
                                    <TextInput
                                        mode='outlined'
                                        value={values.fName}
                                        onChangeText={handleChange('fName')}
                                        onBlur={handleBlur('fName')}
                                        placeholder='first name' />
                                    {errors.fName && touched.fName
                                        ? <Text style={styles.errorText}>{errors.fName}</Text>
                                        : null}
                                </View>
                                <View>
                                    <TextInput
                                        mode='outlined'
                                        value={values.lName}
                                        onChangeText={handleChange('lName')}
                                        onBlur={handleBlur('lName')}
                                        placeholder='last name' />
                                    {errors.lName && touched.lName
                                        ? <Text style={styles.errorText}>{errors.lName}</Text>
                                        : null}
                                </View>
                                <View>
                                    <TextInput
                                        mode='outlined'
                                        keyboardType='email-address'
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        placeholder='email address' />
                                    {errors.email && touched.email
                                        ? <Text style={styles.errorText}>{errors.email}</Text>
                                        : null}
                                </View>
                                <View>
                                    <TextInput
                                        mode='outlined'
                                        keyboardType='default'
                                        secureTextEntry={true}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        placeholder='create password' />
                                    {errors.password && touched.password
                                        ? <Text style={styles.errorText}>{errors.password}</Text>
                                        : null}
                                </View>
                                <View>
                                    <TextInput
                                        mode='outlined'
                                        keyboardType='default'
                                        secureTextEntry={true}
                                        value={values.passwordConfirmation}
                                        onChangeText={handleChange('passwordConfirmation')}
                                        onBlur={handleBlur('passwordConfirmation')}
                                        placeholder='confirm password' />
                                </View>

                                <Button
                                    mode='contained'
                                    buttonColor={theme.colors.navy}
                                    textColor={theme.colors.dullRed0}
                                    style={{ paddingVertical: 8 }}
                                    onPress={() => {
                                        handleSubmit();
                                        handleCreateAccount(values.email, values.password, values.fName, values.lName)
                                    }
                                    }
                                >Create Account</Button>
                            </>
                        )}
                    </Formik>
                </View>

                <View style={styles.existingUser}>
                    <Text style={styles.existingUserText}>Already have a Rebid account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                        <Text style={[styles.existingUserText, { color: theme.colors.dullRed1 }]}>Go to Sign in</Text>
                    </TouchableOpacity>
                </View>
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
    brandName: {
        fontSize: 42,
        fontWeight: 'bold',
        color: theme.colors.dullRed1
    },
    form: {
        flexDirection: 'column',
        gap: 8,
    },
    errorText: {
        fontSize: 12,
        color: theme.colors.red,
    },
    existingUser: {
        flexDirection: 'row',
        gap: 4,
    },
    existingUserText: {
        fontSize: 18
    }
})