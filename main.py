player_x = 2
player_y = 2
mode = 0 

def handle_mode_selection():

    global mode
    
    if input.button_is_pressed(Button.A):
        basic.clear_screen()
        mode = 0
        return True
        
    if input.button_is_pressed(Button.B):
        basic.clear_screen()
        mode = 1
        return True
        
    return False

def update_player_position():

    global player_x, player_y
    
    gx = input.acceleration(Dimension.X)
    gy = input.acceleration(Dimension.Y)
    

    if gx < -150 and player_x > 0:
        player_x -= 1
    elif gx > 150 and player_x < 4:
        player_x += 1
    

    if gy < -150 and player_y > 0:
        player_y -= 1
    elif gy > 150 and player_y < 4:
        player_y += 1

def render_player_mode():
 
    led.plot(player_x, player_y)
    basic.pause(50)
    led.unplot(player_x, player_y)

def render_temperature_mode():

    led.plot_bar_graph(input.temperature(), 50)

while True:

    handle_mode_selection()
    
    if mode == 1:
        render_temperature_mode()
    else:
        update_player_position()
        render_player_mode()