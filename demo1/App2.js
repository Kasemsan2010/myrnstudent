import React from 'react';
import {View, Text, Dimensions} from 'react-native';

export default function App2() {
  return (
    <View
      // jsx
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      {/* Box1 */}
      <Text
        style={{
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: 'yellow',
          textAlign: 'center',
        }}>
        Hey 1
      </Text>

      {/* Box2 */}
      <Text
        style={{
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: 'green',
          textAlign: 'center',
        }}>
        Hey 2
      </Text>

      {/* Box3 */}
      <Text
        style={{
          textAlignVertical: 'center',
          color: 'black',
          backgroundColor: '#3377ee30',
          textAlign: 'center',
        }}>
        Hey 3
      </Text>

      <View
        style={{
          position: 'absolute',
          top: Dimensions.get('screen').height / 2 - 50,
          left: Dimensions.get('screen').width / 2 - 50,
          height: 100,
          width: 100,
          borderRadius: 50,
          backgroundColor: 'black',
        }}
      />
    </View>
  );
}
