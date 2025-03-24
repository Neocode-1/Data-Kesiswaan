## Prasyarat

Beberapa hal yang harus dipastikan sebelum memulai:
- **Docker** → [Download Docker](https://www.docker.com/get-started)
- Hentikan dahulu webserver Apache2 dan server MySQL
---

## 1. Instal dependencies
```sh
composer install
```
```sh
npm install
```

---

## 1. Copy file .env.example ke .env
Isi filenya minta via wa

---

## 2. Generate key
```sh
php artisan key:generate
```
Atau
```sh
.\vendor\bin\sail artisan key:generete
```

---

## 3. Sail up (pastikan docker sudah terinstall)
```sh
.\vendor\bin\sail up -d
```
kalo belum bisa:
```sh
php artisan sail:install
```
