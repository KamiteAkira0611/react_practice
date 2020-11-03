# 開発環境

開発環境を始める

```
$ docker-compose up
```

開発環境を止める

```
$ docker-compose down
```

# パッケージの入れ方

```
$ docker ps
```

で起動中のコンテナIDを確認

```
$ docker exec -it ********* sh
$ cd workspace
$ yarn add ****
```

全消し

```
$ docker rm -f `docker ps -a -q`
$ docker rmi `docker images -q` -f
```

# Github

https://github.com/settings/tokens
トークンをここから取得して

git remote add origin https://KamiteAkira0611:[token]@github.com/KamiteAkira0611/react_practice.git

こんな感じでできる
