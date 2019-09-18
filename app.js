////// I was absent from quiz 3  and I have not yet gotten the chance to finish quiz 3

// QUIZ 5

const robG = {
name: "Robert Grande",
mass: "78",
height: "1.69",

getBMI: function(){
    return this.mass / (this.height * this.height);

}
}

// console.log(robG.getBMI())

const dejonK = {
    name: "Dejon Kurti",
    mass: "110",
    height: "1.95",
    
    getBMI: function(){
        return this.mass / (this.height * this.height);
    
    }
    }
    
    // console.log(dejonK.getBMI())

    if(robG.getBMI() > dejonK.getBMI()) {

    console.log("ROB IS BEEG")

    }else if(robG.getBMI() < dejonK.getBMI())
    console.log("DEJON IS BEEG")

    else {
    console.log( "BOTH ARE BEEG")

    }

    console.log(robG.name, robG.getBMI())
    console.log(dejonK.name, robG.getBMI())


