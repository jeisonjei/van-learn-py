"use strict";
var FlyingSquirrel = {
    speed: 30,
    name: "Bob",
    isFlying: true
};
var content = document.querySelector(".content");
for (let txt1 in FlyingSquirrel) {
    var value = FlyingSquirrel[txt1];
    var element = document.createElement("div");
    element.textContent = value;
    if (content !== null) {
        content.append(element);
    }
}
