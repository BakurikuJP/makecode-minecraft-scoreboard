/**
 * Scoreboard Helper - Core Functions
 */

//% block="Scoreboard"
//% color="#2ecc71"
//% weight=100
namespace scoreboard {

    /**
     * 新しいObjectiveを作成する
     */
    //% block="create objective %name with display name %displayName"
    //% name.defl="score"
    //% displayName.defl="Score"
    //% weight=100
    export function createObjective(name: string, displayName: string): void {
        player.execute("scoreboard objectives add " + name + " dummy " + displayName)
    }

    /**
     * Objectiveをサイドバーに表示する
     */
    //% block="show %objective on sidebar"
    //% objective.defl="score"
    //% weight=90
    export function showOnSidebar(objective: string): void {
        player.execute("scoreboard objectives setdisplay sidebar " + objective)
    }

    /**
     * 自分のスコアを設定する
     */
    //% block="set my %objective score to %value"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=80
    export function setMyScore(objective: string, value: number): void {
        player.execute("scoreboard players set @s " + objective + " " + value)
    }

    /**
     * 自分のスコアに値を加算する
     */
    //% block="add %value to my %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=70
    export function addToMyScore(objective: string, value: number): void {
        player.execute("scoreboard players add @s " + objective + " " + value)
    }

    /**
     * コマンド出力を非表示にする
     */
    //% block="disable command output"
    //% weight=10
    export function disableOutput(): void {
        player.execute("gamerule commandblockoutput false")
        player.execute("gamerule sendcommandfeedback false")
    }
}
