import { Text, TextComponent, View, Image, TouchableOpacity} from 'react-native';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';


const Person = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D] px-4 pt-12">
              <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
              >
    <View className="flex-row items-center justify-between">
        <Text className="color-[#F8F8F8] font-general-semibold text-[24px]">Settings</Text>
         <MaterialCommunityIcons name="exit-to-app" size={34} color="#BFF205"/>
     </View>

       <View className="flex-row items-center justify-between mt-14">
               <View className="flex-row items-center">
                 <Image className="w-12 h-12" source={require('../assets/person.png')} />
                 <View className="ml-3">
                   <Text className="text-white text-[16px] font-general-medium">Jenny Wilson</Text>
                   <Text className="text-[#C4FF0D] font-general">jennywilson@gmail.com</Text>
                 </View>
               </View>
               <TouchableOpacity className="flex-row">
                <MaterialCommunityIcons name="square-edit-outline" size={20} color="#BFF205" />
                <Text className="color-[#F8F8F8] font-general-medium text-[14px]">  Edit Profile</Text> 
               </TouchableOpacity>
        </View>

        <Text className="opacity-50 color-[#F8F8F8] font-general-medium text-[12px] mt-10">ACCOUNT</Text>

        <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="note" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">My Program</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

                <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="flag-variant" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Sports</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>


                <Text className="opacity-50 color-[#F8F8F8] font-general-medium text-[12px] mt-10">SETTINGS</Text>

        <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="calendar" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Calendar</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

                <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="signal" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Statics</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

                        <Text className="opacity-50 color-[#F8F8F8] font-general-medium text-[12px] mt-10">PREFERENCES</Text>

        <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="earth" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Language</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

                <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="moon-waning-crescent" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Dark Mode</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

                <View className="flex-row items-center 5 mt-6">
            <MaterialCommunityIcons name="notification-clear-all" size={34} color="#BFF205"/>
                <View className="ml-3 flex-1">
                    <Text className="color-[#F8F8F8] font-general-regular text-[18px]">Notifications</Text>
                </View>
            <MaterialCommunityIcons className="opacity-50" name="chevron-right" size={30} color="#F8F8F8" />
        </View>

        <View className="mt-10 opacity-50">
                <Text className="color-[#F8F8F8] self-center">Terms Of Service & Policies</Text>
                <Text className="color-[#F8F8F8] self-center mt-4">F.A.Q</Text>
        </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default Person
