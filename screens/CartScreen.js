import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import ItemCart from '../components/ItemCart';

const CartScreen = () => {
    const witdhWindow = Dimensions.get('screen').width;
    const cartItems = [
        { id: '1',imageUrl : require("../img/img6.png") , productName: "Men's Tie-Dye T-Shirt Nike Sportswear", price: 10, quantity: 1 },
        { id: '2', imageUrl: require("../img/img1.png"), productName: 'Product 2', price: 20, quantity: 2 },
        { id: '3', imageUrl: require("../img/img5.png"), productName: 'Product 3', price: 30, quantity: 3 },
    ];

    return (
        <View style={styles.container}>
            
            <View style={styles.flatListContainer}>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <ItemCart
                            imageUrl={item.imageUrl}
                            productName={item.productName}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.deliveryAddressContainer}>
                <Text style={styles.deliveryAddressTitle}>Delivery Address</Text>
                <View style={styles.addressRow}>
                    <Image source={require('../img/map.png')} style={styles.mapIcon} />
                    <TouchableOpacity>
                        <Text style={styles.addressText}>43, Electronics City Phase 1, Electronic City</Text>
                    </TouchableOpacity>
                    <Image source={require('../img/Check.png')} style={styles.checkIcon} />
                </View>
            </View>
            <View style={styles.deliveryAddressContainer}>
                <Text style={styles.deliveryAddressTitle}>Payment Method</Text>
                <View style={styles.addressRow}>
                    <Image source={require('../img/map.png')} style={styles.mapIcon} />
                    <TouchableOpacity>
                        <Text style={styles.addressText}>43, Electronics City Phase 1, Electronic City</Text>
                    </TouchableOpacity>
                    <Image source={require('../img/Check.png')} style={styles.checkIcon} />
                </View>
            </View>
            <View style={styles.deliveryAddressContainer}>
                <Text style={styles.deliveryAddressTitle}>Order Information</Text>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLeft}>Subtotal:</Text>
                    <Text style={styles.orderInfoRight}>$110</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLeft}>Delivery Charge:</Text>
                    <Text style={styles.orderInfoRight}>$10</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLeft}>Total:</Text>
                    <Text style={styles.orderInfoRight}>$120</Text>
                </View>
            </View>
            <TouchableOpacity style={{ width: witdhWindow, backgroundColor: '#9775FA', position: 'absolute', bottom: 49, height: '8%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, color: 'white' }}>
                    Checkout
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 17,
        marginLeft: 10,
        textAlign: 'center',
        color:'black'
    },
    flatListContainer: {
        height: 250,
    },
    deliveryAddressContainer: {
        marginTop: 20,
    },
    deliveryAddressTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    addressText: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 15,
        width: 250
    },

    orderInfoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    orderInfoContainer: {
        marginTop: 20,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    orderInfoLeft: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderInfoRight: {
        fontSize: 16,
    },

});

export default CartScreen;
