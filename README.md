# EFFORT-69
This is an API for  a workgroup project management application

## INSTALLATION

### Installing Dependencies

Run
`yarn install` or `npm i`

### .env

Create a .env file in the root directory and paste in this

```
MONGO_URI=
JWT_SECRET=
```

## Routes Menu

### User
- [User Social Signup](#1-user-signup-post-request)
### project
- [Create Project](#2-user-create-project-post-request)


### 1. User Social Signup: POST Request

End Point

```
/api/v1/users/signup
```

Body

```json
{
    "firstname": "sheezy",
    "lastname": "boy",
    "email": "hdidiersharif@gmail.com"
}
Response
```json
{
    "status": 201,
    "message": "user loged in Successfully",
    "data": {
        "_id": "603feab59cfcfe1380b8636d",
        "firstname": "sheezy",
        "lastname": "boy",
        "email": "hdidiersharif@gmail.com",
        "createdAt": "2021-03-03T19:59:49.918Z",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhkaWRpZXJzaGFyaWZAZ21haWwuY29tIiwiaWQiOiI2MDNmZWFiNTljZmNmZTEzODBiODYzNmQiLCJyb2xlIjoidXNlciIsImlhdCI6MTYxNDgwMTg3Mn0.mFUROVbrTe7WtjR83dZ6YQRHW1H-m7NLwdPa_cYOflY"
    }
}
```
### 2-user-create-project-post-request

End Point

```
/api/v1/users/signup
```

Body

```json
{
    "projectname": "sheezy"

}
Response
```json
{
    "status": 201,
    "message": "Project created successfully!",
    "data": {
        "labels": [
            {
                "name": "api",
                "color": "blue"
            },
            {
                "name": "feature",
                "color": "green"
            },
            {
                "name": "bug",
                "color": "red"
            },
            {
                "name": "frontend",
                "color": "dark-grey"
            }
        ],
        "_id": "60411ceefcff1e119c240f74",
        "projectname": "sheezy",
        "owner": "603feab59cfcfe1380b8636d",
        "createdAt": "2021-03-04T17:46:22.977Z",
        "__v": 0
    }
}
```
