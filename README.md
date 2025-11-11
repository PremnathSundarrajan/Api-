
# Req Methods


In this project I used all the req Methods to get familiar with that and also in the creation of API.



## Tech Stack


**Server:** Node, Express


## Installation

Install my-project with npm

```bash
  npm install 
  nodemon index.js
```
    
## Authors

- Premnath S (https://github.com/PremnathSundarrajan)


## Usage/Examples

Here there is an Array which already consists of Two datas. 

* If you need to add Data use Post method and in body there is no need to mention id. The id will automatically increment, just mention title and price.

  path: http://localhost:3000/products/add

  example: 
  {
  "title": "watch",
  "price": 40
  }

* If you want to update the existing data, use put method and in body mention all the elements (id, title, price).

    path: http://localhost:3000/update

    example: {
    "id":1,
    "title":"Grinder",
    "price":4000}

* If you want to update particularly then use Patch method and in body just mention id and the element what you are going to update, the rest will be added from the existing data.

    path: http://localhost:3000/specific/update

    example: {
    "id":2,
    "title":"Samsung"}

    

* If you want to Delete a data, mention id number in the url

    path: http://localhost:3000/del/1
    
