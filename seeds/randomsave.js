// // seed.js
// const seedUsers = require("./userData")
// const seedBlogPosts = require("./blogPostData")
// const seedComments = require("./commentsData")

// const sequelize = require("../config/connection")

// const seedAll = async() => {
//   await sequelize.sync({force: true})
//   await seedUsers()
//   await seedBlogPosts()
//   await seedComments()

//   process.exit(0)
// }

// seedAll()

// // userData.js
// const { User } = require("../models")


// const userData = [
//     {
//       "name": "Sophia",
//       "password": "password123"
//     },
//     {
//       "name": "Dorothy",
//       "password": "password12345"
//     },
//     {
//       "name": "Blanche",
//       "password": "password1234567"
//     },
//     {
//         "name": "Rose",
//         "password": "password123456789"
//     }
//   ]

//   const seedUsers = () => User.bulkCreate(userData);

//   module.exports = seedUsers


// // blogPostData.js
// const { BlogPost } = require("../models")

// const blogPostData = [
//   {
//     "name": "Story Time",
//     "description": "Picture it. Sicily, 1945.",
//    "user_id": 1
//   },
//   {
//     "name": "Parents",
//     "description": "Oh, come on, Ma!",
//     "user_id": 2
//   },
//   {
//     "name": "Southern Comfort",
//     "description": "Let's get out a cheesecake.",
//    "user_id": 3
//   },
//   {
//     "name": "Reminiscing",
//     "description": "Back in St. Olaf...",
//    "user_id": 4
//   }
// ]

// const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData)

// module.exports = seedBlogPosts;

// // commentsData.js
// const { Comment } = require("../models")

// const commentData = [
//     {
//         "text": "This is a Comment!",
//         "user_id": 1,
//         "blogPost_id": 1
//     },
//     {
//         "text": "This is a Comment! 12345ABC",
//         "user_id": 2,
//         "blogPost_id": 2
//     }
// ]

// const seedComments = () => Comment.bulkCreate(commentData)

// module.exports = seedComments;