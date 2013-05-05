
var assert  = require('assert')
  , algebra = require('../index.js')

var abstractMethod = algebra.util.abstractMethod
  , Matrix         = algebra.Matrix
  , RealElement    = algebra.Real.Element
  , Tensor         = algebra.Tensor

var zero             = new RealElement(0)
  , one              = new RealElement(1)
  , two              = new RealElement(2)
  , minusOne         = new RealElement(-1)
  , minusTwo         = new RealElement(-2)
  , minusZeroDotFive = new RealElement(0.5)
          
var elements = [one, two,
                two, one]

var matrix = new Matrix({
  elements           : elements,
  numberOfColumns    : 2,
  numberOfRows       : 2
})

describe('Matrix', function () {
  describe('Constructor', function () {
  })

  describe('Inheritance', function () {
    it('is a Tensor', function () {
      assert.ok(matrix instanceof Tensor)
    })
  })

  describe('Methods', function () {
    describe('clone()', function () {
      it('returns a copy of the object', function () {
        var matrix1 = new Matrix({
          elements           : elements,
          numberOfColumns    : 2,
          numberOfRows       : 2
        })
          , matrix2 = matrix1.clone()
   
        assert.ok(matrix2 instanceof Matrix)
        assert.ok(matrix1.equal(matrix2))
        assert.ok(matrix1 !== matrix2)
      })
    })

    describe('col()', function () {
      it('is an alias of getColumnByIndex()', function () {
        assert.ok(matrix.col === matrix.getColumnByIndex)
      })
    })

    describe('getColumnByIndex()', function () {
      it('returns column given by index', function () {
        var col

        col = matrix.getColumnByIndex(0)
        assert.ok(col[0].eq(elements[0]))
        assert.ok(col[1].eq(elements[2]))

        col = matrix.getColumnByIndex(1)
        assert.ok(col[0].eq(elements[1]))
        assert.ok(col[1].eq(elements[3]))
      })
    })

    describe('getRowByIndex()', function () {
      it('returns row given by index', function () {
        var row

        row = matrix.getRowByIndex(0)
        assert.ok(row[0].eq(elements[0]))
        assert.ok(row[1].eq(elements[1]))

        row = matrix.getRowByIndex(1)
        assert.ok(row[0].eq(elements[2]))
        assert.ok(row[1].eq(elements[3]))
      })
    })

    describe('ij()', function () {
      it('is an alias of getElementByIndexes', function () {
        assert.ok(matrix.ij === matrix.getElementByIndexes)
      })
    })

    describe('leftMultiplication()', function () {
      it('implements row by column multiplication at left side')
    })

    describe('lmul()', function () {
      it('is an alias of leftMultiplication', function () {
        assert.ok(matrix.lmul === matrix.leftMultiplication)
      })
    })

    describe('mul()', function () {
      it('is an alias of rightMultiplication', function () {
        assert.ok(matrix.mul === matrix.rightMultiplication)
      })
    })

    describe('rightMultiplication()', function () {
      it('implements row by column multiplication at right side', function () {
        var elements1 = [two, zero, zero, two]
          , elements2 = [minusOne, zero, zero, minusOne]
          , elements3 = [minusZeroDotFive, zero, zero, minusZeroDotFive]

        var matrix1 = new Matrix({
            elements        : elements1,
            numberOfColumns : 2,
            numberOfRows    : 2
          })
          , matrix2 = new Matrix({
            elements        : elements2,
            numberOfColumns : 2,
            numberOfRows    : 2
          })
          , matrix3 = new Matrix({
            elements        : elements3,
            numberOfColumns : 2,
            numberOfRows    : 2
          })

        matrix1.rightMultiplication(matrix2)
        assert.deepEqual(matrix1.getData(), [-2, 0, 0, -2])

        matrix3.rightMultiplication(matrix1)
        // TODO assert.deepEqual(matrix3.getElements(), [one, zero, zero, one])
      })
    })

    describe('row()', function () {
      it('is an alias of getRowByIndex()', function () {
        assert.ok(matrix.row === matrix.getRowByIndex)
      })
    })
  })
})