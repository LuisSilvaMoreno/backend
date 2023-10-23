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
getByUsername:`
SELECT 
id 
FROM 
users
WHERE username =?
`,

getByEmail:`
SELECT 
id 
FROM 
users 
WHERE 
email =?
`,
updateUser:`
    UPDATE
    users
    SET
        username = ?,
        email = ?,
        password = ?,
        name = ?,
        lastname = ?,
        phone_number = ?,
        role_id = ?,
        id_active = ?
        WHERE 
        id =?
    `,
    updateRow:`
    UPDATE
       Users
    SET
       is_active = 0
    WHERE
       id = ?
       `,

       deleteRow:`
    UPDATE 
    users
    SET
    id_active =0
    WHERE 
    id=?
    `
}

module.exports = usermodels;