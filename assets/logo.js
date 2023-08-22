import { Text, View, StyleSheet, Platform } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import { theme } from "../config/theme";
import { StatusBar } from "expo-status-bar";

export const Logo = () => {
    return (
        <>
            <View style={styles.logoCover}>
                <View style={styles.logo}>
                    <FontAwesomeIcon icon={faGavel} size={30} color={theme.colors.dullRed1} beatFade />
                </View>
                <Text style={styles.brandName}>Rebid</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    logo: {
        backgroundColor: theme.colors.navy,
        borderRadius: 360,
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    logoCover: {
        flexDirection: 'row',
        marginTop: '10%',
        alignSelf: 'center',
        zIndex: 1,

    },
    brandName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.navy,
        marginLeft: 2,

    },

});


