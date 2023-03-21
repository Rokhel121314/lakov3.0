function useToUpperCase() {
  const toCapitalizedFirstWord = (string) => {
    const word = string?.split(" ");

    for (let i = 0; i < word?.length; i++) {
      word[i] = word[i][0]?.toUpperCase() + word[i].substr(1);
    }

    return word?.join(" ");
  };

  return { toCapitalizedFirstWord };
}

export default useToUpperCase;
