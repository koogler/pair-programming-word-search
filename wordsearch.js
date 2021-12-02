const transpose = function (matrix) {
    let flipped = []
    for (let i = 0; i < matrix[0].length; i++) {
        flipped.push([])
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            flipped[j].push(matrix[i][j])
        }
    }
    return flipped
};

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    if (letters.length === 0) {
        return false
    }
    let verticalJoin = transpose(horizontalJoin)
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticalJoin) {
        let joined = l.join('')
        if (joined.includes(word)) return true

    }
    for (l of horizontalJoin) {
        if (!l.includes(word)) return false

    }
    for (l of verticalJoin) {
        let joined2 = l.join('')
        if (!joined2.includes(word)) return false

    }
}


module.exports = wordSearch