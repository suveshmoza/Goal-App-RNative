import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [goals, setGoals] = useState([]);

	function toggleModalHandler() {
		setModalIsVisible((prev) => !prev);
	}

	function goalAddHandler(enteredText) {
		setGoals((currGoals) => [
			...currGoals,
			{ text: enteredText, id: Math.random().toString() },
		]);
		toggleModalHandler();
	}

	function goalDeleteHandler(id) {
		setGoals((currGoals) => {
			return currGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					onPress={toggleModalHandler}
					color="#00cc00"
				/>
				<GoalInput
					modalIsVisible={modalIsVisible}
					onAddGoal={goalAddHandler}
					toggleModalHandler={toggleModalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									onDeleteItem={goalDeleteHandler}
									id={itemData.item.id}
								/>
							);
						}}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
		marginTop: 20,
	},
});
