const pay = () => {

  console.log("function is called");

  // var pathName = location.pathname;
  // if (!pathName.match(/order/)){
  //   return;
  // }

  // console.log(typeof payjp);

  // console.log(typeof payjp);

  // if (instanceof payjp !== 'undefined') {
  //   console.log('変数が定義されている');
  // }else{
  //   console.log('変数が定義されていない');
  // }


  // if (typeof payjp === "undefined") {
  //   let payjp = Payjp('pk_test_48674bfea9795c1ee9fd1b2f')// PAY.JPテスト公開鍵
  // }

  // try {
  //   const payjp = null;
  // }
  // catch {

  // }


  // try {
  //   console.log(payjp);
  // }
  // catch(e){
  //   console.log(e);
  //   console.log("payjpまだ宣言してないよ");
  // }

   const payjp = Payjp('pk_test_48674bfea9795c1ee9fd1b2f')// PAY.JPテスト公開鍵



  // console.log(typeof payjp);

  const elements = payjp.elements();
  const numberElement = elements.create('cardNumber');
  const expiryElement = elements.create('cardExpiry');
  const cvcElement = elements.create('cardCvc');

  numberElement.mount('#number-form');
  expiryElement.mount('#expiry-form');
  cvcElement.mount('#cvc-form');

  const submit = document.getElementById("button");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    payjp.createToken(numberElement).then(function (response) {
      if (response.error) {
        console.log(response);
      } else {
        const token = response.id;
        const renderDom = document.getElementById("charge-form");
        const tokenObj = `<input value=${token} type="hidden" name='token'>`;
        renderDom.insertAdjacentHTML("beforeend", tokenObj);
      }
      numberElement.clear();
      expiryElement.clear();
      cvcElement.clear();
      document.getElementById("charge-form").submit();
    });
  });
};

window.addEventListener("load", pay);