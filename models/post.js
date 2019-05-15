module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        // author object that will communicate with author.js to log author name into db
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // beer name
        beerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // type of beer <input value="IPA">IPA</input>
        beerType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // brewery name 
        brewery: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        // rating (same as type of beer- comes from drop down or input/select value
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                isNumeric: true,
                len: [1,10]
            }
        },
        //review
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //date posted
        reviewDate: {
            type: DataTypes.DATE,
        } 

    });

//     Post.associate = function(models) {

//         Post.belongsTo(models.Author, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };

    return Post;
}
