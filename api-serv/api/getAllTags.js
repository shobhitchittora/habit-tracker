async function getAllTags(query) {
  return new Promise((resolve, reject) => {
    query('SELECT * FROM tags', (error, result) => {
      if (error) {
        reject({ error });
      }


      if (result && result.rows.length) {
        resolve(result.rows);
      }
    });
  });
}

module.exports = getAllTags;