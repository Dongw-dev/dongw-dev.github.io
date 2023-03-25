const __import =  (url) => {
    
    const file = `${url}?t=${new Date().getTime()}`
    document.write(`<script src="${file}" type="text/javascript"></script>`)
}