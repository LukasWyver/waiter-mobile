import React from 'react';
import { ActivityIndicator } from 'react-native';
import { CenteredContainer } from './styles';

interface LoadingProps {
  color: string;
  size: 'small' | 'large';
}

export function Loading({ color, size }: LoadingProps) {
  return (
    <CenteredContainer>
      <ActivityIndicator
        color={color}
        size={size} />
    </CenteredContainer>
  );
}
