function onLoad() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    // Load saved input from localStorage
    const savedInput = localStorage.getItem("htmlInput");
    if (savedInput) {
        input.value = savedInput;
        output.innerHTML = savedInput;
    } else {
        output.innerHTML = "<i>Output here...</i>";
    }

    // Save input to localStorage on change
    input.addEventListener("input", () => {
        const value = input.value;
        localStorage.setItem("htmlInput", value);
        output.innerHTML = value || "<i>Output here...</i>";
    });
}