import React,{useState} from 'react';
import { StyleSheet,Button, Text, View ,Alert} from 'react-native';
import ImgComponent from './component/imgComp';

function App() {
  const [title, setTitle] = useState('Native App')

  const updateTitle = () => {
    setTitle('Title Changed')
  }
  return (
    <View style={styles.container}>
      <ImgComponent/>
      <Text>React Native App</Text>
      <Text>{title}</Text>
      <Button
        title="Change Me"
        color="#841584"
        onPress={updateTitle}
    />
    <Button
        title="Revert Me"
        color="#841584"
        onPress={() => setTitle("Native App")}
    />
      <Button
        title="Learn More"
        color="#841584"
        onPress={() => Alert.alert('Simple Button pressed')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  App;