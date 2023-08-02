import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
} from 'react-native';

export default function App() {
	const [enteredText, setEnteredText] = useState('');
	const [goals, setGoals] = useState([]);

	function goalInputHandler(textInput) {
		setEnteredText(textInput);
	}
	function goalAddHandler() {
		setGoals((currGoals) => [...currGoals, enteredText]);
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your new goal"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add Goal" onPress={goalAddHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<ScrollView alwaysBounceVertical={false}>
					{goals.map((goal, _idx) => (
						<View key={_idx} style={styles.goalsItem}>
							<Text style={styles.goalsText}>{goal}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBlockColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		marginRight: 8,
	},
	goalsContainer: {
		flex: 5,
	},
	goalsItem: {
		margin: 4,
		borderRadius: 8,
		padding: 8,
		backgroundColor: '#2986cc',
	},
	goalsText: {
		color: '#fff',
	},
});
