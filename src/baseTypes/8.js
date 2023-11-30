/*
  Створіть тип "Gender", використовуючи union type,
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
var myGender = Gender.Male;
