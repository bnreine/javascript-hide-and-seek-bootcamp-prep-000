function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lists=document.querySelectorAll('.ranked-list li');
  for (var i=0;i<lists.length;i++) {
    lists[i].innerHTML=parseInt(lists[i].innerHTML)+3;
  }
}

function deepestChild() {
  var tempNode = document.querySelector('#grand-node');
  while (tempNode.querySelector('div')!=null) {
    tempNode=tempNode.querySelector('div');
  }
  return tempNode;
}
