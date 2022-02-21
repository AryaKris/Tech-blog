//three big models we need to build in this application that we are building - our user, our user needs to be able to create posts that are realted to them, user is going to create many posts and post is going to be belonged to many users, comments are going to be related to the post and the user. We need to know who created a comment and also which post does the comments belong to. So, our comments are going to have 2 separate relationships - our users can have many comments and our posts can have many comments OR a single comment is going to belong to a user and also to a particular post. git

const User = require('./user');
const Post = require('./post');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };
