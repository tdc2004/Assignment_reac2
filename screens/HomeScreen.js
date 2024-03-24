import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ItemClothe from '../components/ItemClothe';

const HomeScreen = ({navigation}) => {
    const data = [
        { id: 1, name: 'H&M', image: require('../img/adidas.png') },
        { id: 2, name: 'Zara', image: require('../img/adidas.png') },
        { id: 3, name: 'Nike', image: require('../img/adidas.png') },
        { id: 4, name: 'Nike', image: require('../img/adidas.png') },
        { id: 5, name: 'Nike', image: require('../img/adidas.png') },
        { id: 6, name: 'Nike', image: require('../img/adidas.png') },
    ];
    const data1 = [
        { id: 1, name: 'Nike Sportswear Club Fleece', image: require('../img/anh1.png'),price:99 },
        { id: 2, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'),price:99 },
        { id: 3, name: 'Nike', image: require('../img/anh1.png'),price:99 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hemendra</Text>
                <Text style={styles.subHeaderText}>Welcome to BeeFashion</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Search...' />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../img/mic.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>Choose Brand</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>New Arrival</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item }) => <ItemClothe item={item} onPress={()=>navigation.navigate("Details")} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>New Arrival</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item }) => <ItemClothe item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>New Arrival</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item }) => <ItemClothe item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#555',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: '#F5F6FA',
        flex: 1,
        marginRight: 10,
        borderRadius: 5,
    },
    input: {
        padding: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#9775FA',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
    },
    icon: {
        height: 20,
        width: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAllText: {
        color: '#9775FA',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#F5F6FA',
        borderRadius: 5,
    },
    image: {
        width: 25,
        height: 20,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
    },
});

export default HomeScreen;
