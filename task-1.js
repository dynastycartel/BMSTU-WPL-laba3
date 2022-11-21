let flag = true;
let str = '';
function Tree(elem, s) {
    if (elem.tagName==undefined) return;
    str += s + elem.tagName + '<br>';
    console.log(elem.tagName);
    if (elem.childNodes.length == 0) {
        return;
    } else {
        for (let i = 0; i < elem.childNodes.length; ++i) {
            Tree(elem.childNodes[i], s + '&nbsp;&nbsp;')
        }
    }
}

function callTree() {
    if (flag) {
        Tree(document.body, '');
        let section = document.getElementById("call");
        section.innerHTML = str;
        flag = false;
    }
}
