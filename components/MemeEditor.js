import React from 'react';
import {
  Modal,
  Keyboard,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';

export default class MemeEditor extends React.Component {
  static propTypes = {
    photo: PropTypes.object,
    closeMemeEditor: PropTypes.func
  };

  saveImage = () => {

  };

  setMemeRef = (ref) => {
    this.memeRef = ref;
  }

  renderMemeTextInput = () => {
    return (
        <TextInput
          autoCapitalize={'characters'}
          placeholder={'Enter text here!'}
          placeholderTextColor={'white'}
          multiline={true}
          style={styles.memeText}
          numberOfLines={2}
          underlineColorAndroid={'transparent'}/>
      );
  }

  closeKeyboard = () => {
    Keyboard.dismiss();
  }


  render = () => {
    return (
      <Modal animationType="slide" transparent={false}>
        <TouchableWithoutFeedback onPress={this.closeKeyboard}>
          <View style={styles.container}>
            <Text style={styles.baseFont}>
              Tap on the top and bottom of the image to add your Text. Then save your meme to the Gallery!
            </Text>
            <View
              collapsable={false}
              ref={this.setMemeRef}>
              <ImageBackground
                source={{ uri: this.props.photo.uri }}
                style={styles.imageStyle}>
                {this.renderMemeTextInput()}
                {this.renderMemeTextInput()}
              </ImageBackground>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  baseFont: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  container: {
    alignItems:'center',
    flex: 1,
    padding: 20
  },
  imageStyle: {
    width: 250,
    height: 350,
    justifyContent: 'space-between'
  },
  memeText: {
    margin: 10,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 20,
    textDecorationLine: 'none',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5
  },
  buttons: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 30,
  }
});
