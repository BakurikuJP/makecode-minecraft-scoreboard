/**
 * Score System Helper - Custom Blocks
 */

//% block="Score System"
//% color="#16a085"
//% icon="\uf0ae"
namespace scoreSystem {

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
     * Display slot options for scoreboard
     */
    export enum DisplaySlot {
        //% block="sidebar"
        Sidebar,
        //% block="below name"
        BelowName,
        //% block="player list"
        List
    }

    /**
     * Show objective on the specified display slot
     * @param objective the objective name to display
     * @param slot the display location
     */
    //% block="show %objective on %slot"
    //% objective.defl="score"
    //% weight=90
    export function showScoreboard(objective: string, slot: DisplaySlot): void {
        let slotName = ""
        switch (slot) {
            case DisplaySlot.Sidebar:
                slotName = "sidebar"
                break
            case DisplaySlot.BelowName:
                slotName = "belowname"
                break
            case DisplaySlot.List:
                slotName = "list"
                break
        }
        player.execute("scoreboard objectives setdisplay " + slotName + " " + objective)
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
