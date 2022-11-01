import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import { API } from "aws-amplify";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import HeaderComputer from "../../components/header-computer/header-computer.component";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryComputer from "../../components/category-computer/category-computer.component";
import MenuDetailsComputer from "../../components/menu-details-computer/menu-details-computer.component";
import { getListingByCreatedAt, searchListings } from "../../graphql/queries";
import { useRoute } from "@react-navigation/native";
import styles from "./home.styles";

const Home = () => {
  const windowWidth = Number(Dimensions.get("window").width);
  const [newItems, setNewItems] = useState([]);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchByCategory, setSearchByCategory] = useState({
    catName: "All",
    catId: "",
  });
  const [searchByLocation, setSearchByLocation] = useState({
    locationName: "Juarez, Chihuahua",
    locationId: "",
  });
  const route = useRoute();

  useEffect(() => {
    if (!route.params) {
      console.log("Params not set");
    } else if (route.params.locID !== undefined) {
      setSearchByLocation({
        locationName: route.params.locName,
        locationId: route.params.locID,
      });
    } else if (route.params.catID !== undefined) {
      setSearchByCategory({
        catName: route.params.catName,
        catId: route.params.catID,
      });
    }
  }, [route.params]);

  var searChWithLocation = async (searchString) => {
    console.log("cat name", searchByCategory.catId);
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            locationID: { eq: searchByLocation.locationId },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithText = async (searchString) => {
    // alert("search by only text");
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            title: {
              match: searchString,
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
      console.log("Search by text result", newItems);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndText = async (searchString) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              title: {
                match: searchString,
              },
              locationID: { eq: searchByLocation.locationId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searchByCatFunc = async () => {
    // alert("only category func");
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            categoryID: { eq: searchByCategory.catId },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndCategory = async (searchByCategoryy) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              categoryID: { eq: searchByCategory.catId },
              locationID: { eq: searchByLocation.locationId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithTextAndCategory = async (searchString, searchByCategoryy) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              categoryID: { eq: searchByCategory.catId },
              title: {
                match: searchString,
              },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };
  var searChWithLocationAndTextAndCategory = async (
    searchString,
    searchByCategoryy
  ) => {
    try {
      const newSearchItems = await API.graphql({
        query: searchListings,
        authMode: "AWS_IAM",
        variables: {
          filter: {
            and: {
              title: {
                match: searchString,
              },
              locationID: { eq: searchByLocation.locationId },
              categoryID: { eq: searchByCategory.catId },
            },
          },
        },
      });
      setNewItems(newSearchItems.data.searchListings.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (searchByLocation.locationId !== "") {
      console.log("location id change", searchByLocation);
      if (searchByCategory.catId == "") {
        if (searchText !== "") {
          searChWithLocationAndText(searchText);
        } else {
          searChWithLocation();
        }
      } else {
        if (searchText !== "") {
          searChWithLocationAndTextAndCategory(searchText, searchByCategory);
        } else {
          searChWithLocationAndCategory(searchByCategory);
        }
      }
    } else {
      console.log("location id has not change", searchByLocation);
    }
  }, [searchByLocation]);
  useEffect(() => {
    if (searchText !== "") {
      if (searchByCategory.catId == "") {
        console.log("searchText id change", searchText);
        if (searchByLocation.locationId !== "") {
          searChWithLocationAndText(searchText);
        } else {
          searChWithText(searchText);
        }
      } else {
        console.log("searchText id change", searchText);
        if (searchByLocation.locationId !== "") {
          searChWithLocationAndTextAndCategory(searchText, searchByCategory);
        } else {
          searChWithTextAndCategory(searchText, searchByCategory);
        }
      }
    } else {
      console.log("searchText id has not change", searchText);
    }
  }, [searchText]);
  useEffect(() => {
    if (searchByCategory.catId !== "") {
      console.log("searchText id change", searchText);
      if (searchByLocation.locationId !== "") {
        // alert(searchByCategory.catId);
        searChWithLocationAndTextAndCategory(searchText, searchByCategory);
      } else if (searchText !== "") {
        searChWithTextAndCategory(searchText, searchByCategory);
      } else {
        searchByCatFunc(searchByCategory);
      }
    } else {
      console.log("searchText id has not change", searchText);
    }
  }, [searchByCategory]);

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
    <>
      <HeaderMobile
        setSearchText={setSearchText}
        searchByCategory={searchByCategory}
        searchByLocation={searchByLocation}
      />
      <HeaderComputer menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
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
              { display: windowWidth > 800 ? "flex" : "none" },
            ]}
          >
            <CategoryComputer />
          </View>
          <FlatList
            style={styles.flatList}
            data={newItems}
            renderItem={({ item }) => <ProductCard post={item} />}
          />
        </View>
      </View>
      <MenuDetailsComputer menuToggle={menuToggle} />
    </>
  );
};

export default Home;
