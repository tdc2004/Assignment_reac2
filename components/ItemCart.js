import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ItemCart = ({ imageUrl, productName, price, quantity, onDelete }) => {
  const [qty, setQty] = useState(quantity);

  const increaseQuantity = () => {
    setQty(qty + 1);
  };

  const decreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{qty}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onDelete} style={{alignSelf:'flex-end'}}>
        <Image source={require('../img/Delete.png')} style={{width:20,height:20}}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    width:40,
    alignItems:'center'
  },
  quantityButtonText: {
    fontSize: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default ItemCart;
