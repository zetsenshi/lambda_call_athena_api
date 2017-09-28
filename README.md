# lambda_call_athena_api
athenaに登録済みのqueryをlambdaで実行し、結果を特定のS3のバケットに保存する
## 環境変数
lambdaの環境変数に下記を設定する　　
OutputLocation　→ queryの実行結果を保存するS3バケット  
ex s3://hogehoge/athena/ranking/daily
NamedQueryId →　Athenaに登録済みのqueryのID。  
queryのIDはAWS　SDK Cliで一覧をとれる
`aws athena list-named-queries`
ex fsfacc1c-eb1f-1b1b-1aed-1bb111bb11ed
