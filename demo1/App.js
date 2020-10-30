import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
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
    </View>
  );
}
