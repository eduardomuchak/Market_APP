import { ActivityIndicator, View } from 'react-native';
import BottomBar from '../BottomBar';
import { Header } from '../Header';

function Loading() {
  return (
    <View className="h-screen items-stretch justify-between flex flex-col flex-1">
      <Header title="" />
      <View>
        <ActivityIndicator color="#F50057" size={40} />
      </View>
      <BottomBar />
    </View>
  );
}

export default Loading;
