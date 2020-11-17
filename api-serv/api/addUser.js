async function addUser(query, data) {
  return new Promise((resolve, reject) => {

    const { name, password, email } = data;

    if(!name || !password || !email){
      reject('Requied params not passed!');
    }

    const values = [name, password, email];
    query(`
        INSERT INTO users ( 	 
          name,
          password,
          email,
          created_on
        ) 
        VALUES (
          $1,
          $2,
          $3
          DEFAULT
        )
    `, values, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows);
    });
  });


}

module.exports = addUser;
