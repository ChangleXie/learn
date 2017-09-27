var XclGame = function (fps) {
    var g = {
        actions: {},
        keydowns:{},
    }

    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.drawImage = function (x) {
        context.drawImage(x.image, x.x, x.y)
    }

    document.getElementById('input-speed').addEventListener('input',function (event) {
            var k = event.target
            log(event, k.value)
            window.fps = Number(k.value)
        })



    window.addEventListener('keydown', function(event) {
        // log(event)
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })


    g.registerAction = function (key, callback) {
        
        g.actions[key] = callback
    }
    window.fps = 30
    var runloop = function () {
        var actions = Object.keys(g.actions)

        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }

        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
        setTimeout(function () {

            runloop()

        },1000/window.fps)
    }
    setTimeout(function () {
        runloop()
    },1000/fps)


    return g

}
