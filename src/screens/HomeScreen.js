import {Image, View, TouchableOpacity, Text, StyleSheet } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
import LottieView from 'lottie-react-native';






const HomeScreen = ({navigation}) => {

    return (
        <View>
            <LinearGradient  colors={['white', '#AED6F1']} start={{ x: 0, y:0 }}
        end={{ x: 1, y: 0}}>
            <Text style = {styles.title}>Welcome back</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('UsersScreen')}>
                    <View style={styles.withanimation}>
                        <Text style={styles.upperText}>Users</Text>
                        <LottieView autoPlay style={{position:'relative',left:3}} source={require('../../assets/users.json')} />
                    </View>
                    <Text style={styles.lowerText}>View Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ProductsScreen')}>
                    <View style={styles.withanimation}>
                        <Text style={styles.upperText}>Products</Text>
                        <LottieView autoPlay style={{position:'relative',left:-13}} source={require('../../assets/products.json')} />
                    </View>
                    <Text style={styles.lowerText}>View Products</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ReportsScreen')}>
                <View style={styles.withanimation}>
                        <Text style={styles.upperText}>Reports</Text>
                        <LottieView autoPlay style={{position:'relative',left:-6}} source={require('../../assets/reports.json')} />
                    </View>
                    <Text style={styles.lowerText}>View Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ReviewsScreen')}>
                <View style={styles.withanimation}>
                        <Text style={styles.upperText}>Reviews</Text>
                        <LottieView autoPlay style={{position:'relative',left:-7}} source={require('../../assets/reviews.json')} />
                    </View>
                    <Text style={styles.lowerText}>View Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleButtonView}>
                <TouchableOpacity style={styles.singleButton} onPress={() =>navigation.navigate('Category')}>
                <View style={styles.withanimation}>
                        <Text style={styles.upperText}>Categories</Text>
                        <LottieView autoPlay style={{position:'relative',left:58}} source={require('../../assets/Categories.json')} />
                    </View>
                    <Text style={styles.lowerText}> Manage Categories</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bottomTab}>
                <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate('Category')}>
                <Image  style={styles.mainButton}
                source={require('../../assets/MC1.png')}
            />
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
        borderWidth:4,
        borderRadius:10,
        margin:10,
        width:140
    },
    upperText: {
        color:'#788eec',
        fontWeight:'bold',
        fontSize:20,
        padding:13,
        justifyContent:'flex-start',
        
    },
    lowerText: {

        padding:13,
        paddingRight:-13,
        justifyContent:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'#788eec',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    singleButtonView : {
        margin:10,
        padding:10
    },
    singleButton:{
        borderColor:'#788eec',
        borderWidth:4,
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
    },
    withanimation:{
        flexDirection:'row',
         backgroundColor:'white',
         borderTopLeftRadius: 5,
        borderTopRightRadius: 5
        
    },
    lottie:{
        backgroundColor:'white',
        height:50,width:50
    }
    

})

export default HomeScreen