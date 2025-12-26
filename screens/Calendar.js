import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import '../global.css';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));
  
  const activeDays = [2, 5, 9, 11, 13, 14, 16, 19, 21, 25, 27, 29, 30];
  
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();
    
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;
    
    const days = [];
    
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }
    
    return days;
  };
  
  const days = getDaysInMonth();
  
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  
  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D]">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="items-center px-4 pt-8">
          <Text className="color-[#F8F8F8] font-general-semibold text-[28px]">Calendar</Text>
        </View>
        
        <View className="flex-row items-center px-6 mt-6">
          <View className="w-[4px] h-[28px] bg-[#BFF205] rounded-full mr-3" />
          
          <Text className="color-[#F8F8F8] font-general-semibold text-[20px] flex-1">
            {monthNames[currentDate.getMonth()]}, {currentDate.getFullYear()}
          </Text>
          
          <TouchableOpacity onPress={() => changeMonth(1)} className="p-2">
            <MaterialCommunityIcons name="chevron-down" size={24} color="#F8F8F8" />
          </TouchableOpacity>
        </View>
        
        <View className="px-6 mt-4">
          <View className="flex-row justify-center mb-3">
            {daysOfWeek.map((day, index) => (
              <View key={index} className="w-[48px] items-center">
                <Text className="color-[#808080] font-general-medium text-[12px]">
                  {day}
                </Text>
              </View>
            ))}
          </View>
          
          <View className="flex-row flex-wrap justify-between">
            {days.map((item, index) => {
              const hasActivity = item.isCurrentMonth && activeDays.includes(item.day);
              
              return (
                <View key={index} className="mb-1">
                  <View 
                    className={`w-[48px] h-[42px] rounded-lg items-center justify-center ${
                      item.isCurrentMonth ? 'bg-[#1A1A1A]' : 'bg-transparent'
                    }`}
                  >
                    {hasActivity ? (
                      <FontAwesome5 
                        name="fire" 
                        size={20} 
                        color="#BFF205" 
                      />
                    ) : (
                      <Text 
                        className={`font-general-medium text-[14px] ${
                          item.isCurrentMonth ? 'color-[#F8F8F8]' : 'color-[#404040]'
                        }`}
                      >
                        {item.day}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>

            <View className="flex-row px-5 mt-10">
              <View className="w-[4px] h-[28px] bg-[#BFF205] rounded-full mr-3" />
              <Text className="color-[#F8F8F8] font-general-semibold text-[20px] flex-1">Scheduled</Text>
            </View>

            <View className="flex-row items-center px-5 mt-6">
              <MaterialCommunityIcons name="tennis" size={34} color="#BFF205"/>
              <View className="ml-3 flex-1">
                <Text className="color-[#F8F8F8] font-general-medium text-[14px]">Tennis Tournament with Friends</Text>
                <Text className="color-[#808080] font-general-regular text-[12px] mt-1">Sat, 2 At 02:00 PM</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={30} color="#F8F8F8" />
            </View>

               <View className="flex-row items-center px-5 mt-6">
              <MaterialCommunityIcons name="swim" size={34} color="#BFF205"/>
              <View className="ml-3 flex-1">
                <Text className="color-[#F8F8F8] font-general-medium text-[14px]">Swimming Lesson</Text>
                <Text className="color-[#808080] font-general-regular text-[12px] mt-1">Tue, 5 At 11:00 AM</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={30} color="#F8F8F8" />
            </View>

               <View className="flex-row items-center px-5 mt-6">
              <MaterialCommunityIcons name="yoga" size={34} color="#BFF205"/>
              <View className="ml-3 flex-1">
                <Text className="color-[#F8F8F8] font-general-medium text-[14px]">Yoga Activity</Text>
                <Text className="color-[#808080] font-general-regular text-[12px] mt-1">Sat, 9 At 12:00 AM</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={30} color="#F8F8F8" />
            </View>

             <View className="flex-row items-center px-5 mt-6">
              <MaterialCommunityIcons name="boxing-glove" size={34} color="#BFF205"/>
              <View className="ml-3 flex-1">
                <Text className="color-[#F8F8F8] font-general-medium text-[14px]">Boxing Session</Text>
                <Text className="color-[#808080] font-general-regular text-[12px] mt-1">Thu, 7 At 06:00 PM</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={30} color="#F8F8F8" />
            </View>

      </ScrollView>
    </SafeAreaView>
  );
}