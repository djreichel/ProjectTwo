//creates author object using the log in technology. 
//allows post.js to handle the author and post to database 

module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Author;
  };