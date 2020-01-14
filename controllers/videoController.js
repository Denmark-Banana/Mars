import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render('home', { pageTitle: 'Home', videos });
    } catch (error) {
        console.log(error);
        res.render('home', { pageTitle: 'Home', videos: [] });
    }
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render('search', { pageTitle: 'Search', searchingBy, videos });
}

export const getUpload = (req, res) =>
    res.render('upload', { pageTitle: 'Upload' });

export const postUpload = (req, res) => {
    const { body } = req;
    console.log(body);
    // To Do : Upload and Save
    // fake Id
    res.render('upload', { pageTitle: 'Upload' });
    //downlink : http://bbb3d.renderfarming.net/download.html
    //res.redirect(routes.videoDetail(324393));
}
export const videoDetail = (req, res) =>
    res.render('videoDetail', { pageTitle: 'Video Detail' });
export const editVideo = (req, res) =>
    res.render('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) =>
    res.render('deleteVideo', { pageTitle: 'Delete Video' });