import { FlatList } from 'react-native';
import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage source={{
            /*uri: `http://127.0.0.1:3001/uploads/${product.imagePath}` */
            uri: `https://source.unsplash.com/random/393x200/?${product.name}`
          }} />
          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />

  );
}
