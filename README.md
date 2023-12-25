# このアプリケーションについて
このアプリケーションは、トレーニー向けのPFCバランス、カロリー、体重管理アプリです。
機能としては、
- メールアドレスまたはグーグルアカウントを使った認証
- 1日5食までのカロリーと、各食事のPFCバランスの記録
- 毎日の体重の記録
を持っています。
カロリーや体重は月ごとの記録を表示し、期間で絞り込み検索を行えるようにしています。

## 技術要素
### フロントエンド
フロントエンドに関しては、以下の技術を使っています。
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

## デプロイURL
デプロイ済みのURLはこちらです。
（掲載予定）