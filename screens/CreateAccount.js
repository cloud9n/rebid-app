import { View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, Platform, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { theme } from '../config/theme';
import { Formik } from 'formik';
import { Signin } from './Signin';
import *as yup from 'yup';

const schema = yup.object().shape({
    fName: yup.string().min(3).required(),
    lName: yup.string().min(3).required(),
    email: yup.string().min(8).max(60).required(),
    password: yup.string().min(8).max(32).required().oneOf,
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Password must match')

});

export function CreateAccount({ navigation }) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.brandName}>Rebid</Text>
                {/* form here */}
                <View style={styles.form}>

                    <Formik
                        initialValues={{ fName: '', lName: '', email: '', password: '', passwordConfirmation: '' }}
                        onSubmit={values => console.log(values)}
                        validationSchema={schema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched }) => (
                            <>

                                <View>
                                    <TextInput
                                        onChangeText={handleChange('fName')}
                                        mode='outlined'
                                        onChange={handleChange('fName')}
                                        onBlur={handleBlur('fname')}
                                        value={values.fName}
                                        placeholder='First Name'

                                    />
                                    <Text style={styles.erroText}>error</Text>

                                </View>

                                <View>
                                    <TextInput
                                        onChangeText={handleChange('lName')}
                                        mode='outlined'
                                        // onChange={handleChange('lName')}
                                        onBlur={handleBlur('lName')}
                                        value={values.lName}
                                        placeholder='Last Name'

                                    />
                                    <Text style={styles.erroText}>error</Text>
                                </View>
                                <View>
                                    <TextInput
                                        onChangeText={handleChange('email')}
                                        mode='outlined'
                                        keyboardType='email'
                                        // onChange={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder='Email'

                                    />
                                    <Text style={styles.erroText}>error</Text>
                                </View>
                                <View>
                                    <TextInput
                                        onChangeText={handleChange('password')}
                                        mode='outlined'
                                        keyboardType='password'
                                        secureTextEntry={true}
                                        // onChange={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder='Password'

                                    />
                                    <Text style={styles.erroText}>error</Text>
                                </View>
                                <View>
                                    <TextInput
                                        onChangeText={handleChange('passwordConfirm')}
                                        mode='outlined'
                                        keyboardType='passwordConfirm'
                                        secureTextEntry={true}
                                        // onChange={handleChange('passwordConfirm')}
                                        onBlur={handleBlur('passwordConfirm')}
                                        value={values.passwordConfirm}
                                        placeholder='Confirm Password'

                                    />
                                    <Text style={styles.erroText}>error</Text>

                                </View>
                                <Button mode='outlined' buttonColor={theme.colors.navy} textColor={theme.colors.dullRed0} onPress={handleSubmit}>Create Account</Button>
                            </>
                        )}
                    </Formik>
                </View>
                <View style={styles.existingUser}>
                    <Text style={styles.existingUserText}>Already have a Rebid account?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.existingUserText, { color: theme.colors.dullRed1 }]}
                            onPress={() => navigation.navigate('Signin')}
                        >Go to Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    existingUser: {
        flexDirection: 'row',
        gap: 4,

    },
    existingUserText: {

    },
    form: {
        flexDirection: 'column',
        gap: 8,

    },
    erroText: {

    },

});


