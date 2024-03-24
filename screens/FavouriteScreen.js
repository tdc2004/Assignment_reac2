import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemClothe from '../components/ItemClothe'

const FavouriteScreen = () => {
  const data1 = [
    { id: 1, name: 'Nike Sportswear Club Fleece', image: require('../img/anh1.png'), price: 99 },
    { id: 2, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
    { id: 3, name: 'Nike', image: require('../img/anh1.png'), price: 99 },
    { id: 4, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
    { id: 5, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
    { id: 6, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
    { id: 7, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
    { id: 8, name: 'Trail Running Jacket Nike Windrunner', image: require('../img/anh1.png'), price: 99 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>365 Items</Text>
          <Text style={styles.subHeaderText}>in wishlist</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        data={data1}
        renderItem={({ item }) => <ItemClothe item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  subHeaderText: {
    fontSize: 14,
    color: 'gray',
  },
  editButton: {
    backgroundColor: '#F5F6FA',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf:'center',
    borderRadius: 5,
  },
  editButtonText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf:'center'
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
