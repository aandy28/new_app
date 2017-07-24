import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button } from 'react-native';
import Animation from 'lottie-react-native';
import TwitterHeart from './json_anim/twitter_heart.json'

class Splash extends Component {

  onLearnMore = () => {
    this.props.navigation.navigate('Feed');
  };

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Wellness :-)</Text>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 500,
            height: 500
          }}
          loop={true}
          source={TwitterHeart}
        />
        <Button
          onPress={() => this.onLearnMore()}
          title="Chat with Lucy"
        /></View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#60ceb5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

export default Splash;
