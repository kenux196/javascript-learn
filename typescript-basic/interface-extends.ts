interface WebtoonCommon {
  title: string;
  createdDate: Date;
  updatedDate: Date;
}

interface Episode extends WebtoonCommon {
  episodeNumber: number;
  seriesNumber: number;
}

interface Series extends WebtoonCommon {
  seriesNumber: number;
  author: string;
}

const episode: Episode = {
  title: '나 혼자 레벨업 1화',
  createdDate: new Date(),
  updatedDate: new Date(),
  episodeNumber: 1,
  seriesNumber: 123,
};

const series: Series = {
  title: '나 혼자 레벨업',
  createdDate: new Date(),
  updatedDate: new Date(),
  seriesNumber: 123,
  author: '어떤작가',
};
console.log(typeof series);
console.log(series);

// 인터페이스 병합 : 속성이 다른 같은 이름의 인터페이스가 여러개면 병합을 해 준다.
interface Clock {
  time: Date;
}

interface Clock {
  brand: string;
}

interface Clock {
  price: number;
}

const clock: Clock = {
  time: new Date(),
  brand: '롤렉스',
  price: 10000,
};
console.log(clock);

//나머지 속성이 없으므로 에러 발생.
// const wrongClock: Clock = {
//   time: new Date(),
// };
