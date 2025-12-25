import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import "../global.css"
import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
export default function Home() {
  return (
    
    <SafeAreaView className="flex-1   bg-[#0D0D0D]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
      <View className="flex-row items-center justify-between px-4 pt-8 ">
        <View className="flex-row items-center">
          <Image className="w-12 h-12" source={require('../assets/person.png')}/>
          <View className="ml-3">
            <Text className="text-white text-[12px] font-general-medium">Jenny Wilson</Text>
            <Text className="text-[#C4FF0D] font-general">Welcome</Text>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bell" size={20} color="#BFF205" />
        </TouchableOpacity>
      </View>

      <View className="flex-row ml-5  mt-8">
            <FontAwesome name="star" size={20} color="#BFF205" />
            <Text className="text-[#F8F8F8] font-general-medium text-[18px] px-4">Favorite Activities</Text>
      </View>
      
     
      <TouchableOpacity className="w-[332px] h-[112px] rounded-2xl overflow-hidden self-center mt-5 ">
        <ImageBackground
          source={require('../assets/running.png')}
          style={{flex: 1}}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1, justifyContent: "flex-end", padding: 16}}
          >
            <View className="flex-row items-start">
              <FontAwesome5 name="running" size={28} color="#BFF205" className="mt-2"/>
              <View className="ml-4 flex-1">
                <Text className="text-white font-general-medium text-[18px]">Running</Text>
                <View className="flex-row items-center mt-1">
                  <FontAwesome5 name="fire" size={14} color="#BFF205" />
                  <Text className="text-white font-general-medium text-[12px] ml-1"> 450</Text>
                  <Text className="text-white font-general text-[12px] ml-1 opacity-50"> kcal / day</Text>
                </View>
                
              </View>
            </View>
          </LinearGradient>
        </ImageBackground> 
      </TouchableOpacity>

      <TouchableOpacity className="w-[332px] h-[112px] rounded-2xl overflow-hidden self-center mt-5 ">
        <ImageBackground
          source={require('../assets/cycling.png')}
          style={{flex: 1}}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1, justifyContent: "flex-end", padding: 16}}
          >
            <View className="flex-row items-start">
              <FontAwesome5 name="bicycle" size={28} color="#BFF205" className="mt-2"/>
              <View className="ml-4 flex-1">
                <Text className="text-white font-general-medium text-[18px]">Cycling</Text>
                <View className="flex-row items-center mt-1">
                  <FontAwesome5 name="fire" size={14} color="#BFF205" />
                  <Text className="text-white font-general-medium text-[12px] ml-1"> 576</Text>
                  <Text className="text-white font-general text-[12px] ml-1 opacity-50"> kcal / day</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground> 
      </TouchableOpacity>

       <TouchableOpacity className="w-[332px] h-[112px] rounded-2xl overflow-hidden self-center mt-5 ">
        <ImageBackground
          source={require('../assets/tennis.png')}
          style={{flex: 1}}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1, justifyContent: "flex-end", padding: 16}}
          >
            <View className="flex-row items-start">
              <MaterialCommunityIcons name="tennis" size={28} color="#BFF205" className="mt-2" />
              <View className="ml-4 flex-1">
                <Text className="text-white font-general-medium text-[18px]">Tennis</Text>
                <View className="flex-row items-center mt-1">
                  <FontAwesome5 name="fire" size={14} color="#BFF205" />
                  <Text className="text-white font-general-medium text-[12px] ml-1"> 670</Text>
                  <Text className="text-white font-general text-[12px] ml-1 opacity-50"> kcal / day</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground> 
      </TouchableOpacity>

      <View className="flex-row ml-5 mt-10">
        <MaterialCommunityIcons name="import" size={20} color="#BFF205" />
        <Text className="text-[#F8F8F8] font-general-medium text-[18px] px-4">
          Select Your Activity
        </Text>
      </View>
      
      <View className="flex-row px-5 justify-between mt-5 mb-4">
        <TouchableOpacity className="w-[150px] h-[112px] rounded-2xl overflow-hidden">
          <ImageBackground
            source={require('../assets/swimming.png')}
            style={{flex: 1}}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{flex: 1, justifyContent: "center"}}
            >
              <View className="self-center align-center">
                <MaterialCommunityIcons name="swim" size={40} color="#BFF205" />
              </View>
            </LinearGradient>
          </ImageBackground> 
        </TouchableOpacity>

        <TouchableOpacity className="w-[150px] h-[112px] rounded-2xl overflow-hidden">
          <ImageBackground
            source={require('../assets/yoga.png')}
            style={{flex: 1}}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{flex: 1, justifyContent: "center"}}
            >
              <View className="self-center align-center">
                <MaterialCommunityIcons name="yoga" size={40} color="#BFF205" />
              </View>
            </LinearGradient>
          </ImageBackground> 
        </TouchableOpacity>
      </View>

      <View className="flex-row px-5 justify-between mt-3 mb-4">
        <TouchableOpacity className="w-[150px] h-[112px] rounded-2xl overflow-hidden">
          <ImageBackground
            source={require('../assets/yoga.png')}
            style={{flex: 1}}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{flex: 1, justifyContent: "center"}}
            >
              <View className="self-center align-center">
                <MaterialCommunityIcons name="yoga" size={40} color="#BFF205" />
              </View>
            </LinearGradient>
          </ImageBackground> 
        </TouchableOpacity>

        <TouchableOpacity className="w-[150px] h-[112px] rounded-2xl overflow-hidden">
          <ImageBackground
            source={require('../assets/yoga.png')}
            style={{flex: 1}}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{flex: 1, justifyContent: "center"}}
            >
              <View className="self-center align-center">
                <MaterialCommunityIcons name="yoga" size={40} color="#BFF205" />
              </View>
            </LinearGradient>
          </ImageBackground> 
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}