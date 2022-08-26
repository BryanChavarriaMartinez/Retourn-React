import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { API } from "aws-amplify";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import ProductCard from "../../components/product-card/product-card.component";
import { getListingByCreatedAt } from "../../graphql/queries";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Home = () => {
  const [newItems, setNewItems] = useState([]);
  const fetchAll = async () => {
    try {
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC" },
        authMode: "AWS_IAM",
      });
      setNewItems(itemListByCommonID.data.getListingByCreatedAt.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [])

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <HeaderMobile />
      <FlatList
        data={newItems}
        renderItem={({ item }) => <ProductCard post={item} />}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default Home;
