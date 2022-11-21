import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ProductContainer, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { ProductModal } from '../ProductModal';
import { Product } from '../../types/Product';

interface MenuProps {
  selectedTable: string;
}

export function Menu({ selectedTable }: MenuProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        keyExtractor={product => product._id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage source={{
              /*uri: `http://127.0.0.1:3001/uploads/${product.imagePath}` */
              uri: `https://source.unsplash.com/random/393x200/?${product.name}`
            }} />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            {selectedTable && (
              <AddToCartButton>
                <PlusCircle />
              </AddToCartButton>
            )}
          </ProductContainer>
        )}
      />
    </>

  );
}
