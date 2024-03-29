import React, { Component } from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'

import imagePlaceholder from '../../assets/beautiful-place.jpg'

class PickImage extends Component {
   render() {
      return (
      <View style={styles.container}> 
         <View style={styles.placeholder}>
            <Image source={imagePlaceholder} style={styles.imagePreview} />
         </View>
         <View style={styles.button}>
            <Button title="Pick Image" onPress={() => alert('Pick Image!')} />
         </View>
      </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center"
   },
   placeholder: {
     borderWidth: 1,
     borderColor: "black",
     backgroundColor: "#eee",
     width: "80%",
     height: 150
   },
   button: {
     margin: 8
   },
   imagePreview: {
     width: "100%",
     height: "100%"
   }
 })

export default PickImage