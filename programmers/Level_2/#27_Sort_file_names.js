// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  let fileDicList = files.map((file, i) => {
    let matched = file.match(/([^0-9]+)([0-9]+)(.*)/);
    return {
      name: file,
      head: matched[1].toLowerCase(),
      number: +matched[2],
      index: i,
    };
  });

  return fileDicList
    .sort((file1, file2) => {
      if (file1.head !== file2.head) return file1.head > file2.head ? 1 : -1;
      if (file1.number !== file2.number) return file1.number - file2.number;
      return file1.index - file2.index;
    })
    .map((file) => file.name);
}

console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
// console.log(
//   solution([
//     'F-5 Freedom Fighter',
//     'B-50 Superfortress',
//     'A-10 Thunderbolt II',
//     'F-14 Tomcat',
//   ])
// ); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
