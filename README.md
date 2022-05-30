First build the Docker container:

```bash
  sudo docker build -t react-ui .
```
then run it with docker run:
```bash
  sudo docker run -d --name reactui -p 80:80 react-ui
```