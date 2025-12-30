/**
 * Scoreboard Helper - Examples
 * チャットコマンドを使ったスコアボードのデモ機能
 */

// =============================================
// 設定変数（ユーザーがカスタマイズ可能）
// =============================================

// 現在使用中のObjective名（デフォルト値）
let currentObjective = "score"
let currentDisplayName = "§b★ Score ★"

// =============================================
// 基本デモ: スコアシステム
// =============================================

/**
 * スコアボードをセットアップする（カスタム名対応）
 * チャットで "setup" と入力
 * または "setup <objective名> <表示名>" で指定
 * 例: setup coins Coins
 */
player.onChat("setup", function (objectiveName: string, displayName: string) {
    // 引数があれば設定を更新
    if (objectiveName && objectiveName.length > 0) {
        currentObjective = objectiveName
    }
    if (displayName && displayName.length > 0) {
        currentDisplayName = displayName
    }
    
    // コマンド出力を静かにする
    scoreboard.disableOutput()
    
    // objectiveを作成
    scoreboard.createObjective(currentObjective, currentDisplayName)
    scoreboard.showOnSidebar(currentObjective)
    
    // 初期スコアを0に
    scoreboard.setMyScore(currentObjective, 0)
    
    player.say("§aScoreboard setup complete!")
    player.say("§7Objective: " + currentObjective)
    player.say("§7Commands: add, lose, reset, check")
})

/**
 * ポイントを獲得する
 * チャットで "add" と入力（第2引数で獲得量指定可）
 */
player.onChat("add", function (num) {
    let amount = num > 0 ? num : 10
    scoreboard.addToMyScore(currentObjective, amount)
    player.say("§a+" + amount + " Points!")
})

/**
 * ポイントを失う
 * チャットで "lose" と入力（第2引数で失う量指定可）
 */
player.onChat("lose", function (num) {
    let amount = num > 0 ? num : 5
    scoreboard.removeFromMyScore(currentObjective, amount)
    player.say("§c-" + amount + " Points...")
})

/**
 * ポイントをリセット
 * チャットで "reset" と入力
 */
player.onChat("reset", function () {
    scoreboard.setMyScore(currentObjective, 0)
    player.say("§ePoints reset to 0")
})

/**
 * 現在のポイントを確認
 * チャットで "check" と入力
 */
player.onChat("check", function () {
    player.say("§bCheck the sidebar for your score!")
})

// =============================================
// 高度なデモ: コインシステム
// =============================================

/**
 * コインシステムをセットアップ
 * チャットで "coins_setup" と入力
 */
player.onChat("coins_setup", function () {
    scoreboard.disableOutput()
    scoreboard.createObjective("coins", "§6💰 Coins")
    scoreboard.showOnSidebar("coins")
    scoreboard.setAllScores("coins", 100)  // 全員に100コイン
    player.say("§6Coin system ready! Everyone starts with 100 coins.")
})

/**
 * コインを稼ぐ（ランダム額）
 * チャットで "earn" と入力
 */
player.onChat("earn", function () {
    scoreboard.setRandomScore("@s", "coins", 1, 50)
    player.say("§6You earned some coins! Check sidebar.")
})

/**
 * ショップでアイテムを購入（コインを消費）
 * チャットで "buy" と入力して第2引数でコスト指定
 */
player.onChat("buy", function (cost) {
    let itemCost = cost > 0 ? cost : 25
    scoreboard.removeFromMyScore("coins", itemCost)
    player.say("§ePurchased item for " + itemCost + " coins!")
})

// =============================================
// マルチプレイヤー対応機能
// =============================================

/**
 * 全員にボーナスを配布
 * チャットで "bonus" と入力
 */
player.onChat("bonus", function (amount) {
    let bonus = amount > 0 ? amount : 50
    scoreboard.addToAllScores(currentObjective, bonus)
    player.say("§a§lBONUS! Everyone gets +" + bonus + " points!")
})

/**
 * 全員のスコアをリセット
 * チャットで "reset_all" と入力
 */
player.onChat("reset_all", function () {
    scoreboard.resetAllScores(currentObjective)
    player.say("§c§lAll scores have been reset!")
})

// =============================================
// 表示切替デモ
// =============================================

/**
 * サイドバー表示に切り替え
 * チャットで "sidebar" と入力
 */
player.onChat("sidebar", function () {
    scoreboard.showOnSidebar(currentObjective)
    player.say("§7Showing on sidebar")
})

/**
 * 名前の下に表示に切り替え
 * チャットで "belowname" と入力
 */
player.onChat("belowname", function () {
    scoreboard.showBelowName(currentObjective)
    player.say("§7Showing below player names")
})

/**
 * スコアボード表示を消す
 * チャットで "hide" と入力
 */
player.onChat("hide", function () {
    scoreboard.clearDisplay("sidebar")
    scoreboard.clearDisplay("belowname")
    scoreboard.clearDisplay("list")
    player.say("§7Scoreboard hidden")
})

// =============================================
// ヘルプ
// =============================================

/**
 * ヘルプを表示
 * チャットで "sb_help" と入力
 */
player.onChat("sb_help", function () {
    player.say("§l§6=== Scoreboard Help ===")
    player.say("§eBasic Commands:")
    player.say("§7  setup - Initialize scoreboard")
    player.say("§7  add [num] - Add points")
    player.say("§7  lose [num] - Lose points")
    player.say("§7  reset - Reset your score")
    player.say("§eDisplay Commands:")
    player.say("§7  sidebar - Show on sidebar")
    player.say("§7  belowname - Show below names")
    player.say("§7  hide - Hide scoreboard")
    player.say("§eCoin Demo:")
    player.say("§7  coins_setup - Setup coin system")
    player.say("§7  earn - Earn random coins")
    player.say("§7  buy [cost] - Spend coins")
})
