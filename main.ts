let player_x = 2
let player_y = 2
let mode = 0
function handle_mode_selection(): boolean {
    
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        mode = 0
        return true
    }
    
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        mode = 1
        return true
    }
    
    return false
}

function update_player_position() {
    
    let gx = input.acceleration(Dimension.X)
    let gy = input.acceleration(Dimension.Y)
    if (gx < -150 && player_x > 0) {
        player_x -= 1
    } else if (gx > 150 && player_x < 4) {
        player_x += 1
    }
    
    if (gy < -150 && player_y > 0) {
        player_y -= 1
    } else if (gy > 150 && player_y < 4) {
        player_y += 1
    }
    
}

function render_player_mode() {
    led.plot(player_x, player_y)
    basic.pause(50)
    led.unplot(player_x, player_y)
}

function render_temperature_mode() {
    led.plotBarGraph(input.temperature(), 50)
}

while (true) {
    handle_mode_selection()
    if (mode == 1) {
        render_temperature_mode()
    } else {
        update_player_position()
        render_player_mode()
    }
    
}
