import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import Post from './Post';
import Post2 from './Post2';
import {
    Lato_400Regular, useFonts
} from '@expo-google-fonts/lato'
import AddPost from './AddPost';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import Profil from "./Profil";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    const [posts, setPosts] = useState([]);
    const [addPostModalVisible, setAddPostModalVisible] = useState(false);
    const navigation = useNavigation();
    const [purchasedPosts, setPurchasedPosts] = useState([]);

    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('User signed out successfully');
            navigation.navigate("Login");
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    const handleAddPost = (title, price, imageUrl) => {
        const newPost = { title, price, imageUrl };
        setPosts([...posts, newPost]);
    };

    const toggleAddPostModal = () => {
        setAddPostModalVisible(!addPostModalVisible);
    };

    const handleBuyPress = (post) => {
        setPurchasedPosts([...purchasedPosts, post]);
        Alert.alert('Success', 'Item added to cart', [{ text: 'OK' }])
        console.log("purchasedPosts", purchasedPosts);
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}> 
                <Button title="Sign Out" onPress={handleSignOut} />
                <Button title="Cart" onPress={() => navigation.navigate('Currents', { purchasedPosts, setPurchasedPosts })} />
                <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                    <Ionicons name="person-circle-outline" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>
                AUI Buy & Sell
            </Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Post
                        key={1}
                        title="Lab Coat"
                        price="50"
                        imageUrl="https://theadelaidestore.com.au/cdn/shop/products/Lab_Coats_Full_Sleeves_White_600x_e12e96f7-d133-482f-a809-91f6f9557408_600x.png?v=1596178411"
                        onBuyPress={() => handleBuyPress({ title: "Lab Coat", price: "50", imageUrl: "https://theadelaidestore.com.au/cdn/shop/products/Lab_Coats_Full_Sleeves_White_600x_e12e96f7-d133-482f-a809-91f6f9557408_600x.png?v=1596178411" })}
                        />
            <Post
                        key={2}
                        title="Wydad Jersey"
                        price="200"
                        imageUrl="https://www.macron.com/cdn-cgi/image/quality=85/media/catalog/product/cache/7854776c5a059fa4314600f243e72018/1/5/157c12aee02c08ebecd256908ae34a5258577209.jpg"
                        onBuyPress={() => handleBuyPress({ title: "Wydad Jersey", price: "200", imageUrl: "https://www.macron.com/cdn-cgi/image/quality=85/media/catalog/product/cache/7854776c5a059fa4314600f243e72018/1/5/157c12aee02c08ebecd256908ae34a5258577209.jpg" })}
                        />
                        
            <Post
                        key={4}
                        title="Wydad Flag"
                        price="100"
                        imageUrl="https://i.ebayimg.com/images/g/KMEAAOSwWxxeB8YG/s-l1600.jpg"
                        onBuyPress={() => handleBuyPress({ title: "Wydad Flag", price: "100", imageUrl: "https://i.ebayimg.com/images/g/KMEAAOSwWxxeB8YG/s-l1600.jpg" })}
                        />
                <Text style={styles.headerText2}>
                    Your Offers            </Text>

                {posts.map((post, index) => (
                    <Post2
                        key={index}
                        title={post.title}
                        price={post.price}
                        imageUrl={post.imageUrl}
                        onBuyPress={() => handleBuyPress(post)}
                    />
                ))}
            </ScrollView>
            <AddPost
                visible={addPostModalVisible}
                onAddPost={handleAddPost}
                toggleModal={toggleAddPostModal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#146434',
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Lato_400Regular',
        fontSize: 25,
        marginBottom: 10,
    },    headerText2: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Lato_400Regular',
        fontSize: 25,
        marginBottom: 10,
        marginLeft: 70,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
});

export default HomeScreen;
