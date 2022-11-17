# I System i oprogramowanie

1. ubuntu/ubuntu-based dystrybucja linuxa (przetestowane na linux mint)
2. nodejs lts
3. mysql server i client

update dystrybucji linuxa opartych o ubuntu/debian

```shell
sudo apt update
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

i podaj hasło.
Jeśli nie znasz hasła, sprawdź ten [link](https://stackoverflow.com/questions/16556497/mysql-how-to-reset-or-change-the-mysql-root-password)

3. wykonaj polecenie:

```
source ./db.sql
```

4. jeśli wszystko dobrze się wykonało, wyjdź poleceniem:

```
quit;
```

# III setup-up node'a

1. przejdź do folderu root projektu i zainstaluj pakiety npm:

```
npm install
```

2. odpal aplikacje:

```
npm start
```

albo:

```
npm run start
```

# najważniejsze routy:

- 127.0.0.1:PORT/api/v1/product/:id (GET,DELETE,PUT,POST)
- 127.0.0.1:PORT/api/v1/products (GET)

gdzie PORT to `5000`, zgodnie z plikiem `.env` w rootcie projektu

# Dodatkowe uwagi:

1. api obsługuje body w `json`, albo w `x-wwww-form-urlencoded`, z następującymi parametrami:
   `name`: `tekst`
   `price`: `liczba`
