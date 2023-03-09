function useCapitalize(string) {
  const word = string.split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
  }

  const newWord = word.join(" ");

  return { newWord };
}

export default useCapitalize;
