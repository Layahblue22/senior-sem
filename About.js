import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function About({ data }) {
  console.log(data.alias, "======");
  let [SpecificData, setSpecificData] = useState("");
  const YELP_API_KEY =
    "xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx";

  let getRestaurantsData = async () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/${data.alias}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "json+==");
        setSpecificData(json);
      });
  };

  useEffect(() => {
    getRestaurantsData();
  }, []);
  return (
    <View>
      <ImageSlider description={SpecificData} />
      {/* <RestaurantsImage image={data.image} /> */}
      <RestaurantsName title={data.name} />
      <RestaurantsDescription description={SpecificData} />
    </View>
  );
}
//
const RestaurantsImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantsName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};
const RestaurantsDescription = (props) => {
  let { rating, review_count, price, name, categories, hours, open, location } =
    props?.description;
  console.log(location);
  return (
    props?.description && (
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {`${categories.map((cat) => cat.title).join(" • ")} ${
          price ? " • " + price : ""
        } • 🎫 • ${hours[0].hours_type} ${rating} ⭐ ${review_count}+
Address : ${location.country}, ${location.state}, ${location.city}  ${
          location.address1
        } ,${location.zip_code}
        `}
      </Text>
    )
  );
};
//
//

const ImageSlider = (props) => {
  let { photos } = props?.description;

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: item }} style={{ width: "100%", height: 180 }} />
      </View>
    );
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 5,
        width: "100%",
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      <Carousel
        data={photos}
        renderItem={_renderItem}
        sliderWidth={400}
        itemWidth={400}
      />
    </View>
  );
};
