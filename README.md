# stathack2021.github.io
StatHack の会社ホームページ

## Usage
### Setup
```
$ cd stathack2021.github.io
$ sh docker/build.sh
```

### Start the server
```
$ sh docker/run.sh
```

### Run shell in the docker container
```
$ sh docker/exec.sh
```

### Test Static Site
```
# in the container
$ cd app
$ npm run build
$ npm run export
$ npx serve out
```

## Reference
#### Template
This repository uses the following template.
https://github.com/tomoino/next-template

#### icons
https://icons.getbootstrap.com/