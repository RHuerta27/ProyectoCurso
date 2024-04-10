import { Pressable, Text, Platform, StyleSheet } from "react-native";

interface Props {
    label: string,
    onPress?: () =>  void,
    onLongPress?:  () =>  void,
}

const PrimaryButton = ({ label, onPress, onLongPress}: Props) => {
    return(
        <Pressable
                onPress={ () => onPress && onPress()}
                onLongPress={ () => onLongPress && onLongPress()}
                style={({ pressed}) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
            >
                <Text style={{
                    fontSize: 25,
                    color: Platform.OS === 'android' ? 'white' : '#4746AB'
                }}>{ label }</Text>
            </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        padding: 20,
        paddingVertical: 10,
        borderRadius: 10,
        color: 'white',
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
    }
})

export default PrimaryButton;