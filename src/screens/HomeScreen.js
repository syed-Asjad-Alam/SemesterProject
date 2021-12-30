import { View, TouchableOpacity, Text } from "react-native"




const HomeScreen = ({navigation}) => {


    return (
        <View>
            <Text>Welcome back</Text>
            <View>
                <TouchableOpacity onPress={() =>navigation.navigate('UsersScreen')}>
                    <Text>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('ProductsScreen')}>
                    <Text>Products</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() =>navigation.navigate('ReportsScreen')}>
                    <Text>Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>navigation.navigate('ReviewsScreen')}>
                    <Text>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() =>navigation.navigate('CategoriesScreen')}>
                    <Text>Manage Categories</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HomeScreen