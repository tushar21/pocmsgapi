FROM node
WORKDIR /apiapp
COPY . /apiapp
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
