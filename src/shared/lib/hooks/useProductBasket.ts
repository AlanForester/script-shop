import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/hooks";
import {
  addProductToBasket,
  removeProductFromBasket,
} from "../../../app/store/basket/slice";
import { IProduct } from "../../types";
import { RootState } from "../../../app/store/store";

type useProductBasketParams = {
  product: IProduct;
};

const useProductBasket = ({ product }: useProductBasketParams) => {
  const { productsInBasket } = useAppSelector(
    (state: RootState) => state.basketReducer
  );
  const dispatch = useAppDispatch();

  const amountOfProductInBasket = productsInBasket[product.id]?.amount;

  const handleRemoveProductFromBasket = () => {
    dispatch(removeProductFromBasket(product));
  };

  const handleAddProductToBasket = () => {
    dispatch(addProductToBasket(product));
  };

  return {
    amountOfProductInBasket,
    handleAddProductToBasket,
    handleRemoveProductFromBasket,
  };
};

export default useProductBasket;
