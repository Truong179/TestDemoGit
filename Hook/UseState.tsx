





import React, { useState } from "react"
import { Button, Text, View, } from "react-native"
const orders = [100, 200, 300]







function UseState() {
    const [count, setCount] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur);
        return total
    });
    const inscreHandle = () => {
        let user = {
            name: null,
            details: { age: 19 }
        };


        const userCity = user?.name ?? "Unknown city";
        console.log(userCity); // Unknown city
    }
    console.log('render');
    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20 }}>{count}</Text>
            <Button title="Increment" onPress={inscreHandle}></Button>

        </View>
    )
}
export default UseState