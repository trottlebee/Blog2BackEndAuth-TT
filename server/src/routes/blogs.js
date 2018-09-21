import { Router } from 'express';
import Table from '../table';

let router = Router();
let classTable = new Table('blogs');

router.get('/', (req, res) => {
    classTable.getAll()
        .then(response => {
            res.send(response);
        });
});

router.get('/:id', (req, res) => {
    classTable.getOne(req.params.id)
        .then (response => {
        res.send(response);
        });
});

router.post('/', (req, res) => {
    classTable.insert(req.body)
    .then (response => {
        res.send(response);
        });  
});

export default router;