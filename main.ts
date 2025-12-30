// Scoreboard Helper - Chat Commands

player.onChat("sb_create", function (name, display) {
    if (name) {
        player.execute("scoreboard objectives add " + name + " dummy " + (display ? display : name))
        player.say("Scoreboard created: " + name)
    } else {
        player.execute("scoreboard objectives add score dummy Score")
        player.say("Scoreboard created: score")
    }
})

player.onChat("sb_show", function (name) {
    let obj = name ? "" + name : "score"
    player.execute("scoreboard objectives setdisplay sidebar " + obj)
    player.say("Showing on sidebar: " + obj)
})

player.onChat("sb_set", function (value) {
    let v = value ? value : 0
    player.execute("scoreboard players set @s score " + v)
    player.say("Score set to " + v)
})

player.onChat("sb_add", function (value) {
    let v = value ? value : 1
    player.execute("scoreboard players add @s score " + v)
    player.say("Added " + v + " to score")
})

player.onChat("sb_help", function () {
    player.say("=== Scoreboard Commands ===")
    player.say("sb_create [name] [display] - Create objective")
    player.say("sb_show [name] - Show on sidebar")
    player.say("sb_set [value] - Set score")
    player.say("sb_add [value] - Add to score")
})
