# このアプリケーションについて
このアプリケーションは、トレーニー向けのPFCバランス、カロリー、体重管理アプリです。<br>
機能としては、
- メールアドレスまたはグーグルアカウントを使った認証
- 1日5食までのカロリーと、各食事のPFCバランスの記録
- 毎日の体重の記録

を持っています。<br>
カロリーや体重は月ごとの記録を表示し、期間で絞り込み検索を行えるようにしています。

## デプロイURL
デプロイ済みのURLはこちらです。
（掲載予定）

## 使い方
準備中

## URL
ルーティングは以下のように定義しています。
### フロントエンド
#### 認証
準備中

#### ダッシュボード
- /dashbaoard/calories カロリー記録の一覧
- /dashboard/weights 体重記録の一覧

#### 編集画面
- /management/calories?date=日付 カロリーとPFCバランス（栄養素）の記録入力画面
- /management/calories/[id]?date=日付 カロリーとPFCバランス（栄養素）の記録編集画面
- /management/weights?date=日付 体重の記録入力画面
- /management/weights/[id]?date=日付 体重の記録入力画面

### バックエンド
#### 認証
準備中

#### カロリーCRUDエンドポイント
- index GET /api/calories
- show GET /api/calories/:id
- create POST /api/calories
- update PATCH /api/calories/:id
- destroy DELETE /api/calories/:id

#### カロリーCRUDエンドポイント
- index GET /api/weights
- show GET /api/weights/:id
- create POST /api/weights
- update PATCH /api/weights/:id
- destroy DELETE /api/weights/:id

#### PFCバランス（栄養素）CRUDエンドポイント
準備中

## 技術要素
このアプリケーションは以下の技術要素を使っています。
### フロントエンド
- フレームワーク: Next.js ver.14
- 言語: Javascript, Typescript
- 認証: Auth.js, Google OAuth Provider
- レイアウト: MaterialUI
- テスト: Jest, ReactTestingLibrary

### バックエンド
- フレームワーク: Ruby on Rails ver7
- データベース: MySQL
- 認証: devise, devise-jwt
- テスト: rspec

## インフラ(予定)
- AWS(EC2, ECS, RDS)
- docker
- Nginx
- Vercel

