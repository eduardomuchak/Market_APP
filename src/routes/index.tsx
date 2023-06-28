import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useFirebaseAuth } from '../contexts/useFirebaseAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes: React.FC = () => {
  const { session, isLoading } = useFirebaseAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#F50057" size={80} />
      </View>
    );
  }

  return session?.user.refreshToken ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
