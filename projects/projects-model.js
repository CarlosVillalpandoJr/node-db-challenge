const db = require('../data/db-config')

module.exports = {
    getProjects,
    getProjectById,
    getResources,
    getResourceById,
    getTasks,
    addProject,
    addResource,
    addTask
}

// GET
function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects').where({ id })
}

function getResources() {
    return db('resources')
}

function getResourceById(id) {
    return db('resources').where({ id })
}

function getTasks(id) {
    return db('projects')
        .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes')
        .join('tasks', 'projects.id', 'tasks.project_id')
        .where('tasks.project_id', id)
}

// POSTS
function addProject(project) {
    return db('projects')
        .insert(project)
        .then(() => {
            return getProjects().first()
        })
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then((task) => {
            return getTasks(task[0])
        })
}

function addTask(task, id) {
    return db('tasks')
    .insert(task, id)
    .then(task => {
        return getTasks(task[0])
    })
}