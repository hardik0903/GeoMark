from flask import Flask, send_from_directory, abort
import os

app = Flask(__name__)

# Define the absolute path to the image folder
IMAGE_FOLDER = r"C:\Users\Hardik\OneDrive\Desktop\new\image"

@app.route('/api/image/<filename>')
def get_image(filename):
    file_path = os.path.join(IMAGE_FOLDER, filename)

    # Debugging: Print the full file path
    print("Requested file:", file_path)

    # Check if the file exists
    if not os.path.exists(file_path):
        print("File not found:", file_path)
        abort(404)  # Return a 404 error if the file does not exist

    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
