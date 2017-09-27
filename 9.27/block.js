var Block = function (position) {
    var image = getImagePath('block.png')

    var p = position
    
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    }

    o.kill = function () {
        o.lifes --
        if (o.lifes < 1) {
            o.alive = false
        }
    }



    o.collide = function (ball) {
                return o.alive && (rectIntersects(o,ball) || rectIntersects(ball,o))
            }



    return o
}
