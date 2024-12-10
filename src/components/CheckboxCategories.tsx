import React from "react";
import { ILastELement, IApi, ICheckboxCategories } from "@/interfaces";
import apiElectronics from "../api/apiElectronics.json";

export default function CheckboxCategories({
  ref,
  listCategories,
  setProductsOnScreen,
  setLastChangeElement,
  productsOnScreen,
  rangeValue,
}: ICheckboxCategories) {
  let tempCategories: ICheckboxCategories = {
    listCategories: listCategories,
    productsOnScreen: productsOnScreen,
    rangeValue: rangeValue,
    ref: ref,
    setLastChangeElement: setLastChangeElement,
    setProductsOnScreen: setProductsOnScreen,
  };

  return listCategories.map((value, index) => {
    return (
      <li key={index} className="flex justify-between">
        <div>
          <input
            ref={ref}
            className="mr-1"
            onChange={(e) => handleChangeCategories(e, value.name, tempCategories)}
            type="checkbox"
            checked={listCategories[index].checked}
          />
          <label>{value.name}</label>
        </div>

        <span>
          {value.name === "All categories"
            ? apiElectronics.length
            : apiElectronics.filter((currentValue) =>
                currentValue.category.includes(value.name.toLowerCase())
              ).length}
        </span>
      </li>
    );
  });
}

export const handleChangeCategories = (
  element: React.ChangeEvent<HTMLInputElement> | HTMLInputElement | undefined,
  nameElement: string,
  propsCategories: ICheckboxCategories,
  currentRangeValue?: number,
  firstDownload?: boolean,
) => {
  let tempLastElement: ILastELement = {
    element,
    nameElement,
  };

  let temp = apiElectronics.filter(
    (value) => value.category === nameElement.toLowerCase()
  );

  if (currentRangeValue === undefined) {
    currentRangeValue = Number(propsCategories.rangeValue);

  }

  // debugger;

  if (firstDownload) {
    propsCategories.listCategories[0].checked = true;

    let tempArr: IApi[] = [];

    apiElectronics.map((value) => {
      if (
        currentRangeValue !== undefined
          ? value.price <= currentRangeValue ||
            (value.price >= 50000 && currentRangeValue === 50000)
          : true
      )
        tempArr.push(value);
    });

    propsCategories.setLastChangeElement(tempLastElement);
    propsCategories.setProductsOnScreen([...tempArr]);
  } else if (
    element !== undefined
      ? !(element instanceof HTMLInputElement)
        ? element.target.checked
        : element.checked
      : false
  ) {
    let tempArr: IApi[] = [];

    propsCategories.setLastChangeElement(tempLastElement);
    if (nameElement === "All categories") {
      propsCategories.listCategories.map((value, index) => {
        index === 0 ? (value.checked = true) : (value.checked = false);
      });

      apiElectronics.map((value) => {
        if (
          currentRangeValue !== undefined
            ? value.price <= currentRangeValue ||
              (value.price >= 50000 && currentRangeValue === 50000)
            : true
        )
          tempArr.push(value);
      });
    } else {
      // tempArr = productsOnScreen;
      tempArr = [];

      if (propsCategories.listCategories[0].checked) {
        propsCategories.listCategories[0].checked = false;

        tempArr = [];
      }

      let tempCategory = propsCategories.listCategories.filter(
        (value) => value.name === nameElement
      );

      tempCategory.map((value) => {
        value.checked = true;
      });

      // добавление продуктов у которых в listCategories стоит true

      propsCategories.listCategories.forEach((listCategoriesValue) => {
        apiElectronics.filter((apiElectronicsValue) => {
          if (
            apiElectronicsValue.category ===
              listCategoriesValue.name.toLowerCase() &&
            listCategoriesValue.checked &&
            currentRangeValue !== undefined &&
            (apiElectronicsValue.price < currentRangeValue ||
              (apiElectronicsValue.price >= 50000 &&
                currentRangeValue === 50000))
          ) {
            tempArr.push(apiElectronicsValue);
          }
        });
      });
    }

    propsCategories.setProductsOnScreen([...tempArr]);
  } else {
    let tempArr: IApi[] = [];

    if (nameElement === "All categories") {
      propsCategories.listCategories[0].checked = false;
    } else {
      if (!propsCategories.listCategories[0].checked) {
        let tempCategory = propsCategories.listCategories.filter(
          (value) => value.name === nameElement
        );

        tempCategory.map((value) => {
          value.checked = false;
        });

        propsCategories.productsOnScreen.map((value) => {
          if (value.category !== nameElement.toLowerCase()) {
            tempArr.push(value);
          }
        });
      } else tempArr = propsCategories.productsOnScreen;
    }
    propsCategories.setProductsOnScreen([...tempArr]);
  }
};
