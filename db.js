import mongoose from "mongoose"

mongoose.connect(
    "mongodb://localhost:27017/we-tube", {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("X Error on DB Connection:${error}")

db.once("open", handleOpen);
db.on("error", handleError);










// export const videos = [{
//         id: 324393,
//         title: 'Video awesome',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Daehyun",
//             email: "neat507kr@gmail.com",
//         }
//     },

//     {
//         id: 324394,
//         title: 'Video super',
//         description: 'This is something I love2',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Daehyun",
//             email: "neat507kr@gmail.com",
//         }
//     },

//     {
//         id: 324395,
//         title: 'Video nice',
//         description: 'This is something I love3',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Daehyun",
//             email: "neat507kr@gmail.com",
//         }
//     },

//     {
//         id: 324396,
//         title: 'Video perfect',
//         description: 'This is something I love3',
//         views: 24,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Daehyun",
//             email: "neat507kr@gmail.com",
//         }
//     }
// ];