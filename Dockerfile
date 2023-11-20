FROM node:20 as frontend
WORKDIR /frontend
COPY /frontend .
RUN npm i
RUN npm run build

FROM node:20 as server
WORKDIR /backend
COPY /backend .
COPY --from=frontend /frontend/dist ./frontend
RUN npm i
RUN npm run build
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "run", "start:prod"]