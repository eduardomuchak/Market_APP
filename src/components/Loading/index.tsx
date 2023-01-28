import { ActivityIndicator, View } from 'react-native';

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
      }}
    >
      <ActivityIndicator color="#F50057" size={80} />
    </View>
  );
}

export default Loading;
