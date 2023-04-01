class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^a-z0-9-\s']/gim,"")
  }

  static titleize(string){
    const words = string.split(" ")
    let isFirst = true
    return words.map(word => {
        if (isFirst === true || word !== "a" && word !== "an" && word!== "but" && word !== "of" && word!== "and" && word!== "for" && word!== "at" && word!== "by" && word!== "from" && word !== "the") {
          isFirst = false
          return Formatter.capitalize(word)
        }
        return word
      }).join(" ")
  }
}