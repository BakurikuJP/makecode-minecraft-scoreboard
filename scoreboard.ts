/**
 * Scoreboard Helper - Core Functions
 */
namespace scoreboard {

    /**
     * 新しいObjectiveを作成する
     */
    export function createObjective(name: string, displayName: string): void {
        player.execute("scoreboard objectives add " + name + " dummy " + displayName)
    }

    /**
     * Objectiveをサイドバーに表示する
     */
    export function showOnSidebar(objective: string): void {
        player.execute("scoreboard objectives setdisplay sidebar " + objective)
    }

    /**
     * 自分のスコアを設定する
     */
    export function setMyScore(objective: string, value: number): void {
        player.execute("scoreboard players set @s " + objective + " " + value)
    }

    /**
     * 自分のスコアに値を加算する
     */
    export function addToMyScore(objective: string, value: number): void {
        player.execute("scoreboard players add @s " + objective + " " + value)
    }

    /**
     * コマンド出力を非表示にする
     */
    export function disableOutput(): void {
        player.execute("gamerule commandblockoutput false")
        player.execute("gamerule sendcommandfeedback false")
    }
}
