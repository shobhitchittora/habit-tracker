async function getUser(query, data) {
  return new Promise((resolve, reject) => {
    const { email, password } = data;
    if (!email || !password) {
      reject('Email and Password is required');
    }

    const values = [email, password];
    query('SELECT * FROM users WHERE email=$1 AND password=$2', values, (error, result) => {
      if (error) {
        reject({ error });
      }

      if (result && result.rows.length) {
        resolve(result.rows);
      }

      reject({ error: 'No user found!' });
    });
  });


}

module.exports = getUser;