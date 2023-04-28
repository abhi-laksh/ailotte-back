const { Card, User } = require("../models");

// create card
exports.createCard = async (req, res, next) => {

    const filePath = `${req.file.destination}${req.file.filename}`

    const {
        description,
        likes,
        comments,
        user_id
    } = req.body;


    const user = await User.findByPk(user_id);

    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    const card = await Card.create({
        description,
        likes,
        comments,
        image: filePath,
        userId: user_id,
    })
        .then(data => {

            res.status(201).json({
                message: 'Card created successfully!',
                data
            });

        })
        .catch(err => {
            console.log(err);

            res.status(500).json({
                message: 'An error occurred!',
                error: err
            });

        });

    if (card) {
        res.status(201).json({
            message: 'Card created successfully!',
            data: card
        });
    } else {
        res.status(500).json({
            message: 'Card creation failed',
        });
    }
}


exports.getAllCards = (req, res, next) => {
    Card.findAll({ include: { model: User, as: 'user' }})
        .then(card => {
            res.status(200).json({ card });
        })
        .catch(err => console.log(err));
}
