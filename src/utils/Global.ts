// All the static functions goes here
import axios from 'axios'
import { Constants } from '../utils/Contants'

export class Global {

    static async getHttp(URL, token) {
        var response = {
            type: -1,
            data: ""
        }
        await axios.get(Constants.BASE_URL + URL,
            {
                headers: { 'Authorization': "Bearer " + token },
            })
            .then(res => {
                // console.log(res)
                if (res.data.length < 1) {
                    response.type = 0
                    response.data = "no data"
                } else {
                    response.type = 1
                    response.data = res.data
                }
                console.log(res)
            })
        return response;
    }

    static async postHttp(URL, body, token) {
        var response = {
            type: -1,
            message: ""
        }
        await axios.post(Constants.BASE_URL + URL, JSON.stringify(body),
            {
                headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer " + token },
            })
            .then(res => {
                console.log(res)
                if (res.data.success == undefined) {
                    response.type = 0
                    response.message = res.data.error
                } else {
                    response.type = 1
                    response.message = res.data.success
                }
            })

        return response;
    }


    static async postHttpWithourHeader(URL, body) {
        var response = {
            type: -1,
            message: "",
            status: false
        }
        await axios.post(Constants.BASE_URL + URL, body,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(res => {
                console.log(res)
                if (res.data.status == "False") {
                    response.type = 0
                    response.message = res.data.error
                    response.status = res.data.status
                } else {
                    response.type = 1
                    response.message = res.data
                    response.status = res.data.status
                }
            })

        return response;
    }

    static formatDate() {
        return "yes!"
    }




}


