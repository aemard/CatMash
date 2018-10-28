# CatMash

CatMash Appplication [https://catmash.ml](https://catmash.ml)

## Locally
### Requirement
- NPM
- Node
- MongoDB Server

### Setup
git clone https://github.com/ArthurTheMonster/CatMash

#### API
```bash
cd api
npm install
# Modify .env for your database
npm start
```

See [https://loopback.io/doc/en/lb4/](https://loopback.io/doc/en/lb4/) for more information.

#### React JS
```bash
cd frontend
npm install
# Modify .env for connect to the CatMash API
npm run build
npm install -g serve
serve -s build
```

See [https://reactjs.org/docs/getting-started.html/](https://reactjs.org/docs/getting-started.html) for more information.

## License
The CatMash app is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
