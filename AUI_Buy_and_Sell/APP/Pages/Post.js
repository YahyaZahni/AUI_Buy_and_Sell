// Post.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ imageUrl, title, price, onBuyPress, sellerInfo }) => {
    const handleBuyPress = () => {
        onBuyPress(sellerInfo); // Pass seller information to the parent component
    };

    return (
        <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: imageUrl }} style={styles.productImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.productTitle}>{title}</Text>
                <Text style={styles.productPrice}>Price: {price} MAD</Text>
            </View>
            <TouchableOpacity style={styles.buyButton} onPress={onBuyPress}>
                <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    detailsContainer: {},
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: 'black',
    },
    buyButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Post;
