var Ball = function () {
    var image = getImagePath('ball.png')
    var o = {
        image: image,
        x: 150,
        y: 180,
        xspeed: 8,
        yspeed: 8,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }

    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x + o.image.width > document.getElementById('id-canvas').width) {
                o.xspeed *= -1
            }
            if (o.y < 0 || o.y + o.image.height > document.getElementById('id-canvas').height) {
                o.yspeed *= -1
            }

            o.x += o.xspeed
            o.y += o.yspeed
        }
    }

    o.haspoint = function (x,y) {
        return (x > o.x && x < o.x + o.image.width) && (y > o.y && y < o.y + o.image.height)
    }

    return o
}
