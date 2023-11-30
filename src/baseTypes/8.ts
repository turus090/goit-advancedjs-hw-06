/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

enum Gender {
  Male = "male",
  Female = "female",
}

const myGender: Gender = Gender.Male;
