export interface IUser {
  id: number;
  title: string;
  body: string;
}
export interface IProductImages {
  data: IApi;
}
export interface ITitleProduct extends IProductImages {
  currentGigabyte: number;
}
export interface IGigabytes extends IProductImages {
  indexButton: number;
  handleChangeGigabytes: (index: number) => void;
}
export interface IButtonsProduct {
  data: IApi;
  setProducts: React.Dispatch<React.SetStateAction<IApi | undefined>>;
  setNewPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IApi {
  id: number;
  url: string[];
  title: string;
  price: number;
  star: number;
  color: string[];
  category: string;
  gigabytes?: number[];
  description: string;
}
export interface IProps {
  newProduct: IApi | undefined;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopularProductsImage {
  images: IApi[];
  currentCategory: string;
  handleClickBuy: (newProduct: IApi) => Promise<void>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  listElementsBuy: React.JSX.Element[];
  setCurrentKey: React.Dispatch<React.SetStateAction<number>>;
  currentKey: number;
  setListElementsBuy: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>;
  setShowElement: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategories {
  name: string;
  checked: boolean;
}

export interface ILastELement {
  element: React.ChangeEvent<HTMLInputElement> | HTMLInputElement | undefined;
  nameElement: string;
}

export interface IPos {
  posX: string;
  posY: string;
  indexElement: number;
}

export interface IPropsProduct {
  currentIndex: number;
}

export interface ICheckboxCategories {
  ref?: React.MutableRefObject<null>;
  listCategories: ICategories[];
  setProductsOnScreen: React.Dispatch<React.SetStateAction<IApi[]>>;
  setLastChangeElement: React.Dispatch<
    React.SetStateAction<ILastELement | undefined>
  >;
  productsOnScreen: IApi[];
  rangeValue: string;
}
