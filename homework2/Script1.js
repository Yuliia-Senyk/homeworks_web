function Submitted(){
        alert('your recipe was successfully uploaded');
        document.getElementById("hidden-div").removeAttribute("hidden");

        var title = document.getElementById("recipe-title").value;
        document.getElementById("title-table").innerHTML = title;

        var category = document.getElementById("category").value;
        document.getElementById("category-table").innerHTML = category;

        var number = document.getElementById("servings").value;
        document.getElementById("number-table").innerHTML = number;

        var name = document.getElementById("firstname").value;
        var last = document.getElementById("lastname").value;
        var full = name + " " + last;
        document.getElementById("name-table").innerHTML = full;

        var email = document.getElementById("email").value;
        document.getElementById("email-table").innerHTML = email;


        const input = document.getElementById("image");
        const displayedImg = document.getElementById("displayedImg");

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                displayedImg.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }

        const fileName = input.files[0] ? input.files[0].name : "No file uploaded";
        document.getElementById("displayed").innerHTML = fileName;
}
