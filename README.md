# I System i oprogramowanie

1. nodejs lts
2. ubuntu/ubuntu-based dystrybucja linuxa (przetestowane na linux mint)
3. mysql server i client

update dystrybucji linuxa

```shell
sudo systemctl start mysql.service
```

instalacja mysql:

```shell
sudo apt install mysql-server mysql-client
```

odpalenie mysql:

```shell
sudo systemctl start mysql.service
```

# II Wykonanie zapytań sql'a w sql/db.sql

1. przejdź do folderu sql w wybranym unix-like shellu (bash, zsh, etc.)
2. zaloguj się jako root:

```

mysql -u root -p
```
