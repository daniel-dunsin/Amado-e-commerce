import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../data";
const AppContext = React.createContext();
const getAllProducts = () => {
  const tempProducts = [];
  data.forEach((item) => {
    tempProducts.push({ ...item });
  });
  return tempProducts;
};
const getCartFromLocalStorage = () => {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState(getAllProducts());
  const [allFilterParameters, setAllFilterParameters] = useState({});
  const [selectedFilterParameters, setSelectedFilterParameters] = useState({ colors: [], sizes: [], categories: [] });
  const [filteredProducts, setFilteredProducts] = useState(getAllProducts());
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const [modal, setModal] = useState({ modalContent: {}, isModalOpen: false });
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [allTotal, setAllTotal] = useState({ total: 0, subtotal: 150, tax: 15 });
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openFilterBar = () => {
    setIsFilterBarOpen(true);
  };
  const closeFilterBar = () => {
    setIsFilterBarOpen(false);
  };
  const setInCart = ()=>{
    setFilteredProducts(filteredProducts.map(product=>{
      const inCart = cart.find(item=> item.id == product.id);
      if(inCart){
        product.inCart = true;
      }
      else{
        product.inCart = false;
      }
      return product;
    }))
  }
  const filterBySearch = (searchParam) => {
    const tempProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchParam.toLowerCase())
    );
    setFilteredProducts(tempProducts);
  };
  const getAllFilterParameters = () => {
    const allParam = { colors: [], sizes: [], categories: [] };
    // check for every item that matches the parameters stated above and add them as the default paramters
    Object.keys(allParam).forEach((key) => {
      data.forEach((item) => {
        item[key].forEach((itemValue) => {
          if (!allParam[key].includes(itemValue)) {
            allParam[key].push(itemValue);
          }
        });
      });
    });

    setAllFilterParameters(allParam);
  };
  const editFilterParameters = (event, group, value) => {
    let tempFilterParameters = { ...selectedFilterParameters };
    let tempCollection = tempFilterParameters[group];

    // add the checkboxes that have been selected and remove the unselected checkboxes
    if (event.target.checked) {
      tempCollection.push(value);
    } else {
      tempFilterParameters = { ...tempFilterParameters, [group]: tempCollection.filter(item => item != value) }
    }
    setSelectedFilterParameters(tempFilterParameters);
  }
  const filterProducts = () => {
    const keys = Object.keys(selectedFilterParameters).filter(key => selectedFilterParameters[key].length > 0);
    const tempProducts = data.reduce((products, currentProduct) => {
      let success = 0;
      keys.forEach(key => {

        currentProduct[key].forEach(itemCollection => {
          console.log(selectedFilterParameters[key]);
          if (selectedFilterParameters[key].includes(itemCollection)) {
            success = success + 1;
          }
        });

      })
      // if the item matches all of the parameters
      if (success >= keys.length) {
        products.push(currentProduct);
      }
      return products;
    }, []);
    setFilteredProducts(tempProducts);
  }
  const clearFilter = () => {
    setSelectedFilterParameters({ colors: [], sizes: [], categories: [] });
    setFilteredProducts(getAllProducts());
    // clear all selected checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    })
  }
  const getSpecificProduct = (id) => {
    return products.find(product => product.id == id);
  }
  const showModal = (id) => {
    // get the product to be displayed
    const product = getSpecificProduct(id);
    setModal({ modalContent: product, isModalOpen: true });
  }
  const closeModal = () => {
    setModal({ modalContent: {}, isModalOpen: false });
  }
  const addToCart = (id, itemCount) => {
    // itemCount is needed only when adding from the product details page
    let tempProducts = [...filteredProducts];
    tempProducts = tempProducts.map(product => {
      if (product.id == id) {
        if (itemCount) {
          product.count = parseInt(itemCount);
        } else {
          product.count = 1;
        }
        product.total = parseInt((product.price * product.count).toFixed(2));
        product.inCart = true;
        return product;
      }
      return product;
    });
    // get the item from temp products and add it to the cart
    const item = tempProducts.find(product => product.id == id);
    setCart([...cart, item]);
    setFilteredProducts(tempProducts);
  }

  const getTotal = () => {
    const { total, subtotal, tax } = cart.reduce((cartTotal, cartItem) => {
      const { total } = cartItem;
      const tempSubtotal = total;
      const tempTax = parseInt((tempSubtotal * 0.1).toFixed(2));
      const tempTotal = tempSubtotal + tempTax;

      cartTotal.subtotal += tempSubtotal;
      cartTotal.tax += tempTax;
      cartTotal.total += tempTotal;
      return cartTotal;
    }, {
      total: 0, subtotal: 0, tax: 0
    });

    setAllTotal({ total, subtotal, tax });
  };

  const editItemCount = (id, operation) => {
    let tempCartProducts = [...cart];

    tempCartProducts = tempCartProducts.reduce((allProducts, currentProduct) => {
      if (currentProduct.id == id) {
        if (operation == 'increase') {
          currentProduct.count += 1;
          allProducts.push(currentProduct)
        } else if (operation == 'decrease') {
          currentProduct.count -= 1;
          //  if it becomes less than 0, don't add it
          if (currentProduct.count > 0) {
            allProducts.push(currentProduct);
          } else {
            removeItem(id);
          }
        }
        currentProduct.total = parseInt((currentProduct.price * currentProduct.count).toFixed(2));

      } else {
        allProducts.push(currentProduct);
      }
      return allProducts;
    }, []);
    setCart(tempCartProducts);
  }

  const removeItem = (id) => {
    let tempCartProducts = [...cart];
    tempCartProducts = tempCartProducts.filter(item => item.id != id);
    console.log(filteredProducts);
    setFilteredProducts(filteredProducts.map((product) => {
      if (product.id == id) {
        product.count = 0;
        product.total = 0;
        product.inCart = false;
        return product
      }
      return product;
    }));
    setCart(tempCartProducts);
  }
  useEffect(() => {
    getAllFilterParameters();
    setInCart();
  }, []);
  useEffect(() => {
    getTotal();
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        allFilterParameters,
        filteredProducts,
        openFilterBar,
        closeFilterBar,
        isFilterBarOpen,
        filterBySearch,
        editFilterParameters,
        filterProducts,
        getSpecificProduct,
        clearFilter,
        modal,
        showModal,
        closeModal,
        cart,
        allTotal,
        addToCart,
        editItemCount,
        removeItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
