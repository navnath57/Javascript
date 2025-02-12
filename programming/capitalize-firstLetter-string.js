let str = "navnath is a softeware Engineer";

const capitaliFirstLetter = (str) => {
  let finalWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return finalWords.join(" ");
};

console.log(capitaliFirstLetter(str));
