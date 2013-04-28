
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
  elementConstructor : RealElement,
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
    describe('col()', function () {
      it('is an alias of getColumnByIndex()', function () {
        assert.ok(matrix.col === matrix.getColumnByIndex)
      })
    })

    describe('getColumnByIndex()', function () {
      it('returns column given by index', function () {
        var col

        col = matrix.getColumnByIndex(0)
        assert.deepEqual(col, [elements[0], elements[2]])

        col = matrix.getColumnByIndex(1)
        assert.deepEqual(col, [elements[1], elements[3]])
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
      it('implements row by column multiplication at right side'/*, function () {
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

var e
e = matrix1.getElements();
//for (var i in e) console.log(e[i].getData());

        matrix1.rightMultiplication(matrix2)
//e = matrix1.getElements();
//for (var i in e) console.log(e[i].getData());
        assert.deepEqual(matrix1.getElements(), [minusTwo, zero, zero, minusTwo])

        matrix3.rightMultiplication(matrix1)
        //assert.deepEqual(matrix3.getElements(), [one, zero, zero, one])
      }*/)
    })

    describe('row()', function () {
      it('is an alias of getRowByIndex()', function () {
        assert.ok(matrix.row === matrix.getRowByIndex)
      })
    })

    describe('getRowByIndex()', function () {
      it('returns row given by index', function () {
        var row

        row = matrix.getRowByIndex(0)
        assert.deepEqual(row, [elements[0], elements[1]])

        row = matrix.getRowByIndex(1)
        assert.deepEqual(row, [elements[2], elements[3]])
      })
    })
  })
})
