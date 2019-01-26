FROM node
WORKDIR /apiapp
COPY . /apiapp
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]
