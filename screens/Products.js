import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../config/theme";
import { FontAwesome } from "@expo/vector-icons";


function ProductInfo() {
    const data = ['indiya', 'reuben', 'yakubu', ' hanatu', 'Mary', 'John', 'Manji', 'Faith'];
    const [category, setCategory] = useState(0);

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{
                    paddingHorizontal: 24,
                    flexDirection: 'row',
                    alignItems: 'center', gap: 0
                }}>
                    <Image source={require('../assets/bid.jpg')} style={{ width: 52, aspectRatio: 1, borderRadius: 52 }} resizeMode="cover" />
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: theme.colors.navy, opacity: 0.75, fontWeight: 500 }} numberOfLines={1}>Hi Indiya</Text>
                        <Text style={{ color: theme.colors.navy, opacity: 0.75 }} numberOfLines={1}>Discover the trends whats New.</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={data} horizontal renderItem={({ item, index }) => {
                            const isSelected = category === index;
                            return (
                                <>
                                    <TouchableOpacity
                                        onPress={() =>
                                            setCategory == { index }
                                        }
                                        style={{
                                            width: 'auto', height: 20,
                                            backgroundColor: isSelected ? theme.colors.dullRed0 : theme.colors.navy,
                                            borderRadius: 10, margin: 5
                                        }}>
                                        <Text style={{ fontWeight: 500, color: theme.colors.dullRed0 }}>{item}</Text>
                                    </TouchableOpacity>


                                </>
                            )
                        }

                        }
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProductInfo;