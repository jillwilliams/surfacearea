const answer = ( ) => {
    var l = document.getElementById("length1").value;
        return l * l * l + " un<sup>3</sup>";
}
const surfaceAreaCube = ( ) => {
    document.getElementById("demo1").innerHTML = answer( );
};
// RECTANGULAR PRISM
const answer2 = ( ) => {
    var l2 = document.getElementById("length2").value;
    var w2 = document.getElementById("width2").value;
    var h2 = document.getElementById("height2").value;
        return  2*((l2*w2) + (w2*h2) + (l2*h2)) + " un<sup>3</sup>";
}
const surfaceAreaRectPrism = ( ) => {
    document.getElementById("demo2").innerHTML = answer2( );
};
// Cylinders///
const answer3 = ( ) => {
    var r3 = document.getElementById("radius3").value;
    var h3 = document.getElementById("height3").value;
    var calculation = 2*r3*r3*Math.PI + 2*r3*h3*Math.PI;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const surfaceAreaCylinder = ( ) => {
    document.getElementById("demo3").innerHTML = answer3(  );
};
// Cones///
const answer4 = ( ) => {
    var r4 = document.getElementById("radius4").value;
    var h4 = document.getElementById("height4").value;
    var calculation1 = r4*r4*Math.PI;
    var calculation2 = 2*r4*h4*Math.PI;
    var finalAnswer = (calculation1+calculation2).toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const surfaceAreaCone = ( ) => {
    document.getElementById("demo4").innerHTML = answer4(  );
};
// Pyramids ///
const answer5 = ( ) => {
    var l5 = document.getElementById("length5").value;
    var w5 = document.getElementById("width5").value;
    var h5 = document.getElementById("height5").value;
    var calculation = l5*w5 + 2*l5*h5;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const surfaceAreaPyramid = ( ) => {
    document.getElementById("demo5").innerHTML = answer5(  );
};
// VOL OF SPHERES

const answer6 = ( ) => {
    var r6 = document.getElementById("radius6").value;
    var calculation = 4*r6*r6*Math.PI;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const surfaceAreaSphere = ( ) => {
    document.getElementById("demo6").innerHTML = answer6(  );
};


