/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/
function getPromise() {
    return new Promise(function (resolve) {
        resolve(["Text", 50]);
    });
}
getPromise().then(function (data) {
    console.log(data);
});
