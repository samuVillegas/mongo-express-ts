/**
 *
 * @swagger
 * components:
 *  schemas:
 *      Game:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: ObjectId of game
 *              name:
 *                  type: string
 *                  description: Name of game
 *              price:
 *                  type: integer
 *                  description: Price of game
 *              category:
 *                  type: string
 *                  description: Category of game
 *          required:
 *              - name
 *              - price
 *              - category
 *
 */
/**
 *
 * @swagger
 * /games:
 *  post:
 *      summary: Creates a new Game
 *      tags: [Game]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Game'
 *
 *      responses:
 *          200:
 *              description: Game created
 *
 */ 
//# sourceMappingURL=games.docs.js.map