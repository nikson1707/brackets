module.exports = function check(str, bracketsConfig) {
    // your solution
    const stack = [] ;
    let count = 0;
    let flatSingle = bracketsConfig.reduce((acc, val) => acc.concat(val), []);
    for(let i = 0; i < str.length; ++i){
        let symb = str[i];
        let index = 0;
        if(typeof(flatSingle[flatSingle.indexOf(symb)])=="undefined") return false;
        if(flatSingle[flatSingle.indexOf(symb)] === flatSingle[flatSingle.indexOf(symb)+1]){
            if(count % 2 == 0){
                index = flatSingle.indexOf(symb);
                count++;
            }
            else{
                index = flatSingle.indexOf(symb)+1;
                count++;
            }
        }
        else{
            index = flatSingle.indexOf(symb);
        }
         
          if(index >= 0){
                if(index & 1){
                if(!stack.length) return false;
                let last = stack.pop()
                if(last != flatSingle[index - 1]) return false;
              }
                else{
                  stack.push(symb);
              }      
            }
      }
      return stack.length == 0 ? true : false;
  }
