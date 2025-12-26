import React from 'react';
import { Text, TextComponent, View} from 'react-native';
import '../global.css';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function ActivityDetails() {
  const [selectedLanguage, setSelectedLanguage] = useState('week');
  
  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]">
    <ScrollView>
      <View className="flex-row items-center justify-between px-4 pt-8">
        <Text className="color-[#F8F8F8] font-general-semibold text-[24px]">
          Your Activities
        </Text>
        
        <View className="bg-[#151515] rounded-2xl overflow-hidden border font-general">
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={{
              color: '#E0E0E0',
              width: 130,
              height: 54,
              backgroundColor: '#1A1A1A',
            }}
            dropdownIconColor="#BFF205"
          >
            <Picker.Item label="Week" value="week" />
            <Picker.Item label="Day" value="day" />
          </Picker>
        </View>
      </View>

       <View className="items-center flex-row">
        <View><MaterialCommunityIcons name="party-popper" size={34} color="#BFF205" className="ml-5 mt-8" /></View>
          <Text className="color-[#F8F8F8] mt-8 font-general-medium text-[14px] ml-2">You spent  <FontAwesome5 name="fire" size={14} color="#BFF205" /> <Text>
               <Text className="color-[#BFF205]">450</Text> kcal more than last week.</Text>
            </Text>
      </View>
    
    <View className="w-[90] h-[80] rounded-2xl overflow-hidden self-center mt-8 bg-[#1E1E1E] items-center justify-center ">
        <FontAwesome5 name="bicycle" size={48} color="#BFF205"/>
    </View>
      <Text className="color-[#F8F8F8] self-center mt-4 font-general-medium text-[30px]">Cycling</Text>
      <MaterialCommunityIcons className="self-center" name="chevron-down" size={36} color="#F8F8F8"/>

<View className="flex-row justify-between px-4 py-4">
      <View>
      <Text className="color-[#F8F8F8] font-general mt-4 ml-5">Calories</Text>
        <Text className="mt-2 color-[#F8F8F8]">
          <FontAwesome5  name="fire" size={14} color="#BFF205" />  3785 <Text className="color-[#F8F8F880]">kcal</Text>
        </Text>
    </View>

          <View>
      <Text className="color-[#F8F8F8] font-general mt-4 ml-5">Duration</Text>
        <Text className="mt-2 color-[#F8F8F8]">
          <MaterialCommunityIcons  name="clock-fast" size={16} color="#BFF205" />  3,5 <Text className="color-[#F8F8F880]">hours</Text>
        </Text>
    </View>

          <View>
      <Text className="color-[#F8F8F8] font-general mt-4 ml-4">Distance</Text>
        <Text className="mt-2 color-[#F8F8F8]">
          <MaterialCommunityIcons  name="road-variant" size={14} color="#BFF205" />  27,5 <Text className="color-[#F8F8F880]">km</Text>
        </Text>
    </View>
</View>

<View className="w-[330] h-[340] bg-[#161616] self-center mb-24 rounded-3xl mt-8 p-3 justify-center">
  <View className="flex-row items-end justify-around mt-10 h-[240]">
    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[160] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Mon</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[200] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Tue</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[100] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Wed</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[130] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Thu</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[210] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Fri</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[120] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Sat</Text>
    </View>

    <View className="items-center">
      <View className="bg-[#1E1E1E] rounded-full w-[20] h-[240] justify-end overflow-hidden">
        <View className="bg-[#BFF205] w-[20] h-[170] rounded-full" />
      </View>
      <Text className="color-[#F8F8F8] font-general-medium text-[14px] mt-3">Sun</Text>
    </View>
  </View>
</View>

    </ScrollView>
    </SafeAreaView>
  );
}