# Blog-api

<!-- Back to Top Navigation Anchor -->

<a name="readme-top"></a>

<!-- Project Shields -->
<div align="center">

  [![Twitter][twitter-shield]](https://twitter.com/OnyekaAnn1)
  [![AltSchool Badge](https://img.shields.io/badge/-Engineering-6773E5?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcmSURBVHgB7d3/kZtGFAfwbzL5P0oF2VRwlwq8qcBKBUcqsFyBSAW5VGBcgS8ViFRwdgW3qeDcgaM3wBy3egu7sBLY9/3MMD6h5QnBg/0ByAARERERERERERERERERERERERERERERERERERERERERERERERFdwHc4DxtR5uNx+hxRbnOcriOWjS1HC7LH6UvEVETGK5RlzYxyFOl75Fco894r816BVu0cyaHt9Fucnt63aKoCWqncyWFxeir/F03d/483X2sj0IrkTo5CmVd5//bdgFYrd3JoVUrd/qv1HFi1rNgPyEeqCOPNkyrFtX9LYkjV0j9bdFVLjWlk+V3795Xy/g5PCVn11oUuTBqdY91Vq5R5NxK3QLiLahDXbf6CuLEX6slZrQxVKR1WLV+RXMlhoI9OOm9eV7X0sdeyUrmSY6vMex8oWynzpvZaHJpLAH+gScb6OP19nH5p5/enGrSIA+KHruVM8eiVfUS4aikiY/ttnj1ocQanO+9+ZJkK8Q3GAtOvrbAtM0OOasUq896PLFMp86ZWLUOYHDPkGOfQdqqc0t8gjbRb3oKX2FdjbnIY6GeODdKP2rkDYpTZ3GrFIq8taDXmJkfudsI52h000ZxqRaoB681zx+k3xJPu52slZg1a3Jzk0KqAGmkXt/zk6OLWuIyXOHTvcIHte4f5F7dCA2J9BaaPc4xVUw7xF+6+lekdIs1pc7zyXjukZ2ToWotFOq0LXB2nh3bi9ZtEU5NDOx3XmKYKxE9VQ08Q004cEEs0Jzl8Y6OiIdpl/BukkxhvQdlMTQ6/Eekw/cyRs2qpjtPv4B1fWUx94s0o8xym00ZUP7eT9p5DeswuXp/By6NtByIiIiIiIqJvwbl+2ecaT9cyZKxB+tUO/KWdr0rO5LBo7huVf4euY9RohtorXNbBe73EOixBrsKa3mt5frnEhWzaFUi9dPyAy45Q+p9f4mVwWOCSvZDEkGdUCqQz7bK8lL5Sc+8+lzu5jDJf2hWf0LQx0Ja5UspKcn04Tr+CbZFvioFeXUjChNocZWCZEufHaiWxWpmjxLQNXkBvf5wbkyMxOeZUK0aZd4dxFZqbeawXSyY3suw1nveGpCrqnq6fy7bxN72YqVVd92BWF0c4pN947ce0eN42+wj9Jy5WowIm32C8Q7PB+pMZKG+hP8nfP/OMPX4ZOnN07R4t5h5xNm3Zx4F1lPVPaXwbNNt4LKYZieOwQLWyg76yue/V3CNP9ziUHB8w727t6/ZzY9dxj3FbDCdFSkyX+H2ysAjvoAJ5uqh7xG+g/udrCaolRxEZcxdYP4O0ndhNfyFsOyHeUII4LJAc4oDhFZYNJ0embFyLNEUgZo1mx5bt31qZgxJPS477NkbRTjLvIfA9/ITbDJSteuv4gPiEMwMxb9t4twMxrRLTYaHkMEg/ciRZiojY2gYolXI7xG0o//0qEM8EPtu/434P/axllJgl4hKuUsrdQz8Tlog7KBwWSg5hkFbnjm1IUSjlh75UqZS/9cpoSRqiJVzplXlI+D7A+E9xbpC2jcQB4weFw4LJ0ZENOiVJbpRYd0q5oTZM1/10van2yqQkm8FwctjEeN06Pg4so7U1ipGYFuMHhcMKkqNj0SSK7ODYKsd6Me5xegTNNbSzU8trZ5aYBvgB4e9VKjFNREznLXM38n50cpzjv9So0WSvHAk/obluIj8FKZfIXWCZvffa39D/YV20NsBHjPvkvTaBv8VnxA1y+Z97hUzOkRw+WfkKzSlSfh/0T6WMxcu4Opsy4hpbNnUUN9rU4XOD0/qwRtwwdonmyPNHNC3CR9+PWBdth2wwvqOuI+L048X4OSFmkqnJ0Q0X+/NqxJFyb5TlO1KN9L+0wbpoO0B2fI1h/o7sVzNyYNz0XnfXVGoMO1sVPLVaCT0Zn2vo3G9UdRsqRGvp1zifO2XefmQZC/334bW/O68xrMDpNr/DCkij098hHyKWC40s2l4ZC73Pv0mIV3jlcvZWxAFx3fKhdfST5R7jPbmOCcQ0XjmHBbqyBnq3VFbYBpaR+feBZXyHQLnrifFyJ4eF/v33eL6DLPSdqO2kIiKmJNo2IaaLKHMWO+hfRiYZ4zi0KyNnlIeBslsl9jXC4ySPGB5DKZR4uZND3GL4+4fek21hAp97yBzTYaHkECXCKxwz7QZiFxPilYFY50gOUSFt/WQHj4323ifGfEA42RwWTA5RIH3oXMrbiNgmMrZs9O1AnHMlBxB/gNSI73ndZorpMDE5cj7UZPA0dB4apZMejnTfSqT3Jgo0O/8Vnt8mKPGkhV5huI9fea/vMNyyTy1v2nW0eP5Li9K1rNt4NdIYPN3ucOXF7NanHokhSdZvyNeIfJgrZ3L0dfdSbnD6OCQRERERERERERERERERERERERERERERERERERERERERERERERERERERncX/Z96oxRsCt/4AAAAASUVORK5CYII=&logoColor=white&link=https://altschoolafrica.com/schools/engineering)](https://altschoolafrica.com/schools/engineering)
</div>

<div>
  <p align="center">
    <a href="https://github.com/Ann-tech/Blog-api#readme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://anniesblogapi.cyclic.app">Demo</a>
    ·
    <a href="https://github.com/Ann-tech/Blog-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ann-tech/Blog-api/issues">Request Feature</a>
  </p>
</div>

<!-- About the API -->

## Annies Blog Api

&mdash; A Blog API built as an exam project by <a href="https://github.com/Ann-tech">Ann</a>

<p align="right"><a href="#readme-top">back to top</a></p>

### Built With:

<div align="center">

![Javascript][javascript]
![Node.js][node]
![Express.js][express]
![MongoDB][mongodb]

</div>

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- AltSchool Requirements -->

## Requirements

<details>

<summary> <strong>Requirements for the examination project</strong> </summary>

- [x] Users should have a first_name, last_name, email, password,

- [x] A user should be able to sign up and sign in into the blog app

- [x] Use JWT as authentication strategy and expire the token after 1 hour

- [x] A blog can be in two states; draft and published

- [x] Logged in and not logged in users should be able to get a list of published blogs created

- [x] Logged in and not logged in users should be able to to get a published blog

- [x] Logged in users should be able to create a blog.

- [x] When a blog is created, it is in draft state

- [x] The owner of the blog should be able to update the state of the blog to published

- [x] The owner of a blog should be able to edit the blog in draft or published state

- [x] The owner of the blog should be able to delete the blog in draft or published state

- [x] The owner of the blog should be able to get a list of their blogs.

- [x] The endpoint should be paginated

- [x] It should be filterable by state

- [x] Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.

- [x] The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated:

  - [x] default it to 20 blogs per page.

  - [x] It should also be searchable by author, title and tags.

  - [x] It should also be orderable by read_count, reading_time and timestamp

- [x] When a single blog is requested, the api should return the user information (the author) with the blog. The read_count of the blog too should be updated by 1

- [x] Come up with any algorithm for calculating the reading_time of the blog.

- [x] Write tests for all endpoints

<p align="right"><a href="#readme-top">back to top</a></p>

---

</details>

<br>

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

#### Clone this repo

```sh
git clone https://github.com/Ann-tech/Blog-api.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with 
-JWT_SECRET
-MONGODB_URI
-PORT

#### Run a development server

```sh
npm run dev
```

#### For testing, run

```sh
npm run test
```

### Models

#### User

| field      | data_type     | constraints      |
| ---------  | ------------- | ---------------- |
| first_name | string        | required         |
| last_name  | string        | required         |
| email      | string        | required, unique |
| password   | string        | required         |
| articles   | ref - Article |                  |


#### Article

| field         | data_type  | constraints                                              |
| ------------  | ---------- | -------------------------------------------------------- |
| title         | string     | required, unique                                         |
| author        | string     |                                                          |
| formattedTitle| string     |                                                          |
| description   | string     | optional                                                 |
| tags          | array      | optional                                                 |
| state         | string     | required, default: 'draft', enum: ['draft', 'published'] |
| read_count    | Number     | default: 0                                               |
| reading_time  | Number     |                                                          |
| body          | string     | required                                                 |
| authorInfo    | ref - User |                                                          |

<p align="right"><a href="#readme-top">back to top</a></p>

---

## Usage

### Base URL

- https://anniesblogapi.cyclic.app

### Creating a user

- Route: /api/signup
- Method: POST

:point_down: Body

```json
{
    "first_name": "Ann",
    "last_name": "Mba",
    "password": "ann123",
    "email": "anny@gmail.com"
}
```

:point_down: Response

```json
{
    "status": true,
    "message": "Signup successful",
    "user": {
        "first_name": "Ann",
        "last_name": "Mba",
        "email": "anny@gmail.com",
        "articles": [],
        "_id": "63690c635a8bc2aa9ed90373",
        "created_at": "2022-11-07T13:47:15.000Z",
        "updated_at": "2022-11-07T13:47:15.000Z"
    }
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Logging in

- Route: /api/login
- Method: POST

:point_down: Body

```json
{
  "email": "anny@gmail.com",
  "password": "ann123"
}
```

:point_down: Response

```json
{
    "message": "Login successful",
    "token": {token}
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Create a Blog

- Route: /api/blog/create-article
- Method: POST
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
    "title": "Understanding CSS Positioning",
    "description": "Simple explanation of CSS positioning",
    "tags": ["newbies", "css"],
    "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain ....."
}
```

:point_down: Response

```json
{
  "article": {
    "title": "Understanding CSS Positioning",
    "author": "Mba Ann",
    "formattedTitle": "understanding-css-positioning",
    "description": "Simple explanation of CSS positioning",
    "tags": [
      "newbies",
      "css"
    ],
    "state": "draft",
    "read_count": 0,
    "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain .....",
    "authorInfo": "63690c635a8bc2aa9ed90373",
    "_id": "6369138fb586898c15aa5341",
    "created_at": "2022-11-07T14:17:51.000Z",
    "updated_at": "2022-11-07T14:17:51.000Z",
    "__v": 0
  },
  "status": true,
  "message": "Article creation successful"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get all published blogs

- Route: /api/blog
- Method: GET
- Header
  - Authorization: Bearer {token}
  - None (Accessible to unauthenticated users)
- Query params:

  - skip (default: 0)
  - per_page (default: 20)

  - Filters: Limit returned response by passing values to any of the following parameters:

    - author
    ```text
    /api/blog?author=Author
    ```
    - title
    ```text
    /api/blog?title=Title
    ```
    - tags: Separate multiple values with a comma 
    ```text
    /api/blog?tags=css,newbies
    ```
      - tags should be an array in a test case
      ```
        tags: [css, newbies]
      ```

  - Sort: Sort returned response by passing values matching the fields in the blog to the `orderby` parameter. 
  Separate multiple values with a comma

  Acceptable values include:
    - read_count
    - reading_time
    - timestamp

  Response can be sorted in `asc` or `desc`
  By default it is sorted in `asc`

  To sort in descending order, add `order` parameter. 
  
    ```text
      /api/blog?orderby=read_count&order=desc
    ```

  - Search: Articles are searchable by author, title and tags.
  Searchable fields are passed as individual query parameters and should therefore be delimited by `&` .
  Tags should be delimited by a comma `,`

  ```text
      /api/blog?author&title&tags=newbies,css
    ```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get all created articles by authenticated users

- Route: /api/blog/articles
- Method: GET
- Header
  - Authorization: Bearer {token}
- Query params:

  - per_page (default: 10)
  - skip (default: 0)

  - filterable by state

    - state
    ```text
    /api/blog/articles?state=draft
    ```

    ```text
    /api/blog/articles?state=published
    ```

   
    

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Get specific blog by id or title - 
NB: Retrieved articles are published

- Route: /api/blog/article/:idOrTitle
- Method: GET
- Header
  - Authorization: Bearer {token}
  - None (Published blogs accessible to unauthenticated users)


```text
    /api/blog/article/6369138fb586898c15aa5341
```
`or`

- title
  - should be lowercase
  - each word should be delimited by hyphen
  - should only contain alphanumeric characters

```text
    /api/blog/article/understanding-css-positioning
```

:point_down: Response

```json
{
  "_id": "6369138fb586898c15aa5341",
  "title": "Understanding CSS Positioning",
  "author": "Mba Ann",
  "formattedTitle": "understanding-css-positioning",
  "description": "Simple explanation of CSS positioning",
  "tags": [
    "newbies",
    "css"
  ],
  "state": "published",
  "read_count": 1,
  "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain .....",
  "authorInfo": {
    "_id": "63690c635a8bc2aa9ed90373",
    "first_name": "Ann",
    "last_name": "Mba",
    "email": "anny@gmail.com"
  },
  "created_at": "2022-11-07T14:17:51.000Z",
  "updated_at": "2022-11-07T15:15:06.701Z",
  "__v": 0,
  "reading_time": 1,
  "timestamp": "2022-11-07T15:04:59.000Z"
}  
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Update the state of a Blog by id

- Route: /api/blog/publish/:id
- Method: PATCH
- Header
  - Authorization: Bearer {token}

:point_down: Body

```text
    /api/blog/publish/6369138fb586898c15aa5341
```

:point_down: Response

```json
{
  "article": {
    "_id": "6369138fb586898c15aa5341",
    "title": "Understanding CSS Positioning",
    "author": "Mba Ann",
    "formattedTitle": "understanding-css-positioning",
    "description": "Simple explanation of CSS positioning",
    "tags": [
      "newbies",
      "css"
    ],
    "state": "published",
    "read_count": 0,
    "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain .....",
    "authorInfo": "63690c635a8bc2aa9ed90373",
    "created_at": "2022-11-07T14:17:51.000Z",
    "updated_at": "2022-11-07T14:17:51.000Z",
    "__v": 0,
    "timestamp": "2022-11-07T15:04:59.000Z",
    "reading_time": 1
  },
  "status": true,
  "message": "Update successful - your article is now live"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Edit the content of an article

- Route: /article/:id
- Method: PATCH
- Header
  - Authorization: Bearer {token}

:point_down: Body

```json
{
  "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain the concept in the simplest way possible""
}
```

:point_down: Response

```json
{
  "article": {
    "_id": "6369138fb586898c15aa5341",
    "title": "Understanding CSS Positioning",
    "author": "Mba Ann",
    "formattedTitle": "understanding-css-positioning",
    "description": "Simple explanation of CSS positioning",
    "tags": [
      "newbies",
      "css"
    ],
    "state": "published",
    "read_count": 0,
    "body": "Positioning can seem daunting at first for everyone new to css. In this article I'll explain the concept in the simplest way possible. There are different types of positioning",
    "authorInfo": "63690c635a8bc2aa9ed90373",
    "created_at": "2022-11-07T14:17:51.000Z",
    "updated_at": "2022-11-07T15:15:06.701Z",
    "__v": 0,
    "reading_time": 1,
    "timestamp": "2022-11-07T15:04:59.000Z"
  },
  "status": true,
  "message": "Update successful"
}
```

<p align="right"><a href="#readme-top">back to top</a></p>

---

### Delete a Blog

- Route: /api/blog/article/:id
- Method: DELETE
- Header
  - Authorization: Bearer {token}

<p align="right"><a href="#readme-top">back to top</a></p>

---

## Lessons Learned

While building this project, I learned about:

- Test Driven Development
- Testing the backend
- Database Modelling
- Database Management
- Debugging
- User Authentication
- User Authorization
- Documentation

<p align="right"><a href="#readme-top">back to top</a></p>

---


<!-- Contact -->

## Contact

- Twitter - [@OnyekaAnn1](https://twitter.com/OnyekaAnn1)
- email - Onyekaann17@gmail.com

Project Link: [Blog-api](https://github.com/Ann-tech/Blog-api)

<p align="right"><a href="#readme-top">back to top</a></p>

---

<!-- Acknowledgements -->

## Acknowledgements

This project was made possible by:

- [AltSchool Africa School of Engineering](https://altschoolafrica.com/schools/engineering)
- [Full Stack open 2022](https://fullstackopen.com/en/)
- [Othneil Drew's README Template](https://github.com/othneildrew/Best-README-Template)
- [Ileriayo's Markdown Badges](https://github.com/Ileriayo/markdown-badges)
- [markdown-emojis](https://github.com/markdown-templates/markdown-emojis)

<p align="right"><a href="#readme-top">back to top</a></p>
<!-- Markdown Links & Images -->


[twitter-shield]: https://img.shields.io/badge/-@OnyekaAnn1-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/OnyekaAnn1
[twitter-url]: https://twitter.com/OnyekaAnn1
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1C
[node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[mongodb]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white#   b l o g - a p i  
 