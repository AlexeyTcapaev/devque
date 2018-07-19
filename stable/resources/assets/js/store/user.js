import cookies from "js-cookie";
export default {

    state: {
        token: cookies.get("token"),
        name: cookies.get("name"),
        id: cookies.get("id")
    },
}