type Squirrel = {
    speed : number;
    name : string;
    isFlying : boolean;
}

var FlyingSquirrel : Squirrel = {
    speed : 30,
    name : "Bob",
    isFlying : true
}
var content = document.querySelector(".content")
for (let txt1 in FlyingSquirrel) {
    var value = FlyingSquirrel[txt1 as keyof Squirrel];
    var element = document.createElement("div");
    element.textContent = value as string;
    if (content !== null){
        content.append(element)
    }
}

