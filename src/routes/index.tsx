import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../contexts/auth';

import { AppRoutes } from '../routes/app.routes';

const Routes: React.FC = () => {
  const { signed, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#F50057" size={80} />
      </View>
    );
  }

  // return signed ? <AppRoutes /> : <AuthRoutes />;
  return <AppRoutes />;
};

export default Routes;
