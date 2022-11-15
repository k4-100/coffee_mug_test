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
