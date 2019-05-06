var arrWithNum = [2, 6, 7, 9];

arrWithNum.forEach(function(item, i) {
    Math.min(...arrWithNum);
    document.write(item + "<br/>");
});
