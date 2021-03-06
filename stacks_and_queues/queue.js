class Queue{
  constructor(limit){
    this.limit = limit
    this.size = 0
    this.data = []
  }
  push(item){
    if(this.size < this.limit){
      this.data.push(item)
      this.size += 1
      return this
    }
    return "ERR: Exceeded allocated queue limit."
  }
  pop(){
    if(this.size){
      let item = this.data.splice(0,1)
      this.size -= 1
      return item[0]
    }
    return "ERR: No data to pop."
  }
  popSearch(searchItem){
    for(let i=0; i< this.size; i+=1){
      const dataItem = this.data.splice(0,1)[0]
      if(dataItem === searchItem){
        this.size = this.data.length
        return dataItem
      }
    }
    this.size = this.data.length
    return "ERR: Item not found."
  }
}

const queue = new Queue(5)

for(let i=0; i<6; i+=1){
  queue.push(i)
}

console.log(queue)
console.log(queue.popSearch(2))
console.log(queue)

// for(let i=0; i<6; i++){
//   console.log(queue.pop())
// }
