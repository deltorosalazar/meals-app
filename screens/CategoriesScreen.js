import React from 'react'
import { Button, View, StyleSheet, Text } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button title="Go to Meals!" onPress={() => {
        props.navigation.navigate('CategoryMeals')
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoriesScreen
