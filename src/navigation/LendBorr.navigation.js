import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderComputer from '../components/header-computer/header-computer.component';
import MenuDetailsComputer from '../components/menu-details-computer/menu-details-computer.component';
import Borrower from '../screens/borrower/borrower.screen';
import Lender from '../screens/lender/lender.screen';

const Tab = createMaterialTopTabNavigator();

const LendBorrowerNav = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
      <>
        <HeaderComputer setMenuToggle={setMenuToggle} menuToggle={menuToggle} />
        <Tab.Navigator>
          <Tab.Screen name={"Prestatario"} component={Borrower} />
          <Tab.Screen name={"Prestamista"} component={Lender} />
        </Tab.Navigator>
        <MenuDetailsComputer menuToggle={menuToggle} top={59} right={"7.8%"} />
      </>
    );
};

export default LendBorrowerNav;