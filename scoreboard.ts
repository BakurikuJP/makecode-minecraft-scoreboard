/**
 * Scoreboard Helper - Core Functions
 * MinecraftのScoreboardを簡単に操作するための名前空間
 */

//% block="Scoreboard"
//% color="#2ecc71"
//% icon="\uf0ce"
//% weight=100
namespace scoreboard {

    // 内部でobjectiveを追跡するMap
    let objectives: string[] = []

    // =============================================
    // Objective管理
    // =============================================

    /**
     * 新しいObjective（スコア追跡対象）を作成する
     * @param name Objectiveの内部名（英数字のみ推奨）
     * @param displayName ゲーム内での表示名
     */
    //% block="create objective %name with display name %displayName"
    //% name.defl="score"
    //% displayName.defl="Score"
    //% weight=100
    export function createObjective(name: string, displayName: string): void {
        player.execute(`scoreboard objectives add ${name} dummy "${displayName}"`)
        if (objectives.indexOf(name) === -1) {
            objectives.push(name)
        }
    }

    /**
     * Objectiveを削除する
     * @param name 削除するObjectiveの名前
     */
    //% block="remove objective %name"
    //% weight=95
    export function removeObjective(name: string): void {
        player.execute(`scoreboard objectives remove ${name}`)
        let idx = objectives.indexOf(name)
        if (idx !== -1) {
            objectives.splice(idx, 1)
        }
    }

    /**
     * Objectiveが存在するか確認する
     * @param name 確認するObjectiveの名前
     */
    //% block="objective %name exists"
    //% weight=90
    export function objectiveExists(name: string): boolean {
        return objectives.indexOf(name) !== -1
    }

    // =============================================
    // プレイヤースコア操作
    // =============================================

    /**
     * プレイヤーのスコアを設定する
     * @param playerName プレイヤー名（@a, @s, @p も可）
     * @param objective Objectiveの名前
     * @param value 設定する値
     */
    //% block="set %playerName 's %objective score to %value"
    //% playerName.defl="@s"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=85
    export function setScore(playerName: string, objective: string, value: number): void {
        player.execute(`scoreboard players set ${playerName} ${objective} ${value}`)
    }

    /**
     * プレイヤーのスコアに値を加算する
     * @param playerName プレイヤー名
     * @param objective Objectiveの名前
     * @param value 加算する値
     */
    //% block="add %value to %playerName 's %objective"
    //% value.defl=1
    //% playerName.defl="@s"
    //% objective.defl="score"
    //% weight=80
    export function addScore(playerName: string, objective: string, value: number): void {
        player.execute(`scoreboard players add ${playerName} ${objective} ${value}`)
    }

    /**
     * プレイヤーのスコアから値を減算する
     * @param playerName プレイヤー名
     * @param objective Objectiveの名前
     * @param value 減算する値
     */
    //% block="remove %value from %playerName 's %objective"
    //% value.defl=1
    //% playerName.defl="@s"
    //% objective.defl="score"
    //% weight=75
    export function removeScore(playerName: string, objective: string, value: number): void {
        player.execute(`scoreboard players remove ${playerName} ${objective} ${value}`)
    }

    /**
     * プレイヤーのスコアをリセットする
     * @param playerName プレイヤー名
     * @param objective Objectiveの名前
     */
    //% block="reset %playerName 's %objective score"
    //% playerName.defl="@s"
    //% objective.defl="score"
    //% weight=70
    export function resetScore(playerName: string, objective: string): void {
        player.execute(`scoreboard players reset ${playerName} ${objective}`)
    }

    /**
     * プレイヤーにランダムなスコアを設定する
     * @param playerName プレイヤー名
     * @param objective Objectiveの名前
     * @param min 最小値
     * @param max 最大値
     */
    //% block="set random score for %playerName 's %objective between %min and %max"
    //% playerName.defl="@s"
    //% objective.defl="score"
    //% min.defl=1
    //% max.defl=100
    //% weight=65
    export function setRandomScore(playerName: string, objective: string, min: number, max: number): void {
        player.execute(`scoreboard players random ${playerName} ${objective} ${min} ${max}`)
    }

    // =============================================
    // 表示設定
    // =============================================

    /**
     * Objectiveをサイドバーに表示する
     * @param objective 表示するObjectiveの名前
     * @param ascending 昇順で表示するか（trueで昇順、falseで降順）
     */
    //% block="show %objective on sidebar || ascending %ascending"
    //% objective.defl="score"
    //% ascending.defl=false
    //% expandableArgumentMode="toggle"
    //% weight=60
    export function showOnSidebar(objective: string, ascending: boolean = false): void {
        let order = ascending ? "ascending" : "descending"
        player.execute(`scoreboard objectives setdisplay sidebar ${objective} ${order}`)
    }

