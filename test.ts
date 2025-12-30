/**
 * Scoreboard Helper - Test file
 */

// テスト: Objective作成
function testCreateObjective() {
    scoreboard.createObjective("test_obj", "Test Objective")
}

// テスト: スコア設定と変更
function testScoreOperations() {
    scoreboard.setMyScore("test_obj", 100)
    scoreboard.addToMyScore("test_obj", 50)
    scoreboard.removeFromMyScore("test_obj", 25)
}

// テスト: 表示設定
function testDisplay() {
    scoreboard.showOnSidebar("test_obj")
    scoreboard.showBelowName("test_obj")
    scoreboard.showOnList("test_obj")
    scoreboard.clearDisplay("sidebar")
}
