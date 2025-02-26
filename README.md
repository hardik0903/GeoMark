# GeoMark Website UI

This repository contains the UI for the GeoMark website, a renewable energy recommendation system. The current implementation displays a user interface with energy source cards, a background video, and various UI elements.

## Demonstration Video

Below is a demonstration video of the website UI in action. The background video file used is `view.mp4` (located in the `video/` folder):

![Website view](./video.mp4)

## Tasks / Roadmap

### 1. Backend and Machine Learning Integration
- **Backend Development:**  
  Develop a robust backend to handle:
  - Fetching and processing energy data for the Madhya Pradesh state.
  - Creating API endpoints for data retrieval and model inference.
- **Machine Learning Model:**  
  - Build and train an ML model using Madhya Pradesh state energy data.
  - Integrate the model to provide accurate energy recommendations based on user inputs.
  - Ensure smooth communication between the frontend and backend.

### 2. Button Functionality
- **Connecting All Buttons:**  
  - Link all UI buttons (e.g., "Get Started", "Calculate Recommendations") to their respective functions.
  - Implement proper navigation, API calls, and error handling for user interactions.

### 3. UI Improvements
- **Image Integration:**  
  - Replace placeholder images with important images stored in the `images` folder.
  - Ensure images are responsive and properly formatted.
- **Video Integration:**  
  - Update the background video to use the file named `view.mp4` (located in the `video` folder).
  - Ensure the video plays correctly with appropriate browser settings (e.g., muted, looped, plays inline).
- **General UI Fixes:**  
  - Adjust spacing, alignment, and responsiveness for a cleaner user interface.
  - Refine overall design consistency and user experience.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/hardik0903/GeoMark
   cd GeoMark
