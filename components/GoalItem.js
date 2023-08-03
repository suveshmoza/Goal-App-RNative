import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function GoalItem(props) {
	const onPressDeleteHandler = () => {
		props.onDeleteItem(props.id);
	};

	return (
		<View style={styles.goalsItem}>
			<Pressable
				android_ripple={{ color: '#2777cc' }}
				style={({ pressed }) => pressed && styles.pressedItem}
				onPress={onPressDeleteHandler}
			>
				<Text style={styles.goalsText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalsContainer: {
		flex: 5,
	},
	goalsItem: {
		margin: 4,
		borderRadius: 8,
		backgroundColor: '#2986cc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalsText: {
		padding: 8,
		color: '#fff',
	},
});
