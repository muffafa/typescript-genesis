"use strict";
let user = ["mustafa", 123456];
console.log(user[0].toUpperCase());
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
let selectedSize = Size.medium;
console.log(selectedSize);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//# sourceMappingURL=index.js.map