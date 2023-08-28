import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Starter } from "./Starter";
import { Home } from "./Home";
import { CreateAccount } from "./CreateAccount";
import { Signin } from "./Signin";
import ProductInfo from "./Products";
import TestUI from "./TestUI";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="testUI"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="my-home" component={Home} />
            <Stack.Screen name="starter" component={Starter} />
            <Stack.Screen name="create-account" component={CreateAccount} />
            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="products" component={ProductInfo} />
            {/* <Stack.Screen name="testUI" component={TestUI} /> */}
        </Stack.Navigator>
    )
}