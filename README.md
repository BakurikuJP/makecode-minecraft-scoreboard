# Scoreboard Helper

MakeCode for Minecraft で Scoreboard（スコアボード）を簡単に使えるようにする拡張機能です。

## 🎯 特徴

- コマンドを覚えなくても簡単にスコアボードが使える
- MakeCode のブロックエディタ対応
- 日本語コメント付きの TypeScript コード

## 📦 インストール

1. [MakeCode for Minecraft](https://minecraft.makecode.com/) を開く
2. 「Import」→「Import URL」を選択
3. このリポジトリの URL を入力

## 🎮 使い方

### 基本的な使い方

```typescript
// セットアップ: Objectiveを作成してサイドバーに表示
scoreboard.createObjective("points", "Points");
scoreboard.showOnSidebar("points");

// 自分のスコアを設定
scoreboard.setMyScore("points", 100);

// スコアを加算
scoreboard.addToMyScore("points", 10);

// スコアを減算
scoreboard.removeFromMyScore("points", 5);
```

### 提供されるブロック

| ブロック                                                  | 説明                   |
| --------------------------------------------------------- | ---------------------- |
| `create objective [name] with display name [displayName]` | Objective を作成       |
| `remove objective [name]`                                 | Objective を削除       |
| `set [player]'s [objective] score to [value]`             | スコアを設定           |
| `add [value] to [player]'s [objective]`                   | スコアを加算           |
| `remove [value] from [player]'s [objective]`              | スコアを減算           |
| `show [objective] on sidebar`                             | サイドバーに表示       |
| `show [objective] below player name`                      | プレイヤー名の下に表示 |
| `clear [slot] display`                                    | 表示をクリア           |

### 自分用ショートカット

| ブロック                              | 説明                   |
| ------------------------------------- | ---------------------- |
| `set my [objective] score to [value]` | 自分のスコアを設定     |
| `add [value] to my [objective]`       | 自分のスコアに加算     |
| `remove [value] from my [objective]`  | 自分のスコアから減算   |
| `reset my [objective] score`          | 自分のスコアをリセット |

### 全プレイヤー操作

| ブロック                                        | 説明                   |
| ----------------------------------------------- | ---------------------- |
| `set all players' [objective] score to [value]` | 全員のスコアを設定     |
| `add [value] to all players' [objective]`       | 全員のスコアに加算     |
| `reset all players' [objective] score`          | 全員のスコアをリセット |

## 📝 デモコマンド

ゲーム内でチャットに入力して試せます：

- `setup` - スコアボードをセットアップ
- `add [数]` - ポイントを追加（デフォルト: 10）
- `lose [数]` - ポイントを失う（デフォルト: 5）
- `reset` - スコアをリセット
- `sidebar` - サイドバーに表示
- `belowname` - プレイヤー名の下に表示
- `hide` - スコアボードを非表示
- `sb_help` - ヘルプを表示

## 🔧 技術情報

このプロジェクトは `/scoreboard` コマンドをラップしています：

| MakeCode 関数                       | 実行されるコマンド                                |
| ----------------------------------- | ------------------------------------------------- |
| `createObjective("coins", "Coins")` | `/scoreboard objectives add coins dummy "Coins"`  |
| `setScore("@s", "coins", 100)`      | `/scoreboard players set @s coins 100`            |
| `addScore("@s", "coins", 10)`       | `/scoreboard players add @s coins 10`             |
| `showOnSidebar("coins")`            | `/scoreboard objectives setdisplay sidebar coins` |

## 📜 ライセンス

MIT License
