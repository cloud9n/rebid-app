import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Starter } from "./Starter";
import { Home } from "./Home";
import ProductInfo from "./Products";
import { CreateAccount } from "./CreateAccount";
import { StatusBar } from "react-native";
import { Signin } from "./Signin";

const Stack = createBottomTabNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="create-account"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="starter" component={Starter} />
            <Stack.Screen name="create-account" component={CreateAccount} />
            <Stack.Screen name="my-home" component={Home} />
            <Stack.Screen name="products" component={ProductInfo} />
            <Stack.Screen name="signin" component={Signin} />
        </Stack.Navigator >
    )
}