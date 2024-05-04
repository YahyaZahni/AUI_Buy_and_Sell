import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView ,View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { style as tw } from 'twrnc';
import { firebase } from '../../firebase';

const Currents = ({ route, navigation }) => {
    const { purchasedPosts, setPurchasedPosts } = route.params;
    const [totalPrice, setTotalPrice] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [confirmationEmail, setConfirmationEmail] = useState('');
    const emails = ['mehdibenben20@gmail.com', 'yahya123@gmail.com', 'mohamed@gmail.com'];

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        let total = 0;
        purchasedPosts.forEach(post => {
            total += parseFloat(post.price);
        });
        setTotalPrice(total.toFixed(2));
    };

    // Calculate total price initially and whenever purchasedPosts changes
    useEffect(() => {
        calculateTotalPrice();
    }, [purchasedPosts]);

    // Function to toggle the selected state of a post
    const handleTogglePostSelection = (index) => {
        if (selectedPosts.includes(index)) {
            setSelectedPosts(selectedPosts.filter(idx => idx !== index));
        } else {
            setSelectedPosts([...selectedPosts, index]);
        }
    };

    // Function to handle refresh
    const onRefresh = () => {
        setRefreshing(true);
        // Perform any data fetching or refreshing here
        // For now, let's just set a timeout to simulate refreshing
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    // Function to handle deleting selected posts
    const handleDeleteSelected = () => {
        const updatedPosts = purchasedPosts.filter((_, index) => !selectedPosts.includes(index));
        setPurchasedPosts(updatedPosts);
        setSelectedPosts([]); // Clear the selected posts array
        // Redirect user to homepage
        navigation.navigate('HomeScreen');
    };

// Function to handle confirmation
// Function to handle confirmation
const handleConfirm = () => {
    // Check if the cart is empty
    if (purchasedPosts.length === 0) {
        // Show alert for empty cart
        Alert.alert(
            'Cart Empty',
            'Your cart is empty. Please add items to confirm your purchase.',
            [
                {
                    text: 'OK',
                },
            ],
            { cancelable: false }
        );
    } else {
        // Randomly select a confirmation email
        const randomIndex = Math.floor(Math.random() * emails.length);
        const randomEmail = emails[randomIndex];
        
        // Set the confirmation email
        setConfirmationEmail(randomEmail);

        // Show confirmation alert
        Alert.alert(
            'Confirmation',
            `You will be contacted by the seller ${randomEmail} soon. Your total is ${totalPrice}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        // Redirect user to home screen
                        navigation.navigate('HomeScreen');
                        // Clear the cart
                        setPurchasedPosts([]);
                        // Clear selected posts
                        setSelectedPosts([]);
                        // Reset confirmation email
                        setConfirmationEmail('');
                    },
                },
            ],
            { cancelable: false }
        );
    }
};

    return (
        <View style={styles.container}>
            <SafeAreaView style={[tw`flex`]}>
                <TouchableOpacity
                    style={[tw`mt-2 w-7`]}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={[tw`w-10 h-10 mt-3`, { tintColor: '#808080' }]}
                        source={require('../Assets/Image/arrow.png')}
                    />
                </TouchableOpacity>
            </SafeAreaView>

            <Text style={styles.jsp}>Your Cart</Text>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {purchasedPosts.map((post, index) => (
                    <View key={index} style={styles.postContainer}>
                        <Image source={{ uri: post.imageUrl }} style={styles.image} />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text style={styles.price}>Price: MAD{post.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleTogglePostSelection(index)} style={styles.selectButton}>
                            <Text style={styles.selectButtonText}>{selectedPosts.includes(index) ? 'Selected' : 'Select'}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                {selectedPosts.length > 0 && (
                    <TouchableOpacity onPress={handleDeleteSelected} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>Delete Selected</Text>
                    </TouchableOpacity>
                )}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total Price: MAD {totalPrice}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirm Purchase</Text>
            </TouchableOpacity>
            {confirmationEmail !== '' && (
                <View style={styles.confirmationContainer}>
                    <Text style={styles.confirmationText}>
                        Confirmed.
                    </Text>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    postContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
    },
    jsp: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
    },
    selectButton: {
        backgroundColor: '#146434',
        padding: 8,
        borderRadius: 5,
    },
    selectButtonText: {
        color: '#fff',
    },
    removeButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    removeButtonText: {
        color: '#fff',
    },
    totalContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: '#146434',
        paddingVertical: 15,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    confirmationContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    confirmationText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Currents;
