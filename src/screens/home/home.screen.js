import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { API } from "aws-amplify";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import ProductCard from "../../components/product-card/product-card.component";
import { getListingByCreatedAt } from "../../graphql/queries";

const Home = () => {
  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        authMode: "AWS_IAM",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [])

  return (
    <View>
      <HeaderMobile />
      <ProductCard />
    </View>
  );
};

export default Home;
