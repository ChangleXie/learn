var Paddle = function () {
    var image = getImagePath('paddle.png')
    var o = {
        image: image,
        x: 300,
        y: 400,
        speed: 10,
    }
    var paddle = o

    o.move = function (x) {
        if (x < 0 ) {
            x = 0
        }else if (x + o.image.width >  document.getElementById('id-canvas').width) {
            x = document.getElementById('id-canvas').width - o.image.width
        }
        o.x = x
    }
    paddle.moveLeft = function () {
        o.move(o.x - o.speed)
    }
    paddle.moveRight = function () {
        o.move(o.x + o.speed)
    }

    var aInb = function (x,x1,x2) {
        return x >= x1 && x <= x2
    }

    o.collide = function (ball) {
        var a = o
        var b = ball
        if (aInb(a.x, b.x, b.x + b.image.width) || aInb(b.x, a.x, a.x + a.image.width)) {
            if (aInb(a.y, b.y, b.y + b.image.height) || aInb(b.y, a.y, a.y + a.image.height)) {
                return true
            }
        }
        return false
    }

    return o
}