    /**
     * Objectiveをプレイヤー名の下に表示する
     * @param objective 表示するObjectiveの名前
     */
    //% block="show %objective below player name"
    //% objective.defl="score"
    //% weight=55
    export function showBelowName(objective: string): void {
        player.execute(`scoreboard objectives setdisplay belowname ${objective}`)
    }

    /**
     * Objectiveをプレイヤーリストに表示する
     * @param objective 表示するObjectiveの名前
     */
    //% block="show %objective on player list"
    //% objective.defl="score"
    //% weight=50
    export function showOnList(objective: string): void {
        player.execute(`scoreboard objectives setdisplay list ${objective}`)
    }

    /**
     * 指定した表示位置をクリアする
     * @param slot 表示位置（sidebar, belowname, list）
     */
    //% block="clear %slot display"
    //% slot.defl="sidebar"
    //% weight=45
    export function clearDisplay(slot: string): void {
        player.execute(`scoreboard objectives setdisplay ${slot}`)
    }

    // =============================================
    // 便利機能（自分自身用のショートカット）
    // =============================================

    /**
     * 自分のスコアを設定する
     * @param objective Objectiveの名前
     * @param value 設定する値
     */
    //% block="set my %objective score to %value"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=40
    export function setMyScore(objective: string, value: number): void {
        setScore("@s", objective, value)
    }

    /**
     * 自分のスコアに値を加算する
     * @param objective Objectiveの名前
     * @param value 加算する値
     */
    //% block="add %value to my %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=35
    export function addToMyScore(objective: string, value: number): void {
        addScore("@s", objective, value)
    }

    /**
     * 自分のスコアから値を減算する
     * @param objective Objectiveの名前
     * @param value 減算する値
     */
    //% block="remove %value from my %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=30
    export function removeFromMyScore(objective: string, value: number): void {
        removeScore("@s", objective, value)
    }

    /**
     * 自分のスコアをリセットする
     * @param objective Objectiveの名前
     */
    //% block="reset my %objective score"
    //% objective.defl="score"
    //% weight=25
    export function resetMyScore(objective: string): void {
        resetScore("@s", objective)
    }

    // =============================================
    // 全プレイヤー操作
    // =============================================

    /**
     * 全プレイヤーのスコアを設定する
     * @param objective Objectiveの名前
     * @param value 設定する値
     */
    //% block="set all players' %objective score to %value"
    //% objective.defl="score"
    //% value.defl=0
    //% weight=20
    export function setAllScores(objective: string, value: number): void {
        setScore("@a", objective, value)
    }

    /**
     * 全プレイヤーのスコアをリセットする
     * @param objective Objectiveの名前
     */
    //% block="reset all players' %objective score"
    //% objective.defl="score"
    //% weight=15
    export function resetAllScores(objective: string): void {
        resetScore("@a", objective)
    }

    /**
     * 全プレイヤーのスコアに値を加算する
     * @param objective Objectiveの名前
     * @param value 加算する値
     */
    //% block="add %value to all players' %objective"
    //% value.defl=1
    //% objective.defl="score"
    //% weight=10
    export function addToAllScores(objective: string, value: number): void {
        addScore("@a", objective, value)
    }

    // =============================================
    // スコア演算（高度な機能）
    // =============================================

    /**
     * スコア演算を実行する（上級者向け）
     * @param targetPlayer 対象プレイヤー
     * @param targetObjective 対象Objective
     * @param operation 演算子（+=, -=, *=, /=, %=, =, <, >, ><）
     * @param sourcePlayer ソースプレイヤー
     * @param sourceObjective ソースObjective
     */
    //% block="operation: %targetPlayer %targetObjective %operation %sourcePlayer %sourceObjective"
    //% weight=5
    //% advanced=true
    export function operation(
        targetPlayer: string,
        targetObjective: string,
        operation: string,
        sourcePlayer: string,
        sourceObjective: string
    ): void {
        player.execute(`scoreboard players operation ${targetPlayer} ${targetObjective} ${operation} ${sourcePlayer} ${sourceObjective}`)
    }

    // =============================================
    // ユーティリティ
    // =============================================

    /**
     * コマンド出力を非表示にする（静かなモード）
     */
    //% block="disable command output"
    //% weight=3
    //% advanced=true
    export function disableOutput(): void {
        player.execute("gamerule commandblockoutput false")
        player.execute("gamerule sendcommandfeedback false")
    }

    /**
     * コマンド出力を表示する
     */
    //% block="enable command output"
    //% weight=2
    //% advanced=true
    export function enableOutput(): void {
        player.execute("gamerule commandblockoutput true")
        player.execute("gamerule sendcommandfeedback true")
    }
}
