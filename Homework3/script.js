// API endpoints
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Get form elements
const form = document.getElementById("registration-form");
const registerBtn = document.getElementById("register-btn");
const successMessage = document.getElementById("success");
const loadingMessage = document.getElementById("loading");

// Get input fields
const usernameInput = document.getElementById("username");
const nameInput = document.getElementById("name");
const familyNameInput = document.getElementById("family-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const streetInput = document.getElementById("street");
const cityInput = document.getElementById("city");
const postalCodeInput = document.getElementById("postal-code");

// Validation functions
const validators = {
  username: (value) => {
    if (!value || value.trim() === "") {
      return "Потребителското име е задължително поле";
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length < 3 || trimmedValue.length > 10) {
      return "Потребителското име трябва да е между 3 и 10 символа";
    }
    return null;
  },

  name: (value) => {
    if (!value || value.trim() === "") {
      return "Името е задължително поле";
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length > 50) {
      return "Името не може да е повече от 50 символа";
    }
    return null;
  },

  familyName: (value) => {
    if (!value || value.trim() === "") {
      return "Фамилията е задължително поле";
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length > 50) {
      return "Фамилията не може да е повече от 50 символа";
    }
    return null;
  },

  email: (value) => {
    if (!value || value.trim() === "") {
      return "Имейлът е задължително поле";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Моля, въведете валиден имейл адрес";
    }
    return null;
  },

  password: (value) => {
    if (!value || value.trim() === "") {
      return "Паролата е задължително поле";
    }
    const trimmedValue = value.trim();
    if (trimmedValue.length < 6 || trimmedValue.length > 10) {
      return "Паролата трябва да е між 6 и 10 символа";
    }
    const hasUpperCase = /[A-Z]/.test(trimmedValue);
    const hasLowerCase = /[a-z]/.test(trimmedValue);
    const hasDigit = /[0-9]/.test(trimmedValue);

    if (!hasUpperCase || !hasLowerCase || !hasDigit) {
      return "Паролата трябва да съдържа главни и малки букви и цифри";
    }
    return null;
  },

  postalCode: (value) => {
    // Optional field - if empty, it's valid
    if (!value || value.trim() === "") {
      return null;
    }

    // Format: 1111 (4 digits) or 11111-1111 (5 digits, dash, 4 digits)
    const postalCodeRegex = /^(\d{4})$|^(\d{5}-\d{4})$/;
    if (!postalCodeRegex.test(value)) {
      return "Пощенският код трябва да е във формат 1111 или 11111-1111";
    }
    return null;
  },
};

// Show error message
const showError = (fieldId, message) => {
  const errorElement = document.getElementById(`${fieldId}-error`);
  const inputElement = document.getElementById(fieldId);

  if (errorElement && inputElement) {
    errorElement.textContent = message;
    errorElement.classList.add("show");
    inputElement.classList.add("invalid");
  }
};

// Clear error message
const clearError = (fieldId) => {
  const errorElement = document.getElementById(`${fieldId}-error`);
  const inputElement = document.getElementById(fieldId);

  if (errorElement && inputElement) {
    errorElement.textContent = "";
    errorElement.classList.remove("show");
    inputElement.classList.remove("invalid");
  }
};

// Clear all errors
const clearAllErrors = () => {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((el) => {
    el.textContent = "";
    el.classList.remove("show");
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("invalid");
  });
};

// Validate single field
const validateField = (fieldId, value, validatorKey) => {
  const error = validators[validatorKey](value);
  if (error) {
    showError(fieldId, error);
    return false;
  } else {
    clearError(fieldId);
    return true;
  }
};

// Validate all required fields
const validateForm = () => {
  let isValid = true;

  // Validate username
  if (!validateField("username", usernameInput.value, "username")) {
    isValid = false;
  }

  // Validate name
  if (!validateField("name", nameInput.value, "name")) {
    isValid = false;
  }

  // Validate family name
  if (!validateField("family-name", familyNameInput.value, "familyName")) {
    isValid = false;
  }

  // Validate email
  if (!validateField("email", emailInput.value, "email")) {
    isValid = false;
  }

  // Validate password
  if (!validateField("password", passwordInput.value, "password")) {
    isValid = false;
  }

  // Validate postal code (if provided)
  if (postalCodeInput.value.trim() !== "") {
    if (!validateField("postal-code", postalCodeInput.value, "postalCode")) {
      isValid = false;
    }
  }

  return isValid;
};

// Fetch existing users
const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Грешка при свързване със сървъра");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    throw new Error("Грешка при извличане на потребители: " + error.message);
  }
};

// Check if username exists
const checkUsernameExists = (username, users) => {
  return users.some(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
};

// Register new user
const registerUser = async (userData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Грешка при регистрация");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Грешка при регистрация: " + error.message);
  }
};

// Show success message
const showSuccess = (message) => {
  successMessage.textContent = message;
  successMessage.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);
};

// Show loading state
const setLoading = (isLoading) => {
  if (isLoading) {
    loadingMessage.classList.add("show");
    registerBtn.disabled = true;
  } else {
    loadingMessage.classList.remove("show");
    registerBtn.disabled = false;
  }
};

// Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();

  // Clear previous messages
  clearAllErrors();
  successMessage.classList.remove("show");

  // Validate form
  if (!validateForm()) {
    return;
  }

  // Show loading state
  setLoading(true);

  try {
    // Fetch existing users
    const users = await fetchUsers();

    // Check if username already exists
    const usernameExists = checkUsernameExists(usernameInput.value, users);

    if (usernameExists) {
      showError(
        "username",
        "Потребител с това потребителско име вече съществува"
      );
      setLoading(false);
      return;
    }

    // Prepare user data
    const userData = {
      username: usernameInput.value.trim(),
      name: `${nameInput.value.trim()} ${familyNameInput.value.trim()}`,
      email: emailInput.value.trim(),
      address: {
        street: streetInput.value.trim() || "",
        city: cityInput.value.trim() || "",
        zipcode: postalCodeInput.value.trim() || "",
      },
    };

    // Register user
    const result = await registerUser(userData);

    // Show success message
    showSuccess(
      `Успешна регистрация! Добре дошли, ${nameInput.value}! Вашият акаунт беше създаден успешно.`
    );

    // Reset form
    form.reset();
  } catch (error) {
    showError("username", error.message);
  } finally {
    setLoading(false);
  }
};

// Add real-time validation
usernameInput.addEventListener("blur", () => {
  if (usernameInput.value.trim() !== "") {
    validateField("username", usernameInput.value, "username");
  }
});

nameInput.addEventListener("blur", () => {
  if (nameInput.value.trim() !== "") {
    validateField("name", nameInput.value, "name");
  }
});

familyNameInput.addEventListener("blur", () => {
  if (familyNameInput.value.trim() !== "") {
    validateField("family-name", familyNameInput.value, "familyName");
  }
});

emailInput.addEventListener("blur", () => {
  if (emailInput.value.trim() !== "") {
    validateField("email", emailInput.value, "email");
  }
});

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.trim() !== "") {
    validateField("password", passwordInput.value, "password");
  }
});

postalCodeInput.addEventListener("blur", () => {
  if (postalCodeInput.value.trim() !== "") {
    validateField("postal-code", postalCodeInput.value, "postalCode");
  }
});

// Add form submit event listener
form.addEventListener("submit", handleSubmit);
