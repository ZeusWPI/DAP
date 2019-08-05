var VisibilityEnum = {
    VISIBLE: 1,
    HIDDEN: 2
};


function check_same_password(){
    var new_password = document.getElementById("new-password");
    var new_password_confirmation = document.getElementById("new-password-confirmation");

    if (new_password.value === new_password_confirmation.value) {
        [new_password, new_password_confirmation].forEach(field => {
            // field.classList.remove("invalid-pass-field");
            field.setCustomValidity("");
        });
        // set_visibility("invalid-pass", VisibilityEnum.HIDDEN);
    } else {
        [new_password, new_password_confirmation].forEach(field => {
            // field.classList.add("invalid-pass-field");
            field.setCustomValidity("passwords do not math");
        });
        // set_visibility("invalid-pass", VisibilityEnum.VISIBLE);
    }
}

function set_visibility(id, visibility) {
    var e = document.getElementById(id);
    if(visibility === VisibilityEnum.HIDDEN)
        e.style.display = 'none';
    else if(visibility === VisibilityEnum.VISIBLE)
        e.style.display = 'block';
}
