import {createServer, Model} from 'miragejs';
import operators from './MockData.json';

const initServer = function () {
  return createServer({
    models: {
      operator: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/operators", (schema, request) => {
        return schema.operators.all()
      }, {timing: 1300})

      this.get("/operators/:id", (schema, request) => {
        const id = request.params.id
        return schema.operators.find(id)
      }, {timing: 700})

      this.post("/operators/:id", (schema, request) => {
        const id = request.params.id
        const attrs = JSON.parse(request.requestBody)
        const headers = {}

        const result = getRandomInt(2)

        if (result > 0) {
          const data = {message: `${attrs.phone} is refilled with ₽${attrs.amount}`}
          return new Response(200, headers, data)
        } else {
          const data = {errors: ["Server did not respond"]}
          return new Response(500, headers, data)
        }
      }, {timing: 500})
    },

    seeds(server) {
      operators.forEach(operator => {
        server.create("operator", {...operator});
      })
    },
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default initServer;
