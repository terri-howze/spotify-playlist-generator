import express  from 'express';
import cors from "cors"
const app = express();
import 'dotenv/config'
import bodyParser from 'body-parser';
import SpotifyWebApi from 'spotify-web-api-node';

// const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.VITE_SPOTIFY_CLIENT_ID,
//     clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     redirectUri: 'http://http://localhost:5173/'
// })
const port = 3001;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/login', async (req,res) => {

    console.log("get method")
});
// app.get("/auth", (req,res) => {
// console.log("hitting route")
// // spotifyApi
// //     .authorizationCodeGrant(code)
// //     .then(data =>{
// //         res.json({
// //             accessToken: data.body.access_token,
// //             refreshToken: data.body.refresh_token,
// //         })}
// //         ).catch(err =>{
// //             res.sendStatus(400)
// //         })
// });

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//   }) 

  app.listen(port, () => {
    console.log(`server running on ${port}`);
});
