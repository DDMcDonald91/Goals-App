const asyncHandler = require('express-async-handler')
// @desc get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}
// @desc set goal
// @route POST /api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message: 'set goals'})
})

// @desc update goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update goals ${req.params.id}`})

})

// @desc delete goals
// @route DELETE /api/goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}