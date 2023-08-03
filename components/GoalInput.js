import { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from 'react-native';

export default function GoalInput(props) {
	const [enteredText, setEnteredText] = useState('');
	function goalInputHandler(textInput) {
		setEnteredText(textInput);
	}

	function onPressHandler() {
		props.onAddGoal(enteredText);
		setEnteredText('');
	}

	return (
		<Modal visible={props.modalIsVisible} animationType="fade">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/modalImage.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your new goal"
					onChangeText={goalInputHandler}
					value={enteredText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={onPressHandler} color="#00cc00" />
					</View>
					<View style={styles.button}>
						<Button
							color="#D70000"
							title="Cancel"
							onPress={props.toggleModalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		marginBottom: 24,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		backgroundColor: 'white',
		width: '100%',
		borderRadius: 10,
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 290,
		height: 240,
		margin: 20,
	},
});
