export const parsDate=(str)=>{
    return str.replace(/T/g, " ")
  }

export const isEmpty=(obj)=> {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }