import {Image, View, TouchableOpacity, Text, StyleSheet } from "react-native"




const HomeScreen = ({navigation}) => {


    return (
        <View>
            <Text style = {styles.title}>Welcome back</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('UsersScreen')}>
                    <Text style={styles.upperText}>Users</Text>
                    <Text style={styles.lowerText}>View Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ProductsScreen')}>
                    <Text style={styles.upperText}>Products</Text>
                    <Text style={styles.lowerText}>View Products</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ReportsScreen')}>
                    <Text style={styles.upperText}>Reports</Text>
                    <Text style={styles.lowerText}>View Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ReviewsScreen')}>
                    <Text style={styles.upperText}>Reviews</Text>
                    <Text style={styles.lowerText}>View Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleButtonView}>
                <TouchableOpacity style={styles.singleButton} onPress={() =>navigation.navigate('CategoriesScreen')}>
                    <Text style={styles.upperText}>Categories</Text>
                    <Text style={styles.lowerText}> Manage Categories</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomTab}>
                <TouchableOpacity activeOpacity={0.8} onPress={() =>navigation.navigate('CategoriesScreen')}>
                <Image style={styles.mainButton}
                source={require('../../assets/MC1.png')}
            />
            </TouchableOpacity>
            </View>

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

export default HomeScreen