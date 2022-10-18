import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Auth, API } from "aws-amplify";
import { listRentOrders } from "../../graphql/queries";
import HeaderBorrower from "../../components/header-borrower/header-borrower.component";

const Borrower = () => {
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
            borrowerUserId: { eq: userID },
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
        renderItem={({ item }) => <HeaderBorrower post={item} />}
      />
    </View>
  );
};

export default Borrower;