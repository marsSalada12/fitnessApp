import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{ FadeIn, FadeInRight, FadeOut } from 'react-native-reanimated';

export default function Index() {
  return (
    <View className=" flex-1 justify-end items-center ">
      <StatusBar style='light' />
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInRight.delay(200).springify()} className=" flex items-center text-center">
          <Text style={{ fontSize: hp(5) }} className="text-white tracking-wide font-bold">
            Best <Text className="text-pink-400">pilates</Text>
          </Text>
          <Text style={{ fontSize: hp(4) }} className="text-white tracking-wide font-bold">
            For you
          </Text>
        </Animated.View>

        <View>
          <TouchableOpacity
            style={{ height: hp(7), width: wp(80) }}
            className="bg-pink-400 flex items-center justify-center mx-auto rounded-full border-[2px] border-white">
            <Text style={{ fontSize: hp(3) }} className="text-white tracking-wide font-bold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}