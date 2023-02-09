import { ActivityIndicator, View } from 'react-native';

function Loading() {
  return (
    <View className="h-screen items-center justify-center flex flex-col flex-1">
      <ActivityIndicator color="#F50057" size={40} />
    </View>
  );
}

export default Loading;
