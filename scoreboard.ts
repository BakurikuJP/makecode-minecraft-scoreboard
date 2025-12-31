/**
 * Score System Helper - Custom Blocks
 */

//% block="Score System"
//% color="#16a085"
//% icon="\uf0ae"
namespace scoreSystem {

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
     * Sort order options for scoreboard display
     */
    export enum SortOrder {
        //% block="descending"
        Descending,
        //% block="ascending"
        Ascending
    }

    /**
     * Operation types for score calculations
     */
    export enum ScoreOperation {
        //% block="+="
        Add,
        //% block="-="
        Subtract,
        //% block="*="
        Multiply,
        //% block="/="
        Divide,
        //% block="%="
        Modulo,
        //% block="="
        Assign,
        //% block="<"
        Min,
        //% block=">"
        Max,
        //% block="><"
        Swap
    }

    // ==================== OBJECTIVES ====================

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
     * Remove a scoreboard objective
     * @param name the internal name of the objective to remove
     */
    //% block="remove objective %name"
    //% name.defl="score"
    //% weight=99
    export function removeObjective(name: string): void {
        player.execute("scoreboard objectives remove " + name)
    }

    /**
     * List all scoreboard objectives
     */
    //% block="list all objectives"
    //% weight=98
    export function listObjectives(): void {
        player.execute("scoreboard objectives list")
    }

    /**
     * Show objective on the specified display slot with sort order
     * @param objective the objective name to display
     * @param slot the display location
     * @param order the sort order
     */
    //% block="show %objective on %slot order %order"
    //% objective.defl="score"
    //% weight=90
    export function showScoreboard(objective: string, slot: DisplaySlot, order: SortOrder): void {
        let slotName = ""
        let orderName = ""
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
        switch (order) {
            case SortOrder.Descending:
                orderName = "descending"
                break
            case SortOrder.Ascending:
                orderName = "ascending"
                break
        }
        player.execute("scoreboard objectives setdisplay " + slotName + " " + objective + " " + orderName)
    }

    // ==================== PLAYERS (SELF) ====================

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
    //% weight=79
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
    //% weight=78
    export function removeFromMyScore(objective: string, value: number): void {
        player.execute("scoreboard players remove @s " + objective + " " + value)
    }

    /**
     * Reset score for self
     * @param objective the objective name
     */
    //% block="reset my %objective score"
    //% objective.defl="score"
    //% weight=77
    export function resetMyScore(objective: string): void {
        player.execute("scoreboard players reset @s " + objective)
    }

    /**
     * Set random score for self
     * @param objective the objective name
     * @param min minimum value
     * @param max maximum value
     */
    //% block="set my %objective score random from %min to %max"
    //% objective.defl="score"
    //% min.defl=1
    //% max.defl=10
    //% weight=76
    export function randomMyScore(objective: string, min: number, max: number): void {
        player.execute("scoreboard players random @s " + objective + " " + min + " " + max)
    }

    /**
     * List all scores for self
     */
    //% block="list my scores"
    //% weight=75
    export function listMyScores(): void {
        player.execute("scoreboard players list @s")
    }

    // ==================== PLAYERS (SELECTOR) ====================

    /**
     * Set score for target
     * @param selector the target selector
     * @param objective the objective name
     * @param value the score value
     */
    //% block="set %selector %objective score to %value"
    //% selector.defl="@a"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=70
    export function setScore(selector: string, objective: string, value: number): void {
        player.execute("scoreboard players set " + selector + " " + objective + " " + value)
    }

    /**
     * Add to score for target
     * @param selector the target selector
     * @param objective the objective name
     * @param value the value to add
     */
    //% block="add %value to %selector %objective"
    //% selector.defl="@a"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=69
    export function addScore(selector: string, objective: string, value: number): void {
        player.execute("scoreboard players add " + selector + " " + objective + " " + value)
    }

    /**
     * Remove from score for target
     * @param selector the target selector
     * @param objective the objective name
     * @param value the value to remove
     */
    //% block="remove %value from %selector %objective"
    //% selector.defl="@a"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=68
    export function removeScore(selector: string, objective: string, value: number): void {
        player.execute("scoreboard players remove " + selector + " " + objective + " " + value)
    }

    /**
     * Reset score for target
     * @param selector the target selector
     * @param objective the objective name
     */
    //% block="reset %selector %objective score"
    //% selector.defl="@a"
    //% objective.defl="score"
    //% weight=67
    export function resetScore(selector: string, objective: string): void {
        player.execute("scoreboard players reset " + selector + " " + objective)
    }

    /**
     * Set random score for target
     * @param selector the target selector
     * @param objective the objective name
     * @param min minimum value
     * @param max maximum value
     */
    //% block="set %selector %objective score random from %min to %max"
    //% selector.defl="@a"
    //% objective.defl="score"
    //% min.defl=1
    //% max.defl=10
    //% weight=66
    export function randomScore(selector: string, objective: string, min: number, max: number): void {
        player.execute("scoreboard players random " + selector + " " + objective + " " + min + " " + max)
    }

    /**
     * Test if score is in range
     * @param selector the target selector
     * @param objective the objective name
     * @param min minimum value
     * @param max maximum value
     */
    //% block="test %selector %objective score between %min and %max"
    //% selector.defl="@s"
    //% objective.defl="score"
    //% min.defl=0
    //% max.defl=10
    //% weight=65
    export function testScore(selector: string, objective: string, min: number, max: number): void {
        player.execute("scoreboard players test " + selector + " " + objective + " " + min + " " + max)
    }

    /**
     * List all scores for target
     * @param selector the target selector
     */
    //% block="list %selector scores"
    //% selector.defl="@a"
    //% weight=64
    export function listScores(selector: string): void {
        player.execute("scoreboard players list " + selector)
    }

    // ==================== OPERATIONS ====================

    /**
     * Perform operation between two scores
     * @param selector1 first target selector
     * @param objective1 first objective name
     * @param operation the operation to perform
     * @param selector2 second target selector
     * @param objective2 second objective name
     */
    //% block="%selector1 %objective1 %operation %selector2 %objective2"
    //% selector1.defl="@s"
    //% objective1.defl="score"
    //% selector2.defl="@s"
    //% objective2.defl="score2"
    //% weight=50
    //% inlineInputMode=inline
    export function operationScore(selector1: string, objective1: string, operation: ScoreOperation, selector2: string, objective2: string): void {
        let op = ""
        switch (operation) {
            case ScoreOperation.Add:
                op = "+="
                break
            case ScoreOperation.Subtract:
                op = "-="
                break
            case ScoreOperation.Multiply:
                op = "*="
                break
            case ScoreOperation.Divide:
                op = "/="
                break
            case ScoreOperation.Modulo:
                op = "%="
                break
            case ScoreOperation.Assign:
                op = "="
                break
            case ScoreOperation.Min:
                op = "<"
                break
            case ScoreOperation.Max:
                op = ">"
                break
            case ScoreOperation.Swap:
                op = "><"
                break
        }
        player.execute("scoreboard players operation " + selector1 + " " + objective1 + " " + op + " " + selector2 + " " + objective2)
    }
}
