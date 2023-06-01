
export default function getIdURL(url){
    return parseInt(url.split("/").pop());
}