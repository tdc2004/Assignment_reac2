import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'

const ItemDetails = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <Image source={require('../img/anh1.png')} style={styles.image} />
                    <View>
                        
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>Men's Printed Pullover Hoodie</Text>
                        <Text style={styles.price}>$ Price</Text>
                    </View>
                    <View style={styles.thumbnailContainer}>
                        <TouchableOpacity>
                            <Image source={require('../img/img1.png')} style={styles.thumbnail} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../img/img2.png')} style={styles.thumbnail} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../img/img3.png')} style={styles.thumbnail} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../img/img4.png')} style={styles.thumbnail} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sizeContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.sizeLabel}>Size</Text>
                            <Text style={styles.sizeGuide}>Size Guide</Text>
                        </View>
                        <View style={styles.sizeButtonsContainer}>
                            <TouchableOpacity style={styles.sizeButton}><Text style={{ textAlign: 'center' }}>S</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.sizeButton}><Text style={{ textAlign: 'center' }}>M</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.sizeButton}><Text style={{ textAlign: 'center' }}>L</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.sizeButton}><Text style={{ textAlign: 'center' }}>XL</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.sizeButton}><Text style={{ textAlign: 'center' }}>2XL</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.descriptionLabel}>Description</Text>
                        <Text style={styles.descriptionText}>The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with Read More..</Text>
                    </View>
                    <View>
                        <Text style={styles.descriptionLabel}>Description</Text>
                        <Text style={styles.descriptionText}>The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with Read More..</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.priceLabel}>Price</Text>
                    <Text style={styles.priceValue}>$4.60</Text>
                </View>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100, // Khoảng cách bottom tương đương với chiều cao của priceContainer
    },
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#888',
    },
    thumbnailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    sizeContainer: {
        marginBottom: 20,
    },
    sizeLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sizeGuide: {
        color: 'blue',
    },
    sizeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    sizeButton: {
        backgroundColor: '#DDDDDD',
        borderRadius: 8,
        paddingVertical: 15,
        width: '18%'
    },
    descriptionLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
    },
    priceContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255)'
    },
    priceLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceValue: {
        fontSize: 18,
    },
    addToCartButton: {
        backgroundColor: '#9775FA',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
    },
    addToCartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})
