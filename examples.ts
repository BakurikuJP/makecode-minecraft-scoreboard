/**
 * Scoreboard Helper - Examples
 * チャットコマンドを使ったスコアボードのデモ機能
 */

// =============================================
// 設定変数（ユーザーがカスタマイズ可能）
// =============================================

// 現在使用中のObjective名（デフォルト値）
let currentObjective = "score"
let currentDisplayName = "Score"

// =============================================
// 基本デモ: スコアシステム
// =============================================

/**
 * スコアボードをセットアップする
 * チャットで "setup" と入力
 */
player.onChat("setup", function () {
    // コマンド出力を静かにする
    scoreboard.disableOutput()
    
    // objectiveを作成
    scoreboard.createObjective(currentObjective, currentDisplayName)
    scoreboard.showOnSidebar(currentObjective)
    
    // 初期スコアを0に
    scoreboard.setMyScore(currentObjective, 0)
    
    player.say("Scoreboard setup complete!")
})

/**
 * カスタム名でセットアップ
 * チャットで "setup_custom coins Coins" のように入力
 */
player.onChat("setup_custom", function (objName, dispName) {
    if (objName) {
        currentObjective = "" + objName
    }
    if (dispName) {
        currentDisplayName = "" + dispName
    }
    scoreboard.disableOutput()
    scoreboard.createObjective(currentObjective, currentDisplayName)
    scoreboard.showOnSidebar(currentObjective)
    scoreboard.setMyScore(currentObjective, 0)
    player.say("Created: " + currentObjective)
})

/**
 * ポイントを獲得する
 */
player.onChat("add", function (num) {
    let amount = 10
    if (num > 0) {
        amount = num
    }
    scoreboard.addToMyScore(currentObjective, amount)
    player.say("+" + amount + " Points!")
})

/**
 * ポイントを失う
 */
player.onChat("lose", function (num) {
    let amount = 5
    if (num > 0) {
        amount = num
    }
    scoreboard.removeFromMyScore(currentObjective, amount)
    player.say("-" + amount + " Points")
})

/**
 * ポイントをリセット
 */
player.onChat("reset", function () {
    scoreboard.setMyScore(currentObjective, 0)
    player.say("Points reset to 0")
})

/**
 * サイドバー表示に切り替え
 */
player.onChat("sidebar", function () {
    scoreboard.showOnSidebar(currentObjective)
    player.say("Showing on sidebar")
})

/**
 * 名前の下に表示
 */
player.onChat("belowname", function () {
    scoreboard.showBelowName(currentObjective)
    player.say("Showing below names")
})

/**
 * スコアボード表示を消す
 */
player.onChat("hide", function () {
    scoreboard.clearDisplay("sidebar")
    scoreboard.clearDisplay("belowname")
    scoreboard.clearDisplay("list")
    player.say("Scoreboard hidden")
})

/**
 * 全員にボーナスを配布
 */
player.onChat("bonus", function (amount) {
    let bonus = 50
    if (amount > 0) {
        bonus = amount
    }
    scoreboard.addToAllScores(currentObjective, bonus)
    player.say("BONUS! Everyone gets +" + bonus + " points!")
})

/**
 * 全員のスコアをリセット
 */
player.onChat("reset_all", function () {
    scoreboard.resetAllScores(currentObjective)
    player.say("All scores have been reset!")
})

/**
 * ヘルプを表示
 */
player.onChat("sb_help", function () {
    player.say("=== Scoreboard Help ===")
    player.say("setup - Initialize scoreboard")
    player.say("setup_custom [name] [display] - Custom name")
    player.say("add [num] - Add points")
    player.say("lose [num] - Lose points")
    player.say("reset - Reset your score")
    player.say("sidebar / belowname / hide - Display")
})
