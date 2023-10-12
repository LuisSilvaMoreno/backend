const usermodels = {
    getAll: `
    SELECT 
    * 
    FROM 
    users`,
getByID:`
    SELECT
    *
    FROM
     users
    WHERE
      id = ?
`,
addRow: `
    INSERT INTO
    users (
     username,
     email,
     password,
     name,
     lastname,
     phone_number,
     role_id,
     id_active
    ) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`,
}

module.exports = usermodels;