function checkFilePointer(fp) {
    if (!fp) {
        console.log("File pointer is invalid.");
        // Handle the invalid file pointer case here.
        // For example, you might want to initialize it or throw an error.
    } else {
        console.log("File pointer is valid.");
        // Proceed with using the valid file pointer.
    }
}

// Example usage:
let filePointer = null;
checkFilePointer(filePointer);

// Output: "File pointer is invalid."

filePointer = {}; // Assuming this is a valid file pointer object.
checkFilePointer(filePointer);

// Output: "File pointer is valid."
