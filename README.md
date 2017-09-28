# lambda_call_athena_api
athenaに登録済みのqueryをlambdaで実行し、結果を特定のS3のバケットに保存する
## 環境変数
lambdaの環境変数に下記を設定する　　<br>
OutputLocation　→ queryの実行結果を保存するS3バケット  <br>
ex s3://hogehoge/athena/ranking/daily<br>
NamedQueryId →　Athenaに登録済みのqueryのID。 <br> 
queryのIDはAWS　SDK Cliで一覧をとれる<br>
`aws athena list-named-queries`<br>
ex fsfacc1c-eb1f-1b1b-1aed-1bb111bb11ed
