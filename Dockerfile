FROM node:8.7
EXPOSE 8082
# RUN useradd -ms /bin/bash admin



# RUN mkdir /app
#как вариант скопировать node-modules, pack.json и создать линки
#а потом каждый раз делать npm i
WORKDIR /app
# RUN cd /app
# VOLUME ["./app"]

# RUN chown -R admin:admin /app
# RUN chmod 755 /app
# USER admin
# COPY package.json /app/
# RUN cd /app && ls

# RUN node test.js
CMD npm run init-links && npm run add-links && npm run server:dev
# CMD npm run server:dev