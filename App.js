import React, { Component } from 'react';
import { StyleSheet, View, Alert, Button, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: 'is-invalid', password: 'is-invalid'},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleSubmit(e) {
    console.log("click button")
    if (formValid) {
      console.log("handleSubmit if")
      Alert.alert(
        "Welcom",
        this.state.mail,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      e.preventDefault();
    } else {
      console.log("handleSubmit else")
      Alert.alert(
        "Erreur",
        "Merci d\'entrer un email et un mot de passe valid",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
    
  }

  onChange(fieldName, value) {
    console.log(fieldName, ' == ', value)
    this.setState({ [fieldName]: value })
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? 'is-valid' : ' is-invalid';
          break;
      case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? 'is-valid' : ' is-invalid';
          break;
      default:
          break;
    }
    console.log('fieldValidationErrors.email ', fieldValidationErrors.email)
    console.log('fieldValidationErrors.password ', fieldValidationErrors.password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          autoCorrect={false}
          placeholder="Email"
          onChange={(e) => this.onChange('email', e.target.value)}
        />
        <TextInput 
          style={styles.input} 
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Password"          
          onChange={(e) => this.onChange('password', e.target.value)}
        />
        <Button 
          title={"Log In"} 
          style={styles.buttonLog} 
          onPress={() => this.handleSubmit} 
        />
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 25,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 9,
    marginVertical: 10
  },
  buttonLog: {
    width: 300,
  }
});

export default App;