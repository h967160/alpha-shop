import { createContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [cardInfo, setCardInfo] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cardCVC: "",
  });
  const [shippingMethod, setShippingMethod] = useState(null);

  // 取得使用者輸入的信用卡資訊
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 取得運輸方式及費用
  const handleShippingChange = (event) => {
    const { id } = event.target;
    // 使用 getAttribute() 取得 data-price 屬性的值 , 並轉為數字
    const price = parseInt(event.target.getAttribute("data-price"));
    setShippingMethod({
      id,
      price,
    });
  };

  // 確認下單並印出資訊
  const handleConfirmOrder = (totalPrice, clearCart) => {
    // 檢查表單是否填寫
    const isFormFilled = Object.values(cardInfo).some((value) => value !== "");

    // 檢查是否已選擇運送方式 , 之後應該在Step2的下一步檢查才對(待修正)
    const isShippingMethodSelected = shippingMethod !== null;

    if (isFormFilled && isShippingMethodSelected) {
      console.log(`
      您的訂單已成立，以下是您的付款資訊
      持卡人姓名: ${cardInfo.cardHolderName}
      卡號: ${cardInfo.cardNumber}
      有效期限: ${cardInfo.cardExpiryDate}
      安全碼: ${cardInfo.cardCVC}
      小計: ${totalPrice}
      `);
      // 清空表單
      setCardInfo({
        cardHolderName: "",
        cardNumber: "",
        cardExpiryDate: "",
        cardCVC: "",
      });
      // 清空購物車
      clearCart();
    } else if (totalPrice === 0) {
      console.log("目前購物車是空的");
    } else if (!isShippingMethodSelected) {
      console.log("請選擇運送方式");
    } else {
      console.log("請填寫付款資訊以完成訂單");
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        cardInfo,
        shippingMethod,
        handleInputChange,
        handleConfirmOrder,
        handleShippingChange,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
