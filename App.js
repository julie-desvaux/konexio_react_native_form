import React, { Component } from "react";
import { StyleSheet, View, Alert, Button, TextInput } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			formErrors: { email: "is-invalid", password: "is-invalid" },
			emailValid: false,
			passwordValid: false,
			formValid: false,
		};
	}

	_userSignup() {
		console.log("email", this.state.email);
		console.log("password", this.state.password);
		let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		let passwordValid = this.state.password.length >= 6;
		if (!emailValid) {
			Alert.alert(
				"Erreur",
				"Merci d'entrer un email et un mot de passe valid",
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel",
					},
					{ text: "OK", onPress: () => console.log("OK Pressed") },
				],
				{ cancelable: false }
			);
		} else if (!passwordValid) {
			Alert.alert(
				"Erreur",
				"Merci d'entrer un email et un mot de passe valid",
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel",
					},
					{ text: "OK", onPress: () => console.log("OK Pressed") },
				],
				{ cancelable: false }
			);
		} else if (emailValid && passwordValid) {
			Alert.alert(
				"Welcom",
				this.state.email,
				[
					{
						text: "Cancel",
						onPress: () => console.log("Cancel Pressed"),
						style: "cancel",
					},
					{ text: "OK", onPress: () => console.log("OK Pressed") },
				],
				{ cancelable: false }
			);
		}
	}

	render() {
		const { email, password } = this.state;

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder="Email"
					onChangeText={(text) => this.setState({ email: text })}
					value={this.state.email}
				/>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					secureTextEntry={true}
					placeholder="Password"
					onChangeText={(text) => this.setState({ password: text })}
					value={this.state.password}
				/>
				<Button title={"Log In"} style={styles.buttonLog} onPress={() => this._userSignup()} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		width: 300,
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 9,
		marginVertical: 10,
		padding: 10,
	},
	buttonLog: {
		width: 300,
	},
});

export default App;
