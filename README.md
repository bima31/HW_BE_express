# technical test Back-End with Express

## Development server

Jalankan `yarn start` untuk memulai server pengembangan. Navigasikan ke `http://localhost:8080/`.


## link frontEnd
[link to frontend](https://github.com/bima31/HW_FE_angular)

## API + contoh JSON
+ signup `POST`<br />
`http://localhost:8080/api/auth/signup` 
```
{
    "username": "mod",
    "email": "mod@mail.com",
    "password": "mod@123",
    "roles": [
      "user",
      "moderator"
    ]
  }
```
  atau
```
  {
    "username": "admin",
    "email": "admin@mail.com",
    "password": "admin@123",
    "roles": [
      "admin",
    ]
  }
```
+ signin <br />
  `http://localhost:8080/api/auth/signin` method `POST`
```
 {
  "username": "admin",
  "password": "admin@123"
  }
```
+ allProduct `GET` <br />
`http://localhost:8080/api/product` 

+ inputProduct `POST` <br />
`http://localhost:8080/api/product/input` 
```
{
    "nama_product": "iceland mangga",
    "qty_product": 7
}
```

+ editProduct `POST` <br />
`http://localhost:8080/api/product/edit` 
```
{
    "id": 95,
    "nama_product": "iceland",
    "qty_product": 6
}
```

+ hapusProduct `POST`<br />
`http://localhost:8080/api/product/hapus`
```
{
    "id": 95
}
```
