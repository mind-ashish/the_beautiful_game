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

    $("#image-holder img").on('click',function(){
        $("#image-holder img").remove();
    });
    //todo:reupload of same image doesn't work: fix tommorow.
}
})();