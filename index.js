// Your code here
class Polygon {
    constructor(arrInt){
        this.sides = arrInt
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((acc, cur) => acc + cur)
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.sides[0] + this.sides[1] > this.sides[2]){
            if(this.sides[1] + this.sides[2] > this.sides[0]){
                if(this.sides[2] + this.sides[0] > this.sides[1]){
                    return true
                }
            } 
        }
        return false
    }
}

class Square extends Polygon {
    get isValid(){
        if((this.sides[0] == this.sides[1]) && (this.sides[1] == this.sides[2]) && (this.sides[2] == this.sides[3])){
            return true
        } else {
            return false
        } 
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}