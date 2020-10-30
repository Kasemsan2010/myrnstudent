import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import * as appActions from './actions/app.action';
import * as jsonActions from './actions/jsonfeedscreen.action';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

export default function JSONFeedScreen(props) {
  const appReducer = useSelector((state) => state.appReducer);
  const jsonfeedscreenReducer = useSelector(
    (state) => state.jsonfeedscreenReducer,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(jsonActions.loadDataWithPost());
    dispatch(appActions.checkIn('lek'));
  }, []);

  renderRow = ({item, index}) => (
    <TouchableOpacity
      style={styles.listCard}
      onPress={() => {
        // props.navigation.navigate("Youtube", {item})
        YouTubeStandaloneAndroid.playVideo({
          apiKey: 'YOUR_API_KEY', // Your YouTube Developer API Key
          videoId: item.id, // YouTube video ID
          autoplay: true, // Autoplay the video
          startTime: 120, // Starting point of video (in seconds)
        })
          .then(() => console.log('Standalone Player Exited'))
          .catch((errorMessage) => console.error(errorMessage));
      }}>
      {/* Avatar and title, subtitle */}
      <View style={styles.listCardView}>
        {/* Avatar */}
        <Image style={styles.listAvatar} source={{uri: item.avatar_image}} />

        {/* Title and Subtitle */}
        <View style={styles.listTitleSubtitleContainer}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listSubTitle}>{item.subtitle}</Text>
        </View>
      </View>

      {/* Youtube Image */}
      <Image
        style={styles.listYoutbeImage}
        source={{uri: item.youtube_image}}
      />
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <Image
      source={require('./assets/img/header_react_native.png')}
      resizeMode="contain"
      style={{height: 100, width: '100%'}}
    />
  );

  const refresh = () => {
    dispatch(appActions.checkIn('kan'));
    dispatch(jsonActions.loadDataWithPost());
  };

  const {username, timestamp} = appReducer;
  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      {appReducer.username && (
        <Text>
          {username} : {timestamp}
        </Text>
      )}
      <FlatList
        refreshing={jsonfeedscreenReducer.isFetching}
        onRefresh={refresh}
        ListHeaderComponent={renderHeader}
        data={jsonfeedscreenReducer.dataArray}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
