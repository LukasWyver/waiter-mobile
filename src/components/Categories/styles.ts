import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  border-radius: 22px;
  background: #fff;
  width: 44px;
  height: 44px;

  margin-bottom: 8px;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 1px rgba(0,0,0,${isAndroid ? 0.6 : 0.1});
  elevation: 2;
`;

