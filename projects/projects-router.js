const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const AllProjects = await Projects.getProjects()
        res.status(200).json(AllProjects)
    } catch (error){
        console.log(error)
        res.status(500).json({ errorMessage: 'Could not retrieve projects' })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const TheProject = await Projects.getProjectById(id)
        res.status(200).json(TheProject)
    } catch {
        res.status(500).json({ errorMessage: 'Could not retrieve project' })
    }
})

// router.get('/resources', async (req, res) => {
//     try {
//         const AllResources = await Projects.getResources()
//         res.status(200).json({allResources: AllResources})
//     } catch {
//         res.status(500).json({ errorMessage: 'Could not retrieve resources' })
//     }
// })

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            if(resources) {
            res.status(200).json(resources)
            } else {
                res.status(404).json({errorMessage: 'Could not find'})
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'Error getting resources.' })
        })
})

router.get('/resources/:id', async (req, res) => {
    const { id } = req.params
    try {
        const TheResource = await Projects.getResourceById(id)
        res.status(200).json(TheResource)
    } catch(error) {
        console.log(error)
        res.status(500).json({ errorMessage: 'Could not retrieve resource' })
    }
})

router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params;

    try {
        const AllTasks = await Projects.getTasks(id)
        if (id) {
            res.status(200).json(AllTasks)
        } else {
            res.status(404).json({ errorMessage: 'Specified ID does not exist' })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({ errorMessage: 'Could not retrieve tasks from database' })
    }
})

router.post('/', async (req, res) => {
    const projectData = req.body
    try {
        const AddedProject = Projects.addProject(projectData)
        if(AddedProject) {
            res.status(201).json(AddedProject)
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ errorMessage: 'Could not add project to database' })
    }
})

router.post('/resources', async (req, res) => {
    const resourceData = req.body
    Projects.addResource(resourceData)
        .then(resource => {
                res.status(201).json(resource)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not add resource to database' })
        })
})

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json({...task});
        })
        .catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to create new task' });
    });
});




module.exports = router;