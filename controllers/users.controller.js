

const getUsers = (req, res) => {
  res.sendFile(__dirname + "/../views/index.html");
};

const users = [];


const postUsers = ({ body: { name, age } }, res) => {
  const user = {
    name,
    age: Number(age),
  };
  users.push(user);

  res.status(201).json({
    message: "Data Add Successfully",
    success: true,
    users,
  });
};


module.exports = {
    getUsers, 
    postUsers
}

