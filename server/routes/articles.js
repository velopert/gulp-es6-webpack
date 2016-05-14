import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now().toString());
    next();
});

router.get('/', (req, res) => {
    res.send('articles');
});

router.get('/read/:id', (req, res) => {
    res.send('You are reading article: ' + req.params.id);
});

export default router;
