<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Description
Job Portal using nest, mongo and passport js
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running with docker containers 
```javascript
docker-compose up 
```

## create user 
Access GQL playground on http://localhost:3000
```javascript
mutation createUser {
  createUser(name:"varnit", password:"password", company:"microsoft", roles:["admin"], email:"a@a.com"){
    name
  }
}
```

## login 
```javascript
query login {
  login(username:"a@a.com", password:"password"){
    access_token
  }
}
```

## create vacancy
```javascript
mutation createVacancies {
  createVacancy(experience:"5", title:"sde", position:"SSE", skills:["c#"], description:"description", salary:"30000" ){
    title
  }
}
```

## Delete Vacancy
```javascript
mutation deleteVacancy {
  deleteVacancy(title:"sde")
}

```

## Update Vacancy
```javascript
mutation UpdateVacancies {
  updateVacancy(experience:"5", title:"sde", position:"SSE", skills:["c#"], description:"description", salary:"30000" )
}
```

## Test cases 
unit tests were not written yet

## improvements 
- store passwords with bcrypt
- better logging with winston
- better config handling
- may split modules into micro services