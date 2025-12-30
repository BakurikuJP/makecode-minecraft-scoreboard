namespace player {
    /**
     * Create a new scoreboard objective
     * @param name the internal name of the objective
     * @param displayName the display name shown in game
     */
    //% group="Scoreboard"
    //% blockId=scoreboardCreateObjective
    //% block="create scoreboard %name with display %displayName"
    //% name.defl="score"
    //% displayName.defl="Score"
    //% weight=100
    export function createScoreboard(name: string, displayName: string): void {
        player.execute("scoreboard objectives add " + name + " dummy " + displayName)
    }

    /**
     * Show objective on sidebar
     * @param objective the objective name to display
     */
    //% group="Scoreboard"
    //% blockId=scoreboardShowSidebar
    //% block="show scoreboard %objective on sidebar"
    //% objective.defl="score"
    //% weight=90
    export function showScoreboardSidebar(objective: string): void {
        player.execute("scoreboard objectives setdisplay sidebar " + objective)
    }

    /**
     * Set score for self
     * @param objective the objective name
     * @param value the score value
     */
    //% group="Scoreboard"
    //% blockId=scoreboardSetMyScore
    //% block="set my %objective score to %value"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=80
    export function setMyScoreboard(objective: string, value: number): void {
        player.execute("scoreboard players set @s " + objective + " " + value)
    }

    /**
     * Add to score for self
     * @param objective the objective name
     * @param value the value to add
     */
    //% group="Scoreboard"
    //% blockId=scoreboardAddMyScore
    //% block="add %value to my %objective score"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=70
    export function addMyScoreboard(objective: string, value: number): void {
        player.execute("scoreboard players add @s " + objective + " " + value)
    }
}
