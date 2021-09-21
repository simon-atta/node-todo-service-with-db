import * as todoController from "../controllers/todoController.js"
import httpStatus from "http-status"


const getRoute = "/todo"
const postRoute = "/todo"
const deleteRoute = "/todo/:id"
const putRoute = "/todo"

function getTodo(app) {
	app.get(getRoute, async (req, res) => {
		try {
			const dbResponse = await todoController.read()
			res.send(dbResponse)
		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function postTodo(app) {
	app.post(postRoute, async (req, res) => {
		try {
			const dbResponse = await todoController.create(req.body)
			res.status(httpStatus.CREATED).json({ data: { dbResponse } });

		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function putTodo(app) {
	app.put(putRoute, async (req, res) => {
		try {
			todoController.update(req.body)

		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function deleteTodo(app) {
	app.delete(deleteRoute, async (req, res) => {
		try {
			const id = req.params.id;
			todoController.remove(id)


		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}



export default { getTodo, postTodo , deleteTodo, putTodo}
