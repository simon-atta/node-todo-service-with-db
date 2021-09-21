import { data } from "../data/todoData.js"
import log from "../utils/logger.js"

import Todo from "../models/todo.js"

function getTodos() {
	return Todo.find();
}

function createToDo(request) {
	const todo = new Todo({
		id: request.id,
		name: request.name,
		status: request.status,
	})

	try {
		return todo.save()
	} catch (error) {
		log.error("error", error)
	}
}

function updateToDo(entity) {
	let index = data.findIndex(function (o) {
		return o.id === parseInt(entity.id)
	})

	let oldEntity = data.pop(index)

	oldEntity.id = entity.id
	oldEntity.name = entity.name
	oldEntity.status = entity.status

	data.push(oldEntity)
}

function removeToDo(id) {
	let index = data.findIndex(function (o) {
		return o.id === parseInt(id)
	})

	if (index !== -1) data.splice(index, 1)
}

export { getTodos, createToDo, removeToDo, updateToDo }
