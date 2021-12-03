let obj = {
  val1: 100,
  // func1: function() {console.log(this);}
  func1: () => {console.log(this);}
}

obj.func1();