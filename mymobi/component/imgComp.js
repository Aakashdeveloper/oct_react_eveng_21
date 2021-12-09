import React,{Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 266,
      height: 258,
    },
  });

class ImgComponent extends Component {

    render(){
        return(
            <View>
                <Text>Img Component</Text>
                <Image
                    style={styles.logo}
                    source={{uri: 'https://i.ibb.co/pv8Kf4m/roseate.jpg'}}
                />
            </View>
        )

    }
}


export default ImgComponent;