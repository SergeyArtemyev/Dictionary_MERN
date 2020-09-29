const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Word = require('../../models/Word');
const User = require('../../models/User');

// @route   Get api/words
// @desc    Get all words
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate('words')
      .exec((err, foundUser) => {
        if (err) {
          console.log(err);
        } else {
          res.json(foundUser);
        }
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/words
// @desc    Create a word
// @access  Private
router.post('/', auth, async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  const { eng, rus } = req.body;
  try {
    const user = await User.findById(req.user.id).select('-password');
    const newWord = new Word({
      word: {},
      user: req.user.id,
    });
    newWord.word.set('eng', eng);
    newWord.word.set('rus', rus);

    const word = await newWord.save();

    // Save word into user's words array
    user.words.unshift(word);
    user.save();

    res.json(word);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

// @route   DELETE api/words/:id
// @desc    Delete a word
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);

    if (!word) {
      return res.status(404).json({ msg: 'Word nof found' });
    }
    // Check user
    if (word.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await word.remove();

    res.json({ msg: 'Word Removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Word not found' });
    }
    res.status(500).send('Server Error');
  }
});
