import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { demoProducts } from '../assets/demo-products';
import { theme } from '../config/theme';


const ProductInfo = () => {
    return (
        <View style={styles.container}>



            <FlatList
                data={demoProducts}
                renderItem={({ item }) => <TouchableOpacity style={styles.product}>
                    <Image source={{ uri: item.imageUr }} style={styles.image} />
                    <View style={styles.description}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.discriptionText}>{item.discription}</Text>
                        <View style={styles.priceCart}>
                            <Text style={styles.price}>Bids :{item.numberOfBids}</Text>
                            <Text style={styles.price}>{item.currentBid}</Text>

                        </View>

                    </View>
                </TouchableOpacity>}
                keyExtractor={item => item.id}

                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
            <View style={styles.footer}>

            </View>

        </View >

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 8,
        paddingBottom: 10
    },
    description: {
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        width: '100%',
    },
    header: {
        paddingBottom: 20,
        paddingHorizontal: 15,
        marginTop: 30
    },
    headerText: {
        fontSize: 25,
        color: 'white'
    },
    product: {
        width: 180,
        height: 250,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.navy,
        borderRadius: 20,
        paddingHorizontal: 15,
        margin: 3,
    },
    image: {
        width: '100%',
        height: 145,
        alignSelf: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    discriptionText: {
        fontSize: 10,
    },
    priceCart: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    cartImg: {
        width: 30,
        height: 30,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerTabImg: {
        width: 50,
        height: 50
    },
})

export default ProductInfo;