import Express from "express";
import category from "./routes/category.route.js";
import connectDB from "./config/db.js";
import product from "./routes/product.route.js";
import { reviewrating } from "./routes/review.rating.route.js";
import { subcategory } from "./routes/sub.category.route.js";
import user from "./routes/user.route.js"
import comment from "./routes/comment.route.js";
import share from "./routes/share.route.js";
import  {like}  from "./routes/like.route.js";
const app = Express();
app.use(Express.json());
connectDB();
// import { createServer } from "http";
// import { Server } from "socket.io";
// const httpServer = createServer();
// const socket = new Server(httpServer, {
// 	cors: {
// 		origins: ['http://dev.adaiya.in','http://localhost:4200','http://localhost:9002'],
// 		'transports': ['websocket', 'pollings']
// 	  },
// });

// var users = {};
// socket.on('connection', (socket) => {
//     console.log("Connected...");
// 	socket.on('judna', function(data){
// 		console.log("Connected Join----",data);
// 	  socket.join(data.room);
// 	  users[socket.id] = data.user;
// 	  var  JoinRes = {
// 		message: data.user+' has joined '+data.room+" room",
// 		users:users,
// 	};
// 	  socket.broadcast.to(data.room).emit('ha_jud_gya_hai', JoinRes);
// 	});
// });
 
app.use(product)
app.use(category)
app.use(reviewrating)
app.use(subcategory)
app.use(user)
app.use(comment)
app.use(share)
app.use(like)
app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server is run on 3000 port");
})
