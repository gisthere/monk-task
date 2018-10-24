FROM node

WORKDIR /monk-task
COPY . .
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "serve"]
