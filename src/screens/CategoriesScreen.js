import { View,  Text, StyleSheet,TouchableOpacity } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'





const CategoriesScreen = ({navigation}) => {


    return (
        <View>
        <LinearGradient  colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
    end={{ x: 1, y: 0}}>
        <Text style = {styles.title}>Options</Text>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('DisplayCategories')}>
                <Text style={styles.upperText}>View</Text>
                <Text style={styles.lowerText}>Display Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('AddCategory')}>
                <Text style={styles.upperText}>Add</Text>
                <Text style={styles.lowerText}>Add new Category</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('UpdateCategory')}>
                <Text style={styles.upperText}>Update</Text>
                <Text style={styles.lowerText}>Update Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('DeleteCategory')}>
                <Text style={styles.upperText}>Delete</Text>
                <Text style={styles.lowerText}>Delete Category</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>


    </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize:24,
        margin: 10,
        padding:10,
        paddingBottom:3,
        marginBottom: 3,
        color:'#788eec'

    },
    buttonView: {
        margin:10,
        padding:10,
        flexDirection:'row',
        

    },
    button: {
        borderColor:'#788eec',
        borderWidth:2,
        borderRadius:10,
        margin:10,
        width:140
    },
    upperText: {
        backgroundColor:'#788eec',
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        padding:13,
        justifyContent:'flex-start',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    lowerText: {
        backgroundColor:'white',
        padding:13,
        justifyContent:'center',
        fontSize:16,
        fontWeight:'bold',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color:'#788eec'
    },
    singleButtonView : {
        margin:10,
        padding:10
    },
    singleButton:{
        borderColor:'#788eec',
        borderWidth:2,
        borderRadius:10,
        margin:10
    },
    mainButton: {
        width:70,
        height:70,
        alignSelf:'center',
        position:'relative',
        bottom:20,


    },
    bottomTab : {
        backgroundColor:'#788eec',
        position:'relative',
        top:42,
        flex:0
    }
    

})

export default CategoriesScreen