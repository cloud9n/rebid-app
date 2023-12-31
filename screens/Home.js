import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from '../config/theme';
import { demoProducts } from '../assets/demo-products';
import { categories } from "../assets/categories";
import { CommaSepNum } from '../utilities/comma-sep-num';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Sell } from './Sell';
import { History } from './History';
import { Profile } from './Profile';
import { MyBids } from './MyBids';
import { Ionicons } from "@expo/vector-icons";
import { Logo } from "../assets/logo";
import ProductInfo from "./Products";

const Tab = createBottomTabNavigator();

function MyHome() {

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Logo />
                </View>

                {/* categories block */}
                <View style={styles.categoriesBlock}>
                    {categories.map(cat => (
                        <TouchableOpacity style={styles.catOption} key={cat.id}>
                            <FontAwesomeIcon
                                icon={cat.icon}
                                size={40}
                                color={theme.colors.dullRed1} />
                            <Text style={{ fontSize: 16, color: theme.colors.dullRed0 }}>
                                {cat.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.expiringBlock}>
                    <Text style={styles.expSoonText}>Expiring soon</Text>

                    <View>
                        <FlatList
                            data={demoProducts}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.expItem,
                                        { width: 340, backgroundColor: theme.colors.dullRed0, marginRight: 18, }
                                    ]}>
                                    <Image
                                        style={styles.productImg}
                                        source={{ uri: item.imageUr }} />
                                    <View style={styles.expItemsDetailsBlk}>
                                        <Text style={{ fontSize: 12 }}>Ending in 1d 5hrs 32min 44secs</Text>
                                        <Text style={{ fontSize: 16 }}>{item.title.length > 24 ? item.title.slice(0, 24) + '...' : item.title}</Text>
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>₦{CommaSepNum(item.currentBid)}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            key={({ item }) => item.id} />
                    </View>
                </View>

                <View style={styles.recentBlock}>
                    <Text style={styles.expSoonText}>Recent auctions</Text>

                    <View>
                        <FlatList
                            data={demoProducts}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.expItem,
                                        { backgroundColor: theme.colors.navy, marginBottom: 8, }
                                    ]}>
                                    <Image
                                        style={styles.productImg}
                                        source={{ uri: item.imageUr }} />
                                    <View style={styles.expItemsDetailsBlk}>
                                        <Text style={{ fontSize: 12, color: theme.colors.dullRed0 }}>Ending in 1d 5hrs 32min 44secs</Text>
                                        <Text style={{ fontSize: 16, color: theme.colors.dullRed1 }}>{item.title.length > 24 ? item.title.slice(0, 24) + '...' : item.title}</Text>
                                        <Text style={{ fontSize: 20, fontWeight: '600', color: theme.colors.dullRed1 }}>₦{CommaSepNum(item.currentBid)}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            key={({ item }) => item.id} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export function Home() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Sell') {
                        iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
                    } else if (route.name === 'Bids') {
                        iconName = focused ? 'hammer' : 'hammer-outline';
                    } else if (route.name === 'History') {
                        iconName = focused ? 'md-file-tray-stacked' : 'ios-file-tray-stacked-outline';
                    } else if (route.name === 'ProductsInfo') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.dullRed1,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home' component={MyHome} options={{ headerShown: false }} />
            <Tab.Screen name='Sell' component={Sell} options={{ headerShown: false }} />
            <Tab.Screen name='Bids' component={MyBids} options={{ headerShown: false }} />
            <Tab.Screen name='History' component={History} options={{ headerShown: false }} />
            <Tab.Screen name='Products' component={ProductInfo} options={{ headerShown: false }} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
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
    },
    header: {
        flex: 0.5,
    },
    brandName: {
        fontSize: 42,
        fontWeight: 'bold',
        color: theme.colors.dullRed1
    },
    headerControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    expiringBlock: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8
    },
    expSoonText: {
        fontSize: 20,
        fontWeight: '200'
    },
    expItem: {
        flexDirection: 'row',
        gap: 12,
        borderRadius: 8,
        padding: 8,
    },
    productImg: {
        width: 80,
        height: 100,
        borderRadius: 8
    },
    recentBlock: {
        flex: 2,
        paddingTop: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8
    },
    categoriesBlock: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignContent: 'center',
        gap: 6
    },
    catOption: {
        height: 120,
        width: '32%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: theme.colors.navy,
        borderRadius: 12,
        paddingHorizontal: 8,
    }
})