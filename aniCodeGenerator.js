const fs = require('fs');

const aniStrArr = [
  '4232f461', //default
  '000000000000000000000000', //default
  '7ea2be2df7ba6e54b1a9c70676f668455e329d29', //default
  '000000000000000000000000', //default
  '0000ee', //delete
  'd548a5e31de2b4c2681a58a3be5302abcae4bc57', //default
  '059c01', //delete
  '0000000000000000000000000000000000000000000000000000000000', //default
  '0186a0', //default
];
// const aniStrArr = [
//   '11', //default
//   '22', //default
//   '33', //default
//   '44', //default
//   '55', //delete
//   '66', //default
//   '77', //delete
//   '88', //default
//   '99', //default
// ];
const aniStrArrLength = aniStrArr.map((v) => v.length);
const prefixSum = aniStrArrLength.reduce(
  (pre, cur) => {
    pre.push(pre[pre.length - 1] + cur);
    return pre;
  },
  [0]
);
console.log({ aniStrArrLength, prefixSum });
const typeArr = [
  //0
  [
    'default',
    'default',
    'default',
    'default',
    'delete',
    'default',
    'delete',
    'default',
    'default',
  ],
  //1
  [
    'default',
    'default',
    'default',
    'default',
    'none',
    'default',
    'none',
    'default',
    'default',
  ],
  //2
  [
    'default',
    'delete',
    'default',
    'delete',
    'none',
    'default',
    'none',
    'delete',
    'default',
  ],
  //3
  [
    'delete',
    'none',
    'default',
    'none',
    'none',
    'default',
    'none',
    'none',
    'default',
  ],
  //4
  [
    'none',
    'none',
    'delete',
    'none',
    'add',
    'default',
    'none',
    'none',
    'default',
  ],
  //5
  [
    'none',
    'none',
    'none',
    'none',
    'default',
    'delete',
    'add',
    'none',
    'default',
  ],
  //6
  [
    'none',
    'none',
    'none',
    'none',
    'delete',
    'none',
    'default',
    'none',
    'default',
  ],
  //7
  [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'default',
    'none',
    'default',
  ],
];
const aniStr = aniStrArr.reduce((pre, cur) => pre + cur);
const length = aniStr.length;

const init = [Array(10).fill('defalut')];
console.log(init);
let i = 0;
let usespringStr = '';
let right = 0;
//generation useSpring
aniStrArr.map((v, index) => {
  right += v.length;
  for (; i < right; i++) {
    usespringStr += `
            const [s${i}, a${i}] = useSpring(
            () => ({
              from: ${typeArr[0][index]}Style,
            }),
            []
          );
          `;
  }
});

const ssAndAsStr = `
const ss=[${Array.from({ length: length }, (_, k) => `s${k}`).join(',')}];
const as=[${Array.from({ length: length }, (_, k) => `a${k}`).join(',')}];
`;

let ifElseStr = '';
i = 0;
for (let j = 1; j <= 6; j++) {
  ifElseStr +=
    (j == 1 ? '' : ' else ') +
    `if (status === ${j}) {` +
    typeArr[j]
      .map((type, index) => {
        if (type === 'none') {
          if (j + 1 <= 6 && typeArr[j + 1][index] == 'add') {
            return `
            !direction && [${Array.from(
              { length: prefixSum[index + 1] - prefixSum[index] },
              (_, k) => k + prefixSum[index]
            ).join(',')}].forEach((v) => {
                toRemove(as[v]);
              })`;
          } else {
            return '';
          }
        }
        return `
          ${
            type == 'add' || type == 'delete' ? 'direction&&' : ''
          }[${Array.from(
          { length: prefixSum[index + 1] - prefixSum[index] },
          (_, k) => k + prefixSum[index]
        ).join(',')}].forEach((v) => {
              to${type}(as[v]);
            })`;
      })
      .join(';\n') +
    `}`;
}

const res = usespringStr + '\n\n' + ssAndAsStr + '\n\n' + ifElseStr;
// const res = ifElseStr;
// console.log(res);
fs.writeFile('output.js', res, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('文件已保存');
});
