import styled from 'styled-components/native';
import { isAndroid } from '../../utils/isAndroid';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0,0,0,0.5);
  border-radius: 16px;

  align-items: center;
  justify-content: center;

  position: absolute;
  right: 24px;
  top: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #FAFAFA;
  padding: 32px 24px 0;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  border: 1px solid rgba(204,204,204,0.3);
  border-radius: 8px;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: ${isAndroid ? '0' : '110px'};
  padding: 16px 24px;
  background: #fff;

  box-shadow: 0px 2px 1px rgba(0,0,0,.8);
  elevation: 2;

`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View`

`;
