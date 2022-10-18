import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Auth, API } from "aws-amplify";
import { listRentOrders } from "../../graphql/queries";
import HeaderLender from "../../components/header-lender/header-lender.component";

const Lender = () => {
  const [newItems, setNewItems] = useState([]);
  const [userID, setUserID] = useState("");

  Auth.currentAuthenticatedUser()
    .then((user) => {
      setUserID(user.attributes.sub);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  const fetchAll = async () => {
    try {
      const orderList = await API.graphql({
        query: listRentOrders,
        variables: {
          filter: {
            lenderUserId: { eq: userID },
          },
        },
      });
      setNewItems(orderList.data.listRentOrders.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAll();
  });

  return (
    <View>
      <FlatList
        data={newItems}
        renderItem={({ item }) => <HeaderLender post={item} />}
      />
    </View>
  );
};

export default Lender;
