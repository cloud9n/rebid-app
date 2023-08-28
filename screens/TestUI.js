import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Platform, StatusBar, TextInput, ImageBackground } from 'react-native';
import { demoProducts } from '../assets/demo-products';
import { faCartShopping, faGavel, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { theme } from '../config/theme';
import { Button, } from 'react-native-paper';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CommaSepNum } from '../utilities/comma-sep-num';
import { Logo } from '../assets/logo';
import { LinearGradient } from 'expo-linear-gradient';

const ProductInfo = () => {
    return (
        <>

            <View style={styles.container}>

                {/* <ImageBackground style={styles.backImage} source={require('../assets/bid.jpg')} > */}

                <View>


                    <LinearGradient style={{ borderRadius: 30 }} colors={[theme.colors.dullRed1, theme.colors.dullRed0]}>
                        <Logo />
                        <View style={styles.header}>


                            <TextInput style={styles.searchArea} backgroundColor={theme.colors.dullRed0} placeholder='Search Bids' />
                            <TouchableOpacity style={styles.Button} o>
                                <Text nPress={() => alert('Search pressed')}>
                                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                                    <FontAwesomeIcon icon={faHeart} color={theme.colors.navy}
                                        style={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            right: 1,
                                            margin: 10,
                                        }} /></Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>

                </View>


                {/* </ImageBackground> */}

                <FlatList
                    data={demoProducts}
                    renderItem={({ item }) => <TouchableOpacity style={styles.product}>
                        <View style={styles.productBody}>
                            <View style={styles.likeWrapper}>
                                <FontAwesomeIcon icon={faHeart} color={theme.colors.dullRed1} />
                            </View>
                            <Image source={{ uri: item.imageUr }} style={styles.image} />
                            <View style={styles.description}>
                                <Text style={styles.category}>Category</Text>
                                <Text style={styles.titleText}>{item.title.length > 13 ? item.title.slice(0, 13) + '...' : item.title}</Text>
                                <Text style={styles.discriptionText}>For the love coding.</Text>
                                <View style={styles.priceCart}>
                                    <Text style={styles.price}>Bids :{item.numberOfBids}</Text>
                                    <Text style={styles.price}>{CommaSepNum(item.currentBid)}</Text>
                                </View>
                                <TouchableOpacity>

                                    <View style={styles.bidButton}><FontAwesomeIcon style={styles.gavel} icon={faGavel} color={theme.colors.dullRed0} size={20} /><Text style={{ color: theme.colors.dullRed0, }}>Bid</Text></View>
                                </TouchableOpacity>
                                {/* <Button><FontAwesomeIcon style={styles.like} icon={faGavel} size={15} />Bid</Button> */}

                            </View>
                        </View>
                    </TouchableOpacity>}
                    keyExtractor={item1 => item1.id}

                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
                <View style={styles.footer}>

                </View>

            </View >
        </>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: theme.colors.dullRed0,
        // paddingHorizontal: 8,
        // paddingBottom: 10,
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,

    },

    header: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.colors.navy,
        height: 70,
        borderRadius: 50,
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,

    },
    backImage: {
        width: '100%',
        height: 180,
        borderRadius: 20,
    },
    searchArea: {
        width: '90%',
        position: 'relative',
        height: 40,
        marginRight: 5,
        borderRadius: 50,



    },
    Button: {
        backgroundColor: theme.colors.dullRed1,
        borderRadius: 5,
        width: 40,
        height: 40,
        position: 'relative',
        color: theme.colors.dullRed1,
        padding: 13,
    },
    description: {
        backgroundColor: theme.colors.navy,
        borderRadius: 10,
        width: '100%',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    productBody: {
        borderRadius: 10,
        marginBottom: 10,
        padding: 6,
        backgroundColor: theme.colors.dullRed0,
    },
    product: {
        width: '50%',
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        margin: 1,
    },
    likeWrapper: {
        width: 30,
        height: 30,
        backgroundColor: theme.colors.dullRed0,
        zIndex: 1,
        position: 'absolute',
        right: 1,
        borderRadius: 5,
        margin: 10,
        padding: 6,
    },
    image: {
        width: '100%',
        height: 145,
        alignSelf: 'center',
        borderRadius: 10,
    },
    category: {
        color: theme.colors.dullRed0,
        fontSize: 10,
        textAlign: 'left',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: theme.colors.dullRed1,

    },
    discriptionText: {
        fontSize: 12,
        textAlign: 'center',
        color: theme.colors.dullRed0,

    },
    bidButton: {
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: theme.colors.dullRed1,
        width: '55%',
        position: 'absolute',
        color: theme.colors.dullRed0,
        flexDirection: 'row',
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.dullRed1,
        padding: 5,
        justifyContent: 'space-around',
        // Align view center
        alignSelf: 'center',

    },
    priceCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 7,
        marginBottom: 5,

    },
    price: {
        fontSize: 13,
        fontWeight: 'bold',
        color: theme.colors.dullRed0,
    },


})

export default ProductInfo;