# CatMash

CatMash Application 

FrontEnd [https://catmash.ml](https://catmash.ml)

API [https://api.catmash.ml/](https://api.catmash.ml/)

## Locally
### Requirement
- [NPM](https://www.npmjs.com)
- [Node](https://nodejs.org/en/)
- [MongoDB Server](https://www.mongodb.com)

### Setup
```bash
git clone https://github.com/ArthurTheMonster/CatMash
```
#### API
```bash
cd api
npm install
# Modify happycats.datasource.json file for connect to your mongodb server
npm start
```

See [https://loopback.io/doc/en/lb4/](https://loopback.io/doc/en/lb4/) for more information.

#### React JS
```bash
cd frontend
npm install
# Modify YOUR_APP_API_URL variable for connect to the CatMash API
REACT_APP_API_URL="YOUR_APP_API_URL" npm run build
npm install -g serve
serve -s build
```

See [https://reactjs.org/docs/getting-started.html/](https://reactjs.org/docs/getting-started.html) for more information.

## License
The CatMash app is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
