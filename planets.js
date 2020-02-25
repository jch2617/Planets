import express from 'express';
const routes = express.Router();

const planets = [
    { name: "Mercury", color: "Gray" },
    { name: "Venus", color: "Yellow" },
    { name: "Earth", color: "Blue" },
    { name: "Mars", color: "Red" }
];


routes.get('/', (req, res) => {
    res.json(planets);
});

routes.get('/:name', (req, res) => {
    const star = planets.find(astronomy => astronomy.name === req.params.name);
    if (!star) res.status(404).send('Planet not found in this galaxy');
    res.json(star);
});

routes.post('/', (req, res) => {
    const newPlanet = req.body;
    planets.push(newPlanet);

    res.status(201);
    res.send(newPlanet);
});

routes.delete('/:name', (req, res) => {
    const star = planets.find(astronomy => astronomy.name === req.params.name);
    if (!star) res.status(400).send();

    const index = planets.indexOf(star);
    res.status(200);
    console.log('Boom!')
    planets.splice(index, 1);
    res.end();
})

export default routes;
// export default app;