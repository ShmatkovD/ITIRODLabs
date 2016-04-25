class Vector {
    constructor (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    plus (other){
        if (other instanceof Vector) {
            var x = this.x + other.x;
            var y = this.y + other.y;
            var z = this.z + other.z;
            return new Vector(x, y, z);
        }
    }

    scalar (other) {
        if (other instanceof  Vector) {
            var x = this.x * other.x;
            var y = this.y * other.y;
            var z = this.z * other.z;
            return new Vector(x, y, z);
        }
    }

    toString () {
        return "<" + [this.x, this.y, this.z].join(', ') + ">";
    }

    valueOf () {
        return 1;
    }
}

var vect = new Vector(1, 2, 3);
alert(vect.length);
alert(vect);
alert(vect.toString());
if (vect === 1){
    alert("ok");
}
else {
    alert("oops");
}
var vect2 = new Vector(2, 3, 4);
alert(vect.plus(vect2));
alert(vect.scalar(vect2));