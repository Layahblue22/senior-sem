import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Divider } from 'react-native-elements';
const apiKey = 'xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx';

export default function About(props) {
  const { name, id, image, price, rating, categories, phone, isClosed, r_Reviews } = props.route.params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the reviews data
        const reviewsData = data.reviews;
        setReviews(reviewsData);
      })
      .catch((error) => {
        console.error('Error retrieving reviews:', error);
      });
  }, []);

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories}${price ? " • " + price : ""} • ${rating}`;

  return (
    <View>
      <RestaurantsImage image={image} />
      <RestaurantsName name={name} />
      <RestaurantsDescription description={description} />
      <Text style={{ fontSize: 20, fontWeight: "600", marginHorizontal: 15, marginTop: 20 }}>Reviews:</Text>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </View>
    
  );
}

const RestaurantsImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 280 }} />
);

const RestaurantsName = (props) => (
  <Text
    style={{
      fontSize: 39,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantsDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 14,
    }}
  >
    {props.description}
  </Text>
);

// Three reviews 
const ReviewItem = ({ review }) => (
  <View style={{ paddingHorizontal: 15, marginTop: 10, backgroundColor: "#E5E5E5", padding: 10, borderRadius: 8 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: review.user.image_url }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{review.user.name}</Text>
    </View>
    <Text style={{ fontSize: 14, marginTop: 5 }}>{review.text}</Text>
    
  </View>
  
);
