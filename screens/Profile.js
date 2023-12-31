
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert,
    Image,
    ImageBackground,

} from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from '../config/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../assets/logo';
import { Home } from './Home';
import { db } from '../config/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../config/firebase.config';
import { CommaSepNum } from '../utilities/comma-sep-num';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';


const userUID = 'LNVq7Yvn5wO2HwtKiK6VY1KMSuF3';


export function Profile({ navigation }) {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    // console.log('>>>users<<<<', user)

    const regTime = new Date().getTime();
    // useEffect(() => {
    //     const getUser = async () => {
    //         await getDoc(doc(db, 'users', userUID))
    //             .then(onSnap => console.log('>>>>>>', onSnap.data()))
    //             .catch(e => console.log(e))
    //     }

    //     const getUsers = async () => {
    //         await getDoc(collection(db, 'users'));
    //         setUsers(onSnap.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     ...doc.data()
    //                 }
    //             }
    //         }))
    //         console.log(getUsers)
    //     }
    //     getUser();
    // },[])
    const getUser = async () => {
        await getDoc(doc(db, 'users', userUID))
            .then(onSnap => console.log('>>>>>>', onSnap.data()))
            .catch(e => console.log(e))
    }


    // const getUsers = async () => {
    //     const onSnap = await getDocs(collection(db, 'users'));
    //     setUsers(onSnap.docs.map(doc => {
    //         return {
    //             id: doc.id,
    //             data: {
    //                 ...doc.data()
    //             }
    //         }
    //     }))

    // }
    // getUsers();

    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{ height: '100%', width: 'auto', }}>
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.header}>

                        <View style={styles.subheader}>
                            <Text style={styles.bodyTitle}>My Profile</Text>
                            <TouchableOpacity style={{
                                backgroundColor: theme.colors.dullRed1,
                                width: 30,
                                height: 30,
                                borderRadius: 100,
                                marginTop: 140,
                                marginLeft: 100,
                                zIndex: 3,
                                alignItems: 'center',
                                padding: 3,
                            }}>
                                <Image source={require('../assets/upload.png')} style={{
                                    zIndex: 3,

                                }} />
                            </TouchableOpacity >
                            <Image style={styles.profileImg} source={require('../assets/user.jpg')}
                                height={80}
                                width={80}
                                alt='user photo' />
                            <FontAwesomeIcon style={styles.uploadIcon} icon={faGavel} color={theme.colors.dullRed0} />
                            <Text style={styles.title}>Indiya Reuben</Text>

                        </View>
                        {/* </ImageBackground> */}

                        <View style={styles.infoRow}>

                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Earned</Text>
                                <Text style={styles.infoText}>₦{CommaSepNum(291991)}</Text>

                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Earned</Text>
                                <Text style={styles.infoText}>₦{CommaSepNum(291991)}</Text>

                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoTitle}>Earned</Text>
                                <Text style={styles.infoText}>₦{CommaSepNum(291991)}</Text>

                            </View>

                        </View>

                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodyContainer}>
                            <TouchableOpacity style={styles.containerView}>
                                <View style={styles.logoBG}>
                                    <FontAwesomeIcon style={styles.uploadIcon} icon={faGavel} color={theme.colors.navy} />
                                </View>
                                <Text style={styles.bodyTitle}>My Products</Text>
                                <Text style={styles.bodyText}>{CommaSepNum(291)}</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerView}>
                                <View style={styles.logoBG}>
                                    <FontAwesomeIcon style={styles.uploadIcon} icon={faGavel} color={theme.colors.navy} />

                                </View>
                                <Text style={styles.bodyTitle}>My Bids</Text>
                                <Text style={styles.bodyText}>{CommaSepNum(291)}</Text>


                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button
                        mode='contained'
                        buttonColor={theme.colors.navy}
                        textColor={theme.colors.dullRed0}
                        style={{ paddingVertical: 8, }}
                    >Update Profile</Button>

                </View>
            </SafeAreaView >
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "rgba(238,226,222,0.5)",
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: 'column',
        gap: 16,
    },
    uploadIcon: {


    },
    header: {

    },
    subheader: {

        alignItems: 'center',
        backgroundColor: theme.colors.navy,
        borderBottomEndRadius: 200,
        borderBottomLeftRadius: 200,
        paddingTop: 20,
        height: 200,
        borderBottomWidth: 3,
        borderBottomColor: theme.colors.dullRed1,


    },
    profileImg: {
        borderRadius: 100,
        width: 100,
        height: 100,
        position: 'absolute',
        zIndex: 2,
        marginTop: 130,
        borderWidth: 2,
        borderColor: theme.colors.dullRed1

    },
    title: {
        position: 'absolute',
        marginTop: 250,
        fontSize: 30,

    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '30%',
        position: 'relative',
        borderWidth: 0.5,
        borderBottomColor: theme.colors.navy,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: theme.colors.dullRed0,
        padding: 10,
    },
    info: {},
    infoTitle: {
        fontSize: 20,

    },
    infoText: {},
    body: {

    },
    bodyContainer: {
        flexDirection: 'row',
        // 
        justifyContent: 'space-around',
        marginTop: 10,
    },
    containerView: {
        width: '40%',
        height: 230,
        backgroundColor: theme.colors.navy,
        borderRadius: 20,
        alignItems: 'center'
    },
    logoBG: {
        width: 30,
        height: 30,
        backgroundColor: theme.colors.dullRed1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 3,
        marginTop: 10,
    },
    bodyTitle: {
        fontSize: 20,
        color: theme.colors.dullRed0
    },
    bodyText: {
        color: theme.colors.dullRed0,
        fontSize: 50,
        margin: '10%'
    }

})