import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import { API } from "aws-amplify";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import HeaderComputer from "../../components/header-computer/header-computer.component";
import ProductCard from "../../components/product-card/product-card.component";
import SelectCategoryComputer from "../../components/category-computer/select-categories/category-computer.component";
import { getListingByCreatedAt } from "../../graphql/queries";
import styles from "./home.styles";

const Home = () => {
  const windowWidth = Number(Dimensions.get("window").width);
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

  return (
    <View>
      <HeaderMobile />
      <HeaderComputer />
      <View style={styles.listWrap}>
        <View
          style={[
            styles.computerListView,
            { width: windowWidth > 800 ? "80%" : "100%" },
          ]}
        >
          <View
            style={[
              styles.computerListCategory,
              { display: windowWidth > 800 ? "flex" : "none" }
            ]}
          >
            <SelectCategoryComputer />
          </View>
          <FlatList
            style={styles.flatList}
            data={newItems}
            renderItem={({ item }) => <ProductCard post={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
