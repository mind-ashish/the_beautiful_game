(function(){

    const inputElement = $("#avatar");
    inputElement.on("change", handleFiles);
    function handleFiles() {
    const fileList = this.files; 
    console.log(fileList);
    const img = document.createElement("img");
      img.src = URL.createObjectURL(fileList[0]);
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
    $("#image-holder").append(img);

    $("#image-holder").on('click',function(){
        $("#image-holder img").remove();
        document.getElementById('avatar').value=""; //this empties the fileList from input type =file. So removing file and uploading same works fine now.
    });
}
})();

//note document.getElementById('avatar').files works in js but $("#avatar").files doesn't in jquery since part after . in most case is undefined in jquery docs, so check before u use.