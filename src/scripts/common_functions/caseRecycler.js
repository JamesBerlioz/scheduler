// export function caseRecycler(caseArray) {
//   let count = 1;
//   for (obj of caseArray) {
//     let elem = obj.htmlObject;
//     if (elem.isConnected == true) {
//       elem.id = elem.id.split("_")[0].concat(`_${count}`);
//       elem.children[0].id = elem.children[0].id
//         .split("_")[0]
//         .concat(`_${count}Time`);
//       elem.children[1].id = elem.children[1].id
//         .split("_")[0]
//         .concat(`_${count}Task`);
//       count++;
//     }
//   }
//   for (obj of caseArray) {
//     let elem = obj.htmlObject;
//     if (elem.isConnected == false) {
//       caseArray.splice(caseArray.indexOf(obj), 1);
//     }
//   }
// }
