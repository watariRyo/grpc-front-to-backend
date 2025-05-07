grpc検証
## 概要
client（sveltekit）->(REST) grpc-gateway ->(gRPC) grpc server

grpc-gateway上で認証やセッション、クッキーの処理をやっても良かったが
gRPCでそれらを扱いたかったので多少歪でもセッションIDをPOSTに入れるパワープレイをしている

authorizationヘッダーもgateway上では弾かずにすべてgRPC側のエラーを返すようにしている

### ・DBまわり
ORM：sqlboiler  
migration：ridgepole（whalebrew）

### ・Redis
Redis:go-redis

### ・ログインとか認証機能
jwt / paseto  
pasetoの方を使うが、jwtも実装は残している

### ・DI
手動

### ・config
viper

### ・docker
clientのみdockerを作っていない
それ以外はコンテナ構成

### ・Makefile
[server側](https://github.com/watariRyo/balance/blob/main/server/Makefile)にMakefile  
※evansはgateway挟むようにした都合、動かない

### ・openapi v2
[rest側のdoc](https://github.com/watariRyo/balance/tree/main/server/openapiv2)
