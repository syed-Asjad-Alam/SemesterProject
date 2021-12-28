import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';



const FIREBASE_API_ENDPOINT = 'https://semesterproject-7a2e1-default-rtdb.firebaseio.com/'

export default function App() {
  const postData = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        employeename: 'New Employee',
        taskdesc: 'New Task',
      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const getData = async () => {
    const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
    const data = await response.json();
    console.log(data);
  };

  const deleteData = () => {
    const id = '-MrWvChDCFKoDz4hiiVp';
    var requestOptions = {
      method: 'DELETE',
    };

    fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log('Delete Response:', result))
      .catch((error) => console.log('error', error));
  };

  const updateData = () => {
    const id = '-Mra4c0ncxW5hz5GkRNJ';
    var requestOptions = {
      method: 'PATCH',
      body: JSON.stringify({
        username: 'UserName',
        password: 'Password',
        employeename: 'Update New Employee'
      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Firebase</Text>
      <Button title="Firebase Post Data" onPress={postData} />
      <Button title="Firebase Get Data" onPress={getData} />
      <Button title="Firebase Delete Data" onPress={deleteData} />
      <Button title="Firebase Update Data" onPress={updateData} />
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


