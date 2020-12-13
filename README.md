# はじめに

https://github.com/settings/tokens
トークンをここから取得して

git remote add origin https://KamiteAkira0611:[token]@github.com/KamiteAkira0611/react_practice.git

でトークンを使用すれば円滑にクローンできる


クローン完了後
```
$ cd docker
$ ./command start
```

で開発環境を始められる

TODO: 初めはnode-moduleがないので、frontでエラーが出てうまくいかない
`docker-compose run front yarn install`を一度行なったらうまくいくっぽい

# 開発環境

コマンドリスト表示
```
$ cd docker
$ ./command
```

開発環境を始める

```
$ ./command start
```

開発環境を止める

```
$ ./command stop
```

そのほかコマンドリストを参照。

# パッケージの入れ方

react（フロントエンド）の場合
```
$ cd docker
$ ./command exec_fornt
$ yarn add ****
```

rails（バックエンド）の場合
```
$ cd docker
$ ./command exec_api
```



全消し

```
$ docker rm -f `docker ps -a -q`
$ docker rmi `docker images -q` -f
```

