const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({name:'bruno', age: 28});
});

module.exports = router; 