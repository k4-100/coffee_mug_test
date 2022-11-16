import mysql from "mysql";

export function queryPromise(
  connection: mysql.Connection,
  query: string
): Promise<unknown> {
  return new Promise((res, rej) => {
    connection.query(query, (error, result) => {
      if (error) rej(error);
      res(result);
    });
  });
}

/**
 *
 * @param connection mysqlconnection
 * @returns promise containing query with all items in ProductsTAB
 */
export async function getProducts(
  connection: mysql.Connection
): Promise<unknown> {
  return queryPromise(connection, `SELECT * FROM ProductsTAB;`);
}

/**
 *
 * @param connection mysqlconnection
 * @returns promise containing query with an item meeting the requirements
 */
export async function getProductData(
  connection: mysql.Connection,
  id: number
): Promise<unknown> {
  return queryPromise(connection, `SELECT * FROM ProductsTAB WHERE id=${id};`);
}

/**
 *
 * @param connection mysqlconnection
 * @returns promise containing query w
 */
export async function putUpdatedProduct(
  connection: mysql.Connection,
  id: number,
  name: string,
  price: number
): Promise<unknown> {
  return queryPromise(
    connection,
    `UPDATE ProductsTAB SET ${name ? `name='${name},'` : ""}, ${
      price ? `price=${price},` : ""
    } UpdateDate = NOW()`
  );
}

/**
 *
 * @param connection mysqlconnection
 * @param name of the entity
 * @param price of the entity
 * @returns promise containing query with an item meeting the requirements
 */
export async function postProduct(
  connection: mysql.Connection,
  name: string,
  price: number
): Promise<unknown> {
  return queryPromise(
    connection,
    `INSERT INTO ProductsTAB WHERE name='${name}' AND price=number`
  );
}

/**
 *
 * @param connection mysqlconnection
 * @param id id of entity to delete
 * @returns promise containing query with an item meeting the requirements
 */
export async function deleteProduct(
  connection: mysql.Connection,
  id: number
): Promise<unknown> {
  return queryPromise(connection, `SELECT * FROM ProductsTAB WHERE id=${id};`);
}
