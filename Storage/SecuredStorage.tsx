import EncryptedStorage from 'react-native-encrypted-storage';
import { Alert, Button, StyleSheet, Text, View, } from "react-native";

function SecuredStorage(): React.JSX.Element {
    async function storeUserSession() {
        try {
            await EncryptedStorage.setItem(
                "user_session",
                JSON.stringify({
                    age: 21,
                    token: "ACCESS_TOKEN",
                    username: "emeraldsanto",
                    languages: ["fr", "en", "de"]
                })
            );
            console.log('Saved');

        } catch (error) {
        }
    }
    async function retrieveUserSession() {
        try {
            const session = await EncryptedStorage.getItem("user_session");

            if (session !== undefined) {
                console.log('Thonng tin duoc ma hoa : ', session);
            }
        } catch (error) {
        }
    }
    async function removeUserSession() {
        try {
            await EncryptedStorage.removeItem("user_session");
            console.log('Da xoa ',);

            // Congrats! You've just removed your first value!
        } catch (error) {
            // There was an error on the native side
        }
    }
    return (
        <View style={styles.container}>
            <View >
                <Button onPress={storeUserSession} title='Lưu thông tin '></Button>
                <Button onPress={retrieveUserSession} title='Lấy thông tin'></Button>
                <Button onPress={removeUserSession} title='Xoá thông tin'></Button>


            </View>
        </View>
    )
}
export default SecuredStorage
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})