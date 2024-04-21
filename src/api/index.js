import axios from "axios";
// import { useStateValue } from "../context/StateProvider";
// import { reducerCases } from "../context/constants";



const baseUrl = "https://music-app-server-9pcw.onrender.com/";




export const validate = async (token) => {
    try {
        const res = await axios.get(`${baseUrl}users/login`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        return res.data.user
    } catch (err) {
        console.log(err);
    }
}


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}users/getAllUsers`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}

export const getAllSongs = async () => {
    try {
        const response = await axios.get(`${baseUrl}songs/getAllSongs`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}

export const getAllAlbums = async () => {
    try {
        const response = await axios.get(`${baseUrl}albums/getAllALbums`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}

export const getAllArtists = async () => {
    try {
        const response = await axios.get(`${baseUrl}artists/getAllArtists`)
      
        return response?.data

    } catch (error) {
        return console.log(error);;
    }
}


// api for  save content 

export const saveNewAlbum = async () => {
    try {
        const response = await axios.get(`${baseUrl}artists/getAllArtists`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}

export const saveNewArtist = async () => {
    try {
        const response = await axios.get(`${baseUrl}artists/getAllArtists`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}

export const saveNewSong = async () => {
    try {
        const response = await axios.get(`${baseUrl}artists/getAllArtists`)
        return response.data

    } catch (error) {
        return console.log(error);;
    }
}




export const changUserRole = async (userId, role) => {
    try {
        const response = await axios.put(`${baseUrl}users/updateRole/${userId}`, { data: { role: role } })
        return response

    } catch (error) {
        return console.log(error);;
    }
}


export const updatePlaylist = async (userId, playlist) => {
    try {
        const response = await axios.put(`${baseUrl}users/updatePlaylist/${userId}`, { data: playlist  })
        return response

    } catch (error) {
        return console.log(error);;
    }
}

