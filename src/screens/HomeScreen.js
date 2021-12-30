import { View, TouchableOpacity, Text } from "react-native"




const HomeScreen = () => {


    return (
        <View>
            <Text>Welcome back</Text>
            <View>
                <TouchableOpacity>
                    <Text>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Products</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Manage Categories</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HomeScreen