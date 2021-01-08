# tardygram-lab
Tardygram (Instagram clone)
Let’s create an Instagram clone.

## Models
### User
Users can post new posts and leave comments. They have:
- A String username
- A String password_hash  -->
- A String profile_photo_url --> --> ~~

### Post/Gram
Posts are photos with some text caption. They should have:
- A reference to user user
- A String photo_url
- A String caption
- An array of String tags

### Comment
Comments have:
- A reference to a user comment_by
- A reference to a post post
- A string comment

~~ ## Routes
### Auth
Create authentication routes
- POST /auth/signup
  - creates a new user
  - responds with the created user

- POST /auth/login
  - responds with a user

- GET /auth/verify
  - uses the ensureAuth middleware
  - responds with a user ~~

### Posts/Grams
Create RESTful post routes

- POST /posts
  - requires authentication
  - creates a new post
  - responds with the new post
HINT: get the user who created the post from req.user.

- GET /posts
  - responds with a list of posts

- GET /posts/:id
  - responds with a post by id
  - should include the joined user
  - should include all comments associated with the post (joined with commenter)

- PATCH /posts/:id
  - requires authentication
  - only can update the post caption
  - respond with the updated post
NOTE: make sure the user attempting to update the post owns it

- DELETE /posts/:id
  - requires authentication
  - deletes a post
  - responds with the deleted post
NOTE: make sure the user attempting to delete the post owns it

- GET /posts/popular
  - respond with a list of the 10 posts with the most comments

### Comments
Create RESTful comments routes

- POST /comments
  - requires authentication
  - create a new comment
  - respond with the comment
HINT: get the user who created the comment from req.user.

- DELETE /comments/:id
  - requires authentication
  - delete a comment by id
  - respond with the deleted comment
NOTE: make sure the user attempting to delete the comment owns it

### Users
BONUS:

- GET /users/popular
  - respond with the 10 users with the most total comments on their posts

- GET /users/prolific
  - respond with the 10 users with the most posts

- GET /users/leader
respond with the 10 users with the most comments
GET /users/impact
  - respond with the 10 users with the highest $avg comments per post

## Rubric
User model - 4 points
Auth routes - 4 points
Post setup (routes and model) 5 points
Comment setup (routes and model) 5 points
Aggregations - 2 points (1 point per aggregation)
