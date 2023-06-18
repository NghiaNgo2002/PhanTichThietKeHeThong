const db = require ('../../connect');

exports.getAll = async () => {
  const result = await db.connection.execute("SELECT * FROM Transaction");
  return result[0];
};
exports.filter = async (id) => {
  const result = await db.connection.execute('SELECT * FROM Transaction WHERE id LIKE ?', [`%${id}%`]);
  console.log(id,result);
  return result[0];
};