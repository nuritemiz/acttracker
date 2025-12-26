import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import "../global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function Welcome({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/bg.png")}
            style={{ flex: 1 }}
            resizeMode='cover'
        >
            <View className="absolute inset-0 bg-black opacity-50" />
            <SafeAreaView className="flex-1 items-center justify-start">

                <Text className="color-white font-general-medium mt-10">Act
                    <Text className="text-[#BFF205] font-general"> Tracker</Text>
                </Text>
                <Text className="mt-80 text-[#BFF205] font-general-semibold text-4xl m-2"> Track Your Health</Text>
                <Text className="font-general-medium mt-4 text-[#F8F8F8] text-center text-[12px] m-6">Monitor every move, master every set. Log your personal activities in detail and visualize your journey to peak performance.</Text>

                <TouchableOpacity
                    className="bg-[#BFF205] mt-16 p-5 px-12 rounded-full"
                    onPress={() => navigation.replace('HomeTab')}
                >
                    <Text className="text-[#0D0D0D] font-general-medium">Get Started</Text>
                </TouchableOpacity>
                <Text className="text-[#F8F8F8] font-light m-4 text-[10px]">Already have an account?
                    <Text className="font-general"> Sign in</Text>
                </Text>
                <Text className="text-[#F8F8F8] text-[10px]">or</Text>

                <View className="flex-row gap-6 mt-8">
                    <TouchableOpacity>
                        <FontAwesome name="apple" size={24} color="#BFF205" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="google" size={24} color="#BFF205" />
                    </TouchableOpacity>
                </View>

                <Text className="text-[#F8F8F8] mt-20 text-[10px] font-extralight">Terms Of Service & Policies</Text>
            </SafeAreaView>

        </ImageBackground>
    );
}
