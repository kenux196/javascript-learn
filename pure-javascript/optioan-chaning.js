const userInfo = {
  name: {
    first: 'Hong',
    last: 'Gildong',
  },
  address: {
    city: 'Daegu',
    postcode: 123412,
  },
};

const postcode = userInfo.address && userInfo.address.postcode;
console.log(postcode);

// ?. 앞의 평가 대상이 undefined 또는 null이면 에러가 발생하지 않고 undefined 반환.
const postcode2 = userInfo.address?.postcode;
console.log(postcode2);

const userInfo2 = {
  name: {
    first: 'kenux',
    last: 'yun',
  },
};
const postcode3 = userInfo2.address?.postcode;
console.log(postcode3);
