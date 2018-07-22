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


/*



- Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!)
*/
