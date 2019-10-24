const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};


    data.name = !isEmpty(data.name) ? data.name : "";
    data.surname = !isEmpty(data.surname) ? data.surname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.region = !isEmpty(data.region) ? data.region : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    data.birthdaymdy = !isEmpty(data.birthdaymdy) ? data.birthdaymdy : "";
    data.creditcard = !isEmpty(data.creditcard) ? data.creditcard : "";
    data.ccexp = !isEmpty(data.ccexp) ? data.ccexp : "";
    data.ccpin = !isEmpty(data.ccpin) ? data.ccpin : "";
    data.ccsecurity = !isEmpty(data.ccsecurity) ? data.ccsecurity : "";


    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    // Surname checks
    if (Validator.isEmpty(data.surname)) {
        errors.surname = "Surname field is required";
    }
    // Gender checks
    if (Validator.isEmpty(data.gender)) {
        errors.gender = "Gender field is required";
    }
    // Region checks
    if (Validator.isEmpty(data.region)) {
        errors.region = "Region field is required";
    }
    // Phone checks
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "Phone field is required";
    }
    // Birthdate MDY checks
    if (Validator.isEmpty(data.birthdaymdy)) {
        errors.birthdaymdy = "Birthday field is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    // Creditcard number checks
    if (Validator.isEmpty(data.creditcard)) {
        errors.creditcard = "Credit Card number field is required";
    }
    // Creditcard expiration checks
    if (Validator.isEmpty(data.ccexp)) {
        errors.ccexp = "Credit Card expiration field is required";
    }
    // CC pin checks
    if (Validator.isEmpty(data.ccpin)) {
        errors.ccpin = "Credit Card Pin field is required";
    }
    // CC security checks
    if (Validator.isEmpty(data.ccsecurity)) {
        errors.ccsecurity = "Credit Card CVV code field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};