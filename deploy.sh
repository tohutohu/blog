docker build -t vuepress-build docker/node
docker run --rm -v `pwd`:/work -w /work -t vuepress-build /bin/bash -c 'npm i && npm run build'

docker-compose down
docker-compose up -d
