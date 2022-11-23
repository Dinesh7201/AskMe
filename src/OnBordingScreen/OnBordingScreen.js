// // import React from 'react';
// // import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// // import Onboarding from 'react-native-onboarding-swiper';


// // const OnboardingScreen = ({navigation}) => {
// //     return (
// //       <Onboarding
// //       onSkip={() => navigation.replace("start")}
// //       onDone={() => navigation.navigate("start")}
// //   pages={[
// //     {
// //       backgroundColor: '#fff',
// //       image: <Image source={require('../../assets/images/onboarding-img1.png')} />,
// //       title: 'knowledge',
// //       subtitle: 'Share with otherss',
// //     },
// //     {
// //       backgroundColor: '#fff',
// //       image: <Image source={require('../../assets/images/onboarding-img2.png')} />,
// //       title: 'Anytime',
// //       subtitle: 'clear your doubts any time',
// //     },
// //     {
// //       backgroundColor: '#fff',
// //       image: <Image source={require('../../assets/images/onboarding-img3.png')} />,
// //       title: 'Communication',
// //       subtitle: 'Communication is what makes team strong',
// //     },
// //   ]}
  
// // />
// //     );
// // };

// // export default OnboardingScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, 
// //     alignItems: 'center', 
// //     justifyContent: 'center'
// //   },
// // });
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("start")}
        onDone={() => navigation.navigate("start")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../../assets/images/onboarding-img1.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
           image: <Image source={require('../../assets/images/onboarding-img2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../../assets/images/onboarding-img3.png')} />,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
// import React from 'react';
// import { Text, View } from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         onboarding
//       </Text>
//     </View>
//   );
// }

// export default YourApp;