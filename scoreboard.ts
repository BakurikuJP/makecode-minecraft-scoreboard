/**
 * Scoreboard Helper - Custom Blocks
 */

//% block="スコアボード"
//% color="#27ae60"
//% icon="\uf0ce"
//% weight=200
namespace scoreboardHelper {

    /**
     * Create a new scoreboard objective
     * @param name the internal name of the objective
     * @param displayName the display name shown in game
     */
    //% block="create objective %name with display %displayName"
    //% name.defl="score"
    //% displayName.defl="Score"
    //% weight=100
    export function createObjective(name: string, displayName: string): void {
        player.execute("scoreboard objectives add " + name + " dummy " + displayName)
    }

    /**
     * Show objective on sidebar
     * @param objective the objective name to display
     */
    //% block="show %objective on sidebar"
    //% objective.defl="score"
    //% weight=90
    export function showOnSidebar(objective: string): void {
        player.execute("scoreboard objectives setdisplay sidebar " + objective)
    }

    /**
     * Set score for self
     * @param objective the objective name
     * @param value the score value
     */
    //% block="set my %objective score to %value"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=80
    export function setMyScore(objective: string, value: number): void {
        player.execute("scoreboard players set @s " + objective + " " + value)
    }

    /**
     * Add to score for self
     * @param objective the objective name
     * @param value the value to add
     */
    //% block="add %value to my %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=70
    export function addToMyScore(objective: string, value: number): void {
        player.execute("scoreboard players add @s " + objective + " " + value)
    }

    /**
     * Remove from score for self
     * @param objective the objective name
     * @param value the value to remove
     */
    //% block="remove %value from my %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=60
    export function removeFromMyScore(objective: string, value: number): void {
        player.execute("scoreboard players remove @s " + objective + " " + value)
    }

    /**
     * Reset score for self
     * @param objective the objective name
     */
    //% block="reset my %objective score"
    //% objective.defl="score"
    //% weight=50
    export function resetMyScore(objective: string): void {
        player.execute("scoreboard players reset @s " + objective)
    }
}
