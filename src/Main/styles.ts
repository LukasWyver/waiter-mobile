import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import {isAndroid} from '../utils/isAndroid';

const Height = StatusBar.currentHeight;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${Height}px` : '0'};
  background: #FAFAFA;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: ${isAndroid ? '0' : '110px'};
  padding: 16px 24px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView``;
