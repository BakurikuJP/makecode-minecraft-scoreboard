/**
 * Scoreboard Helper - MakeCode Extension
 * MinecraftのScoreboardを簡単に操作できる拡張機能
 * 
 * 使用方法:
 * - scoreboard.ts: コア機能（スコアボード操作）
 * - examples.ts: サンプルコード・チャットコマンド
 */

// ワールド開始時のセットアップ例
player.onChat("scoreboard_init", function () {
    // サンプル: "coins" objectiveを作成してサイドバーに表示
    scoreboard.createObjective("coins", "§6Coins")
    scoreboard.showOnSidebar("coins")
    player.say("Scoreboard initialized!")
})
