var TokenType = function TokenType(label, conf){
  this.label = label;
  this.keyword = conf;
}

var startsExpr = "foo";
var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr)
}

console.log("done");
