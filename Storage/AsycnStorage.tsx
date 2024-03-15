import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Button, StyleSheet, Text, View, } from "react-native";

function AsycnStorage(): React.JSX.Element {
    let name = "Michal";
    AsyncStorage.setItem('user', name);
    const saveData = async () => {
        // let name = 'Truong Nguyen'
        // await AsyncStorage.setItem('user', name);
        let objUser = {
            name: 'Trường nguyễn',
            email: 'truong@gmail.com',
            city: 'Hà Nội'
        }
        await AsyncStorage.setItem('user', JSON.stringify(objUser));
        console.log('Saved');

    }
    const displayData = async () => {
        // try {    
        //     let user = await AsyncStorage.getItem('user')
        //     console.log('Thong tin user: ', user);
        // } catch (error) {
        //     console.log(error);
        // }
        try {
            let userr = await AsyncStorage.getItem('user');
            if (userr !== null) {
                let parsed = JSON.parse(userr);
                console.log('Thong tin user: ', parsed);
            } else {
                console.log('Khongo co du lieu');

            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <View >
                <Button onPress={saveData} title='Lưu thông tin '></Button>
                <Button onPress={displayData} title='Lấy thông tin'></Button>

            </View>
        </View>
    )
}
export default AsycnStorage
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})