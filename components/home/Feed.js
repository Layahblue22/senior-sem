import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import WriteReview from './restaurantsDetail/WriteReview';

function Feed({ route }) {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  const reviewText = route && route.params ? route.params.reviewText : null;
  const [feedInfo, setFeedInfo] = useState([])
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);

    fetch('http://127.0.0.1:5000/getFeed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: user.uid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Success) {
          console.log(data.Message)
          setFeedInfo(data.Message)
          console.log('Feed ',feedInfo)
        } else {
          console.error('There was a problem with the API request:', data.Message);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the API request:', error);
      });
  }, []);

  const testReviews = [
    {
      url: 'https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=AeVAkQgueu6JtYtU4r3Jrg',
      text: 'This place is really pretty and I really love this place. My friends and me came here yesterday. The food is superb, the service is impeccable (mostly) and...',
      user: {
        image_url: 'https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic=',
        name: 'Hoang V.',
      },
      rating: 5,
    },
    {
      url: 'https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=6tsz9tl7HAiOcYj_fGrsCg',
      text: 'Went there for the first time Saturday Evening,everything is great, the ambiance is outstanding for this location, tried the mulliatawny soup for starters...',
      user: {
        image_url: 'http://s3-media2.fl.yelpcdn.com/photo/O1ZuPKBhwxHAT60XZksWHQ/o.jpg',
        name: 'Winston P.',
      },
      rating: 3,
    },
    {
      url: 'https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=3b3-zDKfomV-1qR3Z0jmQw',
      text: 'I came in here for the $9.95 lunch buffet the day after it opened.  It is the old Tara space and I like how it has been opened up to accommodate many more...',
      user: {
      image_url: 'http://s3-media1.fl.yelpcdn.com/photo/bQRonQWaxInb7eKAtMjf3A/o.jpg',
      name: 'Ronita J.',
      },
      rating: 4,
      },
      ];
      
      const userReview = reviewText
      ? {
      email: '',
      restaurantName:'',
      review:'',
      text: reviewText,
      user: {
      image_url: '',
      name: '',
      },
      rating: 0,
      }
      : null;
      
      const allReviews = [ ...(userReview ? [userReview] : []),...testReviews,];
      
      
      
      const handleNavigate = (user) => {
        navigation.navigate('RestaurantDetail', {
          uid: user.uid,
          email: user.email,
          restaurantName: user.restaurantName,
          review: reviewText
        })
      }
    
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.feed}>
            <Text style={styles.title}>Your Feed</Text>
            <Text style={styles.subtitle}>What's everyone else eating?</Text>
            {feedInfo.map((user, index) => 
              <TouchableOpacity onPress={() => handleNavigate(user)} key={index}>
                <View style={styles.container}>
                  <View style={styles.restauarntInfo}>
                  <Text style={styles.restaurantName}> {user.email}</Text>
                  <Text style={styles.title}>{user.restaurantName}</Text>
                  <Text>{user.review}</Text>
                  <Divider width={1} marginBottom={10} color="#ffb257" />
                </View>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        </SafeAreaView>
      );
    }
    
      
      const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 1
      },
      feed: {
      paddingHorizontal: 20,
      },
      restaurantInfo: {
        //flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        bottom: 25
        //paddingVertical: 5,
        },
      title: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',
      },
      subtitle: {
      fontSize: 18,
      fontWeight: '200',
      marginBottom: 20,
      opacity: 0.8,
      alignSelf: 'center',
      },
      menuItemStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      },
      });
      
      export default Feed;
